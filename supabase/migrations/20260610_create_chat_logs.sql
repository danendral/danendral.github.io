create table if not exists chat_logs (
  id          bigserial primary key,
  session_id  text        not null,
  user_msg    text        not null,
  assistant_msg text      not null,
  ip          text,
  created_at  timestamptz not null default now()
);

-- Only you (service role) can read/write — visitors cannot query this table
alter table chat_logs enable row level security;
