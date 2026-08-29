-- Add reminder tracking columns to contracts table
ALTER TABLE public.contracts 
ADD COLUMN IF NOT EXISTS reminder_3d_sent BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS reminder_1d_sent BOOLEAN DEFAULT FALSE;
