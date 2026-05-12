create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  category text default 'Blog',
  cover_image text,
  youtube_url text,
  likes integer not null default 0,
  dislikes integer not null default 0,
  is_published boolean not null default true,
  published_at timestamptz default now(),
  created_at timestamptz not null default now()
);

alter table public.blog_posts
add column if not exists likes integer not null default 0,
add column if not exists dislikes integer not null default 0;

alter table public.blog_posts enable row level security;

create policy "Public can read published posts"
on public.blog_posts
for select
using (is_published = true);
