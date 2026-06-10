# Danendra Lohanata — Personal Website

Personal portfolio site for Danendra Lohanata, Data and AI Lead at Oyika.

**Live:** https://danendralohanata.github.io

## Stack

- **Astro** (static site generator)
- **React** (interactive islands: ChatWidget, ProjectCard, FadeIn)
- **Tailwind CSS**
- **Framer Motion** (scroll animations)
- **Supabase Edge Functions** (AI chatbot backend)
- **GitHub Pages** (deployment via GitHub Actions)

## Dev

```powershell
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to ./dist/
npm run preview  # preview production build
```

Note: git on this machine requires the full path:
```powershell
$git = "C:\Program Files\Git\mingw64\libexec\git-core\git.exe"
```

## Site Sections

| Section | Component | Data |
|---------|-----------|------|
| Hero | `src/components/Hero.astro` | inline |
| Experience | `src/components/Experience.astro` | `src/data/experience.ts` |
| Education | `src/components/Education.astro` | `src/data/education.ts` |
| Projects | `src/components/Projects.astro` | `src/data/projects.ts` |
| Achievements | `src/components/Achievements.astro` | `src/data/achievements.ts` |
| Blog | `src/components/Blog.astro` | `src/content/blog/` (MDX) |
| Contact | `src/components/Contact.astro` | inline |

## Chatbot

AI chat widget powered by a Supabase Edge Function at `supabase/functions/chat/index.ts`.

Deploy: `npx supabase functions deploy chat --project-ref xnnteydwzgeoiwhytgcp`
Secret: `npx supabase secrets set OPENAI_API_KEY=<key> --project-ref xnnteydwzgeoiwhytgcp`

## Status (2026-06-10)

- [x] All core sections built and styled
- [x] 3 project detail pages (crypto-backtesting-engine, bantu-ai, football-match-video-analysis)
- [x] AI chatbot deployed and working
- [x] CNA press feature in Hero + Achievements
- [ ] Blog posts (placeholder "Coming Soon" state)
- [ ] Push to GitHub Pages

## Session records

See `handoff/` for per-session change logs.
