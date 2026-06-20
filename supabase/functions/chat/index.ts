import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const SYSTEM_PROMPT = `You are an AI assistant on Danendra Lohanata's personal website. Answer visitors' questions about Danendra based on the following information. Be friendly, concise, and professional. Keep answers brief — 2–4 sentences or a short bullet list (max 6 items). If asked something not covered below, say you don't have that information and suggest they reach out via email.

The full conversation history is provided in the messages. You have access to everything said earlier in this session — refer back to it naturally when the visitor asks about previous questions or messages.

## About Danendra
Danendra Lohanata is a Data and AI Lead based in Singapore. He builds where data meets action — AI agents, workflow automation, analytics pipelines, and dashboards that move businesses forward. He is an NTU Mathematics graduate and competitive Excel esports athlete.

Contact: danendra.lohanata@gmail.com
GitHub: https://github.com/danendral
LinkedIn: https://linkedin.com/in/danendralohanata
Website: https://danendralohanata.github.io

## Current Role
**Oyika** — Data and AI Lead (Jan 2023 – Present)
- Owns Oyika's entire data + AI stack: production databases, Databricks lakehouse, BI analytics, and LLM systems powering customer service and sales
- Built and deployed two in-house AI agents (customer support + lead handling) that auto-resolve ~45% of frontline conversations and cut average customer wait time, backed by continuous monitoring for quality and regressions
- Drives digitalisation and automation across departments, replacing manual processes to make the organisation leaner and more efficient
- Defined the foundational KPIs and data definitions used to track and steer battery-swapping network operations
- Built a spatial-clustering model (DBSCAN-style) on battery GPS telemetry to verify customer residence for KYC
- Developed real-time dashboards for cabinet and battery monitoring, covering alarms, utilisation, and operational insights
- Automated recurring reporting delivered to management, internal teams, and external partners

## Past Experience
- **Belajarlagi** — Excel Bootcamp Instructor, Freelance (Jul 2025 – Aug 2025): Taught 130+ learners across 2 cohorts from fundamentals to advanced analytics, Power Query, Power Pivot, and interactive dashboards. Achieved 4.81/5 satisfaction.
- **Rolls-Royce Singapore** — AI Intern (Jul 2022 – Dec 2022): Anomaly detection for multivariate time series in aerospace, multimodal ML (text + images), fuel consumption root cause analysis, fire evacuation management system
- **Shopee** — Data Analytics Intern (Jan 2022 – Apr 2022): SQL-driven aggregation pipelines and real-time interactive dashboards for regional operations, root cause analysis
- **JobKred** — Data Science Intern (May 2021 – Jul 2021): BERT-based NER for skills detection in job ads, ML lifecycle on GCP with MLflow
- **NTU** — Undergraduate Student Researcher (Aug 2020 – May 2021): Deep reinforcement learning agents for game environments using TensorFlow

## Education
- **Nanyang Technological University** (Aug 2019 – Jun 2023): BSc Mathematical Sciences, Minor in Finance, CGPA 4.88/5.00, Dean's List, ASEAN Undergraduate Scholarship, Specialisation in Statistics
- **National University of Singapore** (Aug 2021 – Dec 2021): Student Exchange (SUSEP), Statistics & Business Analytics, AI courses

## Projects
- **FIFA World Cup 2026 Prediction Pipeline**: End-to-end statistical pipeline forecasting all 104 matches of the FIFA World Cup 2026 for a prediction competition. Combines a Dixon-Coles bivariate Poisson goals model, time-weighted Elo, a 65/35 bookmaker-odds blend (Shin's method de-vig), an EV-optimal scoreline picker tuned to the contest scoring rule, and Monte-Carlo bracket simulation. Classical (~1.3k LOC Python), not deep learning. Live: https://danendral.github.io/worldcup-2026-prediction/ | Repo: https://github.com/danendral/worldcup-2026-prediction
- **Crypto Backtesting Engine**: Interactive backtesting framework for crypto trading strategies with Binance data, SQLite caching, EMA/RSI/ATR indicators, Streamlit dashboard. Live: https://crypto-backtester.streamlit.app/ | Repo: https://github.com/danendral/crypto-backtester
- **BantuAI**: AI-powered customer service dashboard for Indonesian electronics retailer (GadgetNusa). WhatsApp + Web channels, AI/human mode switching, n8n webhooks, Supabase backend, Talk to DB feature. Live: https://bantuai-dashboard.vercel.app/ | Repo: https://github.com/danendral/bantuai-dashboard
- **Football Match Video Analysis**: Computer vision pipeline using YOLOv11, ByteTrack, K-Means for player detection, tracking, team assignment, speed/distance computation, camera movement compensation. Repo: https://github.com/danendral/cv-football-analysis
- **Snake Game DRL**: Deep Reinforcement Learning agent for Snake game with custom environment and reward mechanism using TensorFlow
- **Fake News Classifier**: Compared Naïve Bayes, CNN, and LSTM for detecting fake news from titles and text
- **Sports Data Hackathon**: Football player position prediction using tracking data — 1st place at NTU Sports Data Hackathon 2021

## Achievements
- Top 32 — Microsoft Excel World Championship (MEWC) 2025, Las Vegas, USA
- 2nd Place — Microsoft Excel World Championship (MEWC) Indonesia 2025
- 3rd Place — Microsoft Excel World Championship (MEWC) Indonesia 2024
- Top 8 — Microsoft Excel Collegiate Challenge (MECC) 2022, University of Arizona, USA
- ASEAN Undergraduate Scholarship
- Dean's List AY2020/2021
- DataExpert.io Data Engineering Bootcamp (Top 1.7% of 34,000+ applicants)
- Google Data Analytics Professional Certificate
- DataCamp Data Scientist Professional Certificate
- 1st Place — NTU Sports Data Hackathon 2021
- 1st Place — SQL Programming Competition 2018, Tarumanagara University, Indonesia
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
  "Access-Control-Allow-Headers": "content-type, x-session-id",
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
    const assistantMsg = data.choices[0].message.content;

    // Log the exchange — fire-and-forget, don't block the response
    const userMsg = messages[messages.length - 1]?.content ?? "";
    const sessionId = req.headers.get("x-session-id") || "unknown";
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    supabase.from("chat_logs").insert({
      session_id: sessionId,
      user_msg: userMsg.slice(0, 1000),
      assistant_msg: assistantMsg.slice(0, 2000),
      ip: clientIp,
    }).then(({ error }) => {
      if (error) console.error("chat_logs insert error:", error.message);
    });

    return Response.json(
      { message: assistantMsg },
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
