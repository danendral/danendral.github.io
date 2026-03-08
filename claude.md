# Danendra Lohanata — Personal Website

## Project Overview

A personal portfolio website for **Danendra Lohanata**, a Data Analyst & AI Engineer based in Singapore. The site showcases his professional experience, education, projects, achievements, and blog — serving as a living resume and portfolio hub.

**Live URL:** `https://danendralohanata.github.io` (or equivalent GitHub Pages URL)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Astro** (static site generator) |
| UI Components | **React** (interactive islands only) |
| Styling | **Tailwind CSS** |
| Animations | **Framer Motion** (React islands) + CSS animations (global) |
| Blog | **Astro Content Collections** with MDX |
| Deployment | **GitHub Pages** via GitHub Actions |
| Package Manager | npm |

---

## Design System

### Theme: Monochrome + Subtle Accent

A sleek, editorial-inspired design that feels refined and professional — not generic.

#### Colors

```
--color-bg:           #0A0A0A       /* near-black background */
--color-bg-elevated:  #141414       /* cards, sections */
--color-bg-subtle:    #1E1E1E       /* hover states, borders */
--color-text-primary: #F5F5F5       /* main text */
--color-text-secondary: #A0A0A0    /* muted/secondary text */
--color-text-muted:   #666666       /* captions, meta */
--color-accent:       #5BA4CF       /* subtle steel-blue accent — links, highlights, hover */
--color-accent-dim:   #3D7A9E       /* accent hover/pressed state */
--color-border:       #2A2A2A       /* subtle dividers */
```

#### Typography

- **Headings:** `"Instrument Serif"` (Google Fonts) — elegant, editorial feel
- **Body:** `"Geist"` or `"Satoshi"` — clean, modern sans-serif
- **Mono (code/tags):** `"JetBrains Mono"` — for any code snippets or tech tags

#### Animation Style: Subtle & Elegant

- Fade-in-up on scroll (staggered per element, 50-100ms delay between items)
- Smooth scroll between sections
- Hover: subtle scale (1.02) + accent color shift on cards
- Page transitions: cross-fade between routes
- Timeline dots: pulse animation on scroll-into-view
- No parallax, no aggressive motion — keep it calm and intentional

#### Layout Principles

- Max content width: `720px` for text, `1080px` for section containers
- Generous whitespace — let the content breathe
- Single-column layout for most sections, grid for project cards
- Sticky/fixed minimal navbar with smooth scroll links
- Mobile-first responsive design

---

## Site Structure

```
/
├── index.astro              ← Single-page with all sections
├── /blog                    ← Blog listing page
│   └── /blog/[slug]         ← Individual blog post
└── 404.astro                ← Custom 404 page
```

### Sections (on index page, in order)

#### 1. Hero / About Me
- Name: **Danendra Lohanata**
- Tagline: "Data, Analytics, and AI"
- Short bio (2-3 sentences): Data professional at Oyika, NTU Math graduate (CGPA 4.88/5.00), Excel esports competitor. Passionate about leveraging data to drive insights and business outcomes.
- Links: GitHub, LinkedIn, Email
- Optional: subtle animated gradient or noise texture background

#### 2. Experience (Vertical Timeline)
- **Oyika** — Data, Analytics, and AI (Jan 2023 – Present)
  - Lead end-to-end data strategy across SEA; manage 3TB+ data spanning operations, CRM, and IoT
  - Led analytics on sales funneling, retention, churn, LTV — enabling ~300% YoY growth
  - Deployed Zendesk CRM + AI chatbot; managed 2,000+ tickets/month
  - Built Databricks data lakehouse integrating AliCloud, AWS, and Google Drive
  - Coordinated Power BI dashboards for real-time bike tracking and business KPIs
  - R&D: Vehicle Routing Problem optimization, battery performance tracking

- **Belajarlagi** — Excel Bootcamp Instructor (Jul 2025 – Aug 2025)

