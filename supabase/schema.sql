create extension if not exists pgcrypto;

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  service_type text not null,
  desired_date date not null,
  status text not null default 'en_attente',
  message text,
  created_at timestamptz not null default now()
);

alter table public.appointments
add column if not exists status text not null default 'en_attente';

alter table public.appointments enable row level security;

drop policy if exists "no_client_access" on public.appointments;
create policy "no_client_access"
on public.appointments
as restrictive
for all
to anon
using (false)
with check (false);
