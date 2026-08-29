import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase/admin';
import { sendEmail } from '@/lib/email';

export async function GET(req: Request) {
  // Simple auth check for cron
  const authHeader = req.headers.get('authorization');
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createSupabaseAdminClient();
  const now = new RegExp('utc').test(new Date().toISOString()) ? new Date().toISOString() : new Date().toISOString();

  try {
    // 1. Delete expired contracts
    const { data: deleted, error: deleteError } = await supabase
      .from('contracts')
      .delete()
      .lt('expires_at', now)
      .select('id');

    if (deleteError) throw deleteError;

    // 2. Send 1-day reminders (contracts expiring in < 24h)
    const oneDayFromNow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    const { data: remind1d, error: err1d } = await supabase
      .from('contracts')
      .select('id, user_id, expires_at')
      .lt('expires_at', oneDayFromNow)
      .eq('reminder_1d_sent', false);

    if (err1d) throw err1d;

    for (const contract of remind1d || []) {
      const { data: { user } } = await supabase.auth.admin.getUserById(contract.user_id);
      if (user?.email) {
        await sendEmail(user.email, 'reminder1d');
        await supabase.from('contracts').update({ reminder_1d_sent: true }).eq('id', contract.id);
      }
    }

    // 3. Send 3-day reminders (contracts expiring in < 72h)
    const threeDaysFromNow = new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString();
    const { data: remind3d, error: err3d } = await supabase
      .from('contracts')
      .select('id, user_id, expires_at')
      .lt('expires_at', threeDaysFromNow)
      .eq('reminder_3d_sent', false);

    if (err3d) throw err3d;

    for (const contract of remind3d || []) {
      const { data: { user } } = await supabase.auth.admin.getUserById(contract.user_id);
      if (user?.email) {
        await sendEmail(user.email, 'reminder3d');
        await supabase.from('contracts').update({ reminder_3d_sent: true }).eq('id', contract.id);
      }
    }

    return NextResponse.json({
      success: true,
      deletedCount: deleted?.length || 0,
      reminders1d: remind1d?.length || 0,
      reminders3d: remind3d?.length || 0
    });
  } catch (error) {
    console.error('Cleanup cron error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