- **Rolls-Royce Singapore** — AI Intern (Jul 2022 – Dec 2022)
  - Anomaly detection for multivariate time series (jet engine failure prevention)
  - R&D in multimodal ML (text + images) for aerospace
  - Root cause analysis on fuel consumption using ML
  - Fire evacuation system (Excel, SQL, JavaScript)

- **Shopee** — Regional Data Analytics Intern (Jan 2022 – Apr 2022)
  - SQL aggregation + real-time dashboard for Shopee Express rider productivity across SEA
  - Root cause analysis coordinating with local ops teams

- **JobKred** — Data Science Intern (May 2021 – Jul 2021)
  - BERT-based NER for skills detection in job ads (90% accuracy)
  - Managed 30+ models on GCP + MLflow

- **NTU** — Undergraduate Student Researcher (Aug 2020 – May 2021)
  - Deep Reinforcement Learning on Snake Game (TensorFlow)

- **Mathematics Olympiad Trainer** (May 2020 – Dec 2020)

#### 3. Education
- **Nanyang Technological University** (Aug 2019 – Jun 2023)
  - BSc Mathematical Sciences, Minor in Finance
  - CGPA: 4.88/5.00 | Dean's List AY2020/2021
  - ASEAN Undergraduate Scholarship
  - Specialisation in Statistics

- **National University of Singapore** (Aug 2021 – Dec 2021)
  - Student Exchange Programme (SUSEP)
  - Focus: Statistics & Business Analytics, AI courses

#### 4. Projects / Portfolio
Display as a grid of cards with tags. Each card: title, short description, tech tags, optional link/image.

Featured projects:

| Project | Description | Tech |
|---------|------------|------|
| **BantuAI** | AI-powered customer service platform for competition entry. WhatsApp-based RAG chatbot for an Indonesian electronics retailer. | n8n, Supabase, OpenAI, WAHA, WhatsApp API |
| **Oyika Data Lakehouse** | Built company-wide Databricks lakehouse integrating AliCloud, AWS, and Google Drive for centralized analytics across SEA operations. | Databricks, SQL, AWS, AliCloud |
| **AI Customer Support Bot** | Deployed AI chatbot integrated with Zendesk CRM, handling 2,000+ tickets/month across WhatsApp, Instagram, email. | Zendesk, OpenAI, Python |
| **Snake Game DRL** | Deep Reinforcement Learning agent for Snake game — agent scored 40 points within 50 episodes. | Python, TensorFlow, DRL |
| **Fake News Classifier** | Compared Naïve Bayes, CNN, and LSTM for detecting fake news from titles and text. | Python, NLP, Deep Learning |
| **Sports Data Hackathon** | Football player position prediction using tracking data. 1st place. | Python, TensorFlow, Data Analysis |
| **Excel Esports** | Competed in Microsoft Excel World Championship. 1st place MEWC Indonesia 2024, Top 8 Collegiate Challenge 2022. | Excel, Problem Solving |
| **VRP Optimization** | Vehicle Routing Problem optimization for Oyika's battery-swapping logistics. | Python, OR |

#### 5. Achievements & Awards
Display as a compact list or badges.

- 1st Place — Microsoft Excel World Championship (MEWC) Indonesia 2024
- Top 8 — Microsoft Excel Collegiate Challenge 2022 (University of Arizona, USA)
- ASEAN Undergraduate Scholarship
- Dean's List AY2020/2021
- DataExpert.io Data Engineering Bootcamp (Top 1.7% of 34,000+ applicants)
- Google Data Analytics Professional Certificate
- DataCamp Data Scientist Professional Certificate
- 1st Place — NTU Sports Data Hackathon 2021
- 1st Place — SQL Programming Competition 2018
- Bronze Medal — National Science Olympiad (Mathematics)
- Featured in CNA article: Excel esports competition

