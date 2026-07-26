create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  plan_interested text not null,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table waitlist enable row level security;

-- Create policy to allow anonymous inserts
create policy "Allow anonymous inserts"
on waitlist for insert
with check (true);
