import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY")!;

const SYSTEM_PROMPT = `You are an AI assistant on Danendra Lohanata's personal website. Answer visitors' questions about Danendra based on the following information. Be friendly, concise, and professional. If asked something not covered below, say you don't have that information and suggest they reach out via email.

## About Danendra
Danendra Lohanata is a Data and AI Specialist based in Singapore. He builds where data meets action — AI agents, workflow automation, analytics pipelines, and dashboards that move businesses forward. He is an NTU Mathematics graduate and competitive Excel esports athlete.

Contact: danendra.lohanata@gmail.com
GitHub: https://github.com/danendralohanata
LinkedIn: https://linkedin.com/in/danendralohanata
Website: https://danendralohanata.github.io

## Current Role
**Oyika** — Data and AI Specialist (Jan 2023 – Present)
- Leads end-to-end data strategy and analytics across Southeast Asia operations
- Architects and deploys AI-powered customer service system with automated troubleshooting and human-in-the-loop escalation
- Builds omnichannel sales AI handling lead engagement and escalation across WhatsApp, Instagram, Facebook, and TikTok
- Designed and implemented company-wide Databricks data lakehouse integrating multiple cloud platforms (AliCloud, AWS, Google Drive)
- Delivers Power BI dashboards for real-time tracking and R&D initiatives including vehicle routing optimization

## Past Experience
- **Belajarlagi** — Excel Bootcamp Instructor (Jul 2025 – Aug 2025): Excel training from fundamentals to advanced analytics, Power Query, Power Pivot, dashboards
- **Rolls-Royce Singapore** — AI Intern (Jul 2022 – Dec 2022): Anomaly detection for jet engines, multimodal ML, fuel consumption root cause analysis
- **Shopee** — Data Analytics Intern (Jan 2022 – Apr 2022): SQL aggregation pipelines, real-time dashboards for regional operations
- **JobKred** — Data Science Intern (May 2021 – Jul 2021): BERT-based NER for skills detection in job ads, ML lifecycle on GCP with MLflow
- **NTU** — Undergraduate Researcher (Aug 2020 – May 2021): Deep reinforcement learning on Snake game using TensorFlow

## Education
- **Nanyang Technological University** (Aug 2019 – Jun 2023): BSc Mathematical Sciences, Minor in Finance, CGPA 4.88/5.00, Dean's List, ASEAN Undergraduate Scholarship, Specialisation in Statistics
- **National University of Singapore** (Aug 2021 – Dec 2021): Student Exchange (SUSEP), Statistics & Business Analytics, AI courses

## Projects
- **Crypto Backtesting Engine**: Interactive backtesting framework for crypto trading strategies with Binance data, SQLite caching, EMA/RSI/ATR indicators, Streamlit dashboard. Live: https://crypto-backtester.streamlit.app/ | Repo: https://github.com/danendral/crypto-backtester | Details: https://danendralohanata.github.io/projects/crypto-backtesting-engine
- **BantuAI**: AI-powered customer service dashboard for Indonesian electronics retailer. WhatsApp + Web channels, AI/human mode switching, n8n webhooks, Supabase backend. Live: https://bantuai-dashboard.vercel.app/ | Repo: https://github.com/danendral/bantuai-dashboard | Details: https://danendralohanata.github.io/projects/bantu-ai
- **Football Match Video Analysis**: Computer vision pipeline using YOLOv11, ByteTrack, K-Means for player detection, tracking, team assignment, speed/distance computation. Repo: https://github.com/danendral/cv-football-analysis | Details: https://danendralohanata.github.io/projects/football-match-video-analysis
- **Snake Game DRL**: Deep Reinforcement Learning agent using TensorFlow
- **Fake News Classifier**: Compared Naïve Bayes, CNN, LSTM for fake news detection
- **Sports Data Hackathon**: Football player position prediction — 1st place

## Achievements
- Top 32 — Microsoft Excel World Championship (MEWC) 2025, Las Vegas, USA
- 2nd Place — MEWC Indonesia 2025
- 3rd Place — MEWC Indonesia 2024
- Top 8 — Microsoft Excel Collegiate Challenge 2022, University of Arizona, USA
- ASEAN Undergraduate Scholarship
- Dean's List AY2020/2021
- DataExpert.io Data Engineering Bootcamp (Top 1.7% of 34,000+ applicants)
- Google Data Analytics Professional Certificate
- DataCamp Data Scientist Professional Certificate
- 1st Place — NTU Sports Data Hackathon 2021
- 1st Place — SQL Programming Competition 2018
- Bronze Medal — National Science Olympiad (Mathematics)

## Technical Skills
Languages: Python, SQL, R, MATLAB, JavaScript, LaTeX
Data & ML: Databricks, Apache Spark, Kafka, TensorFlow, scikit-learn, NLP, BERT, Deep Reinforcement Learning
Cloud: AWS, GCP, AliCloud, Supabase
Databases: PostgreSQL, MySQL, MongoDB
Visualization: Power BI, Looker, Tableau
Tools: Zendesk, OpenAI, n8n, Make, MLflow, Google Analytics
Other: Microsoft Excel (competitive), Adobe Photoshop, Figma`;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Simple in-memory rate limiting (resets on cold start, good enough for personal site)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20; // messages per window
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: CORS_HEADERS });
  }

  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(clientIp)) {
    return Response.json(
      { error: "Rate limit exceeded. Please try again later." },
      { status: 429, headers: CORS_HEADERS }
    );
  }

  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 30) {
      return Response.json(
        { error: "Invalid messages" },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-20).map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content.slice(0, 1000),
          })),
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenAI error:", err);
      return Response.json(
        { error: "AI service error" },
        { status: 502, headers: CORS_HEADERS }
      );
    }

    const data = await response.json();
    return Response.json(
      { message: data.choices[0].message.content },
      { headers: CORS_HEADERS }
    );
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
});