#### 6. Blog (Future)
- Use Astro Content Collections with MDX
- Listing page at `/blog` with cards (title, date, tags, excerpt)
- Individual post pages at `/blog/[slug]`
- Start with placeholder "Coming Soon" state
- Categories: Data, AI, Excel, Career

#### 7. Contact
- Simple section with links: Email (danendra.lohanata@gmail.com), LinkedIn, GitHub
- Optional: minimal contact form via Formspree or Web3Forms (no backend needed)

---

## Technical Skills (for tags/badges across the site)

### Languages & Tools
Python, SQL, R, MATLAB, JavaScript, LaTeX

### Data & ML
Databricks, Apache Spark, Kafka, TensorFlow, scikit-learn, NLP, BERT, Deep Reinforcement Learning

### Cloud & Infra
AWS, GCP, AliCloud, Databricks, Supabase

### Databases
PostgreSQL, MySQL, MongoDB

### Visualization
Power BI, Looker, Tableau

### Tools & Platforms
Zendesk, OpenAI, n8n, Make, MLflow, Google Analytics, Jira, Trello

### Other
Microsoft Excel (competitive), Adobe Photoshop, Figma

---

## Content & Copy Notes

- **Tone:** Professional but approachable. Not corporate-stiff. Let personality come through.
- **Language:** English (primary). Dan speaks Indonesian (native) and Chinese (limited).
- **Pronouns:** He/him. Third person for bio, first person acceptable in blog posts.
- **Resume download:** Include a downloadable PDF version of resume.
- **Profile photo:** Placeholder needed — Dan to provide.

---

## File Structure (Astro Project)

```
danendra-site/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   ├── favicon.svg
│   ├── resume.pdf
│   └── og-image.png           ← social sharing preview
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    ← HTML head, nav, footer
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Experience.astro
│   │   ├── Education.astro
│   │   ├── Projects.astro
│   │   ├── Achievements.astro
│   │   ├── Blog.astro          ← blog preview section on homepage
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── FadeIn.tsx          ← React island for scroll animations
│   │   └── ProjectCard.tsx     ← React island for interactive cards
│   ├── content/
│   │   ├── config.ts           ← content collection schema
│   │   └── blog/
│   │       └── hello-world.mdx ← placeholder post
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css
│   └── data/
│       ├── experience.ts       ← structured data for experience timeline
│       ├── projects.ts         ← structured data for portfolio
│       ├── education.ts        ← structured data for education
│       └── achievements.ts     ← structured data for awards
```

---

## Deployment (GitHub Pages)

1. Repository: `danendralohanata.github.io` (or any repo with Pages enabled)
2. Astro config: set `site` and `base` accordingly
3. GitHub Actions workflow for automatic build + deploy on push to `main`
4. Use `@astrojs/sitemap` for SEO

### astro.config.mjs key settings:
```js
export default defineConfig({
  site: 'https://danendralohanata.github.io',
  integrations: [react(), tailwind(), mdx(), sitemap()],
  output: 'static',
});
```

---

## Development Commands

```bash
npm create astro@latest danendra-site
cd danendra-site
npx astro add react tailwind mdx sitemap
npm install framer-motion
npm run dev          # local dev server
npm run build        # production build
npm run preview      # preview production build
```

---

## SEO & Meta

- Page title: "Danendra Lohanata — Data, Analytics, and AI"
- Meta description: "Personal website of Danendra Lohanata. Data Analyst & AI Engineer at Oyika, NTU Mathematics graduate, Excel esports competitor."
- Open Graph image: custom OG image with name + title
- Structured data: JSON-LD for Person schema

---

## Future Enhancements (Post-MVP)

- [ ] Blog with full MDX support + code syntax highlighting
- [ ] Dark/light mode toggle (currently dark only)
- [ ] Project detail pages with screenshots and write-ups
- [ ] Analytics (Plausible or Umami — privacy-friendly)
- [ ] Custom domain setup
- [ ] Internationalization (EN/ID)
- [ ] RSS feed for blog
