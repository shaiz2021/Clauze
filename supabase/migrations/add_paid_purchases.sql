-- Create paid_purchases table for tracking Lemon Squeezy orders
CREATE TABLE IF NOT EXISTS public.paid_purchases (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    lemonsqueezy_order_id TEXT UNIQUE NOT NULL,
    variant_id TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'refunded')),
    credits_granted INTEGER DEFAULT 0,
    refunded_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on paid_purchases
ALTER TABLE public.paid_purchases ENABLE ROW LEVEL SECURITY;

-- Paid purchases policies
CREATE POLICY "Users can view their own purchases." ON public.paid_purchases
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Service role can do anything." ON public.paid_purchases
    FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

-- Create paid_credits table for tracking actual available credits
CREATE TABLE IF NOT EXISTS public.paid_credits (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    balance INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id)
);

-- Enable RLS on paid_credits
ALTER TABLE public.paid_credits ENABLE ROW LEVEL SECURITY;

-- Paid credits policies
CREATE POLICY "Users can view their own credits." ON public.paid_credits
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Service role can do anything." ON public.paid_credits
    FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

-- Create function to add paid credits
CREATE OR REPLACE FUNCTION public.add_paid_credits(p_user_id UUID, p_amount INTEGER)
RETURNS void AS $$
BEGIN
    INSERT INTO public.paid_credits (user_id, balance)
    VALUES (p_user_id, p_amount)
    ON CONFLICT (user_id)
    DO UPDATE SET 
        balance = public.paid_credits.balance + p_amount,
        updated_at = timezone('utc'::text, now());
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to use a paid credit
CREATE OR REPLACE FUNCTION public.use_paid_credit(p_user_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
    v_balance INTEGER;
BEGIN
    SELECT balance INTO v_balance FROM public.paid_credits WHERE user_id = p_user_id FOR UPDATE;
    
    IF v_balance IS NULL OR v_balance <= 0 THEN
        RETURN FALSE;
    END IF;
    
    UPDATE public.paid_credits 
    SET balance = balance - 1, updated_at = timezone('utc'::text, now())
    WHERE user_id = p_user_id;
    
    RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to refund credits (only if not already refunded)
CREATE OR REPLACE FUNCTION public.refund_paid_credits(p_user_id UUID, p_amount INTEGER)
RETURNS void AS $$
BEGIN
    UPDATE public.paid_credits 
    SET balance = GREATEST(0, balance - p_amount),
        updated_at = timezone('utc'::text, now())
    WHERE user_id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
