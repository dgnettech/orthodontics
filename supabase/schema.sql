-- Nel Orthodontics website form persistence
-- Run in Supabase SQL editor or via: supabase db push

create extension if not exists pgcrypto;

create table if not exists public.appointment_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  surname text not null,
  phone text not null,
  email text not null,
  message text,
  preferred_date date,
  patient_type text not null check (patient_type in ('Child', 'Teen', 'Adult', 'Existing patient')),
  source text not null default 'website',
  status text not null default 'new' check (status in ('new', 'contacted', 'booked', 'closed')),
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  surname text not null,
  phone text not null,
  email text not null,
  message text not null,
  source text not null default 'website',
  status text not null default 'new' check (status in ('new', 'read', 'replied', 'closed')),
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists appointment_requests_set_updated_at on public.appointment_requests;
create trigger appointment_requests_set_updated_at
before update on public.appointment_requests
for each row execute function public.set_updated_at();

drop trigger if exists contact_messages_set_updated_at on public.contact_messages;
create trigger contact_messages_set_updated_at
before update on public.contact_messages
for each row execute function public.set_updated_at();

create index if not exists appointment_requests_created_at_idx on public.appointment_requests (created_at desc);
create index if not exists appointment_requests_status_idx on public.appointment_requests (status);
create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);
create index if not exists contact_messages_status_idx on public.contact_messages (status);

alter table public.appointment_requests enable row level security;
alter table public.contact_messages enable row level security;

-- No public insert policy is required because this Next.js app inserts through a server route
-- using SUPABASE_SERVICE_ROLE_KEY. Build a future admin panel with authenticated staff-only policies.
