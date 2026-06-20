export interface Project {
  title: string;
  slug: string;
  description: string;
  details?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Unlimited Tango',
    slug: 'unlimited-tango',
    description:
      "A web-based logic puzzle game in the style of LinkedIn's Tango. Players fill a grid with suns and moons under adjacency and balance constraints, powered by a generator that guarantees every board is uniquely solvable.",
    details: `## Overview
Unlimited Tango is a browser-based logic puzzle trainer inspired by the Tango/Binairo genre. Players fill a grid with suns and moons so that no three identical symbols sit adjacent, every row and column is balanced, and all \`=\`/\`×\` edge clues are satisfied. It exists to provide an endless supply of fresh, fair puzzles rather than a fixed daily set, with optional sign-in to persist progress.

## Key Features
- **Uniqueness-verified generator**: Procedurally builds boards across 6×6, 8×8, and 10×10 sizes and validates each has exactly one solution before serving it.
- **Deduction-based solver**: A repeated hint/deduction engine confirms every puzzle is solvable through logic alone, with audited fallback boards for failure recovery.
- **Constraint clues**: Supports \`=\` (adjacent cells match) and \`×\` (adjacent cells differ) edge constraints in addition to the core adjacency and balance rules.
- **Fluid input**: Left click/tap cycles empty to sun to moon, with a right-click shortcut and disabled context menu on the grid.
- **Accounts & saved history**: Google sign-in via Supabase persists game history for returning players.
- **Offline-resilient**: The game stays fully playable even when the auth/database backend is not configured.

## Architecture
Built on Next.js (App Router) with a React client component driving the interactive grid, written in TypeScript and styled with Tailwind CSS. Supabase provides authentication (Google OAuth) and a Postgres store for saved history, while the seeded puzzle generator and deduction engine run as standalone TypeScript modules. The app is deployed on Vercel with Analytics and Speed Insights enabled.`,
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel'],
    liveUrl: 'https://unlimited-tango.com',
  },
  {
    title: 'FIFA World Cup 2026 Prediction Pipeline',
    slug: 'worldcup-2026-prediction',
    description: 'An end-to-end statistical pipeline that forecasts all 104 matches of the FIFA World Cup 2026 for a prediction competition, pairing a Dixon-Coles goals model with bookmaker odds and an EV-optimal scoreline picker tuned to the contest\'s scoring rule.',
    details: `## Overview
A single-notebook submission for a World Cup 2026 prediction competition that predicts every one of the 104 tournament matches (72 group + 32 knockout) before kickoff. The pipeline is deliberately classical (~1.3k LOC of Python) rather than deep-learning, on the premise that a well-specified statistical model beats an under-specified neural one on a sample of only a few thousand low-information internationals per year. Its defining edge is an EV-optimal scoreline picker built around the competition's asymmetric, overlapping scoring rule.

## Key Features
- **EV-optimal score picker** — Converts a goal distribution into the scoreline whose neighborhood (same goal-difference or same total) captures the most probability mass, rather than the modal scoreline — the single biggest edge under the contest's overlapping scoring buckets.
- **Dixon-Coles goals model** — Bivariate Poisson with a low-score correction for nil-nils and one-all draws, fit on internationals from 2014 onward with exponential time-weighting (~2.6-year half-life).
- **Time-weighted Elo** — FIFA-style Elo over the full 1872–2026 match history, with tournament-importance K-factors and a goal-difference multiplier, fed into the goals model as a feature.
- **Bookmaker odds blend** — De-vigs consensus h2h odds via Shin's method and blends 65% odds / 35% model on 1X2 outcomes, then uses iterative proportional fitting to rescale the 8×8 score grid to match the blended marginals.
- **Monte-Carlo bracket simulation** — Simulates group play with FIFA tiebreakers, resolves the four best third-place qualifiers, and propagates winners through the knockout tree to predict each Round-of-32 matchup — critical because each error compounds across higher-multiplier rounds.
- **Ancillary market models** — Lookup tables for corners, yellow cards, and red cards seeded from WC2018/WC2022 averages and adjusted by match context.

## Architecture
A modular Python pipeline (NumPy, pandas, SciPy) where each stage is its own module: data ingestion pulls ~50k historical results and live odds, Elo and Dixon-Coles models are fit to artifacts, the odds blend and EV picker produce per-match predictions, and a Monte-Carlo simulator resolves the knockout bracket. The final submission is assembled into two contest-schema DataFrames inside a Jupyter notebook, with an interactive GitHub Pages dashboard visualizing the predictions.

## Model Training
The goals model is a Dixon-Coles bivariate Poisson fit on international matches from 2014-01-01 onward (last three World Cup cycles), using exponential time-weighting (ξ = 0.005/week, half-life ≈ 2.6 years) to discount older results. Goal rates are parameterized as λ = exp(α_attack + β_defense + γ·home_adv + θ·Δelo), with a low-score correction τ inflating the {(0,0),(1,0),(0,1),(1,1)} cells. Elo ratings, trained separately on the full 1872–2026 history, supply the Δelo strength feature.`,
    tags: ['Python', 'NumPy', 'pandas', 'SciPy', 'Jupyter', 'Monte Carlo', 'Statistical Modeling'],
    liveUrl: 'https://danendral.github.io/worldcup-2026-prediction/',
    repoUrl: 'https://github.com/danendral/worldcup-2026-prediction',
  },
  {
    title: 'Crypto Backtesting Engine',
    slug: 'crypto-backtesting-engine',
    description: 'Interactive backtesting framework that simulates cryptocurrency trading strategies against historical Binance data, with cached SQLite storage, technical indicators (EMA, RSI, ATR), and a Streamlit dashboard for configuring strategies and visualizing results.',
    details: `## Overview

A full-stack backtesting framework for cryptocurrency trading strategies. The app pulls historical OHLCV data from Binance, caches it in a local SQLite database, and lets you define and simulate trading strategies using popular technical indicators.

## Key Features

- **Historical Data Pipeline** — Fetches candlestick data from the Binance API with automatic SQLite caching to avoid redundant API calls.
- **Technical Indicators** — Built-in support for EMA (Exponential Moving Average), RSI (Relative Strength Index), and ATR (Average True Range), with an extensible architecture for adding more.
- **Strategy Simulation** — Configure entry/exit rules based on indicator crossovers and thresholds, then simulate trades against historical data with realistic position sizing.
- **Interactive Dashboard** — Streamlit-based UI for selecting trading pairs, date ranges, and strategy parameters. Visualize equity curves, drawdowns, and individual trades with Plotly charts.
- **Performance Metrics** — Calculates total return, max drawdown, Sharpe ratio, win rate, and other key statistics to evaluate strategy effectiveness.`,
    tags: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'Plotly', 'Binance API', 'SQLite'],
    liveUrl: 'https://crypto-backtester.streamlit.app/',
    repoUrl: 'https://github.com/danendral/crypto-backtester',
  },
  {
    title: 'BantuAI',
    slug: 'bantu-ai',
    description: 'AI-powered customer service dashboard for an Indonesian electronics retailer, combining AI chat handling with human agent support across WhatsApp and Web channels.',
    details: `## Overview

Built for the n8n competition, BantuAI is a customer service management dashboard for GadgetNusa, an Indonesian electronics retailer. It combines AI-powered chat handling with human agent support across multiple channels (WhatsApp & Web).

## Key Features

- **Dashboard & Analytics** — Overview of conversations, tickets, resolution rates, and channel distribution charts for monitoring support performance at a glance.
- **Ticket Management** — Create and track support tickets with filtering by status, category, and priority.
- **Conversation Management** — Monitor customer conversations with real-time message polling and seamless AI/human mode switching.
- **Product Management** — Full CRUD for the product catalog with search, sort, and stock status controls.
- **Talk to DB** — Natural language query interface powered by n8n webhooks, allowing admins to ask questions about their data in plain language.

## Architecture

The frontend is built with React 19 and Tailwind CSS, backed by Supabase for authentication, database, and realtime subscriptions. n8n webhooks handle the AI chat pipeline, admin reply routing, and the natural language database query feature.`,
    tags: ['React', 'n8n', 'Supabase', 'Tailwind CSS', 'Vite', 'Recharts'],
    liveUrl: 'https://bantuai-dashboard.vercel.app/',
    repoUrl: 'https://github.com/danendral/bantuai-dashboard',
  },
  {
    title: 'Football Match Video Analysis',
    slug: 'football-match-video-analysis',
    description: 'Computer vision pipeline using YOLOv11, ByteTrack, and K-Means for player detection, tracking, team assignment, speed/distance computation, and ball possession analysis.',
    details: `## Overview

An end-to-end computer vision system that analyzes football match footage to detect and track players, referees, and the ball in real time. The pipeline classifies players into teams using jersey color clustering, estimates real-world player speed and distance covered, determines ball possession, and compensates for camera movement — all from a single broadcast video input.

## Key Features

- **Object Detection & Tracking** — Fine-tuned YOLO11m with ByteTrack for robust multi-object tracking of players, referees, and the ball across frames.
- **Team Classification** — Unsupervised K-Means clustering on jersey colors to automatically assign players to teams without manual labeling.
- **Ball Possession Analysis** — Real-time assignment of ball to the nearest player, with cumulative team ball control percentages.
- **Speed & Distance Estimation** — Perspective transformation from pixel coordinates to real-world pitch coordinates (meters), enabling accurate speed (km/h) and distance (m) calculations.
- **Camera Movement Compensation** — Lucas-Kanade optical flow to estimate camera pan/tilt and adjust all position measurements accordingly.
- **View Transformation** — Homography-based perspective transform mapping 2D image points to a 68m × 23.32m pitch coordinate system.

## Architecture

The pipeline flows from YOLO11m detection → ByteTrack tracking → camera movement estimation via optical flow → perspective transformation to real-world coordinates → ball interpolation for missing detections → speed/distance calculation, team assignment, and ball possession analysis → annotated output video with overlays.

## Model Training

The YOLO11m model was fine-tuned on 663 images from Roboflow annotated in YOLO format, covering four classes: Player, Goalkeeper, Referee, and Ball. Augmentations include horizontal flip and brightness adjustment.`,
    tags: ['Python', 'OpenCV', 'YOLOv11', 'scikit-learn', 'NumPy', 'pandas'],
    repoUrl: 'https://github.com/danendral/cv-football-analysis',
  },
  {
    title: 'Snake Game DRL',
    slug: 'snake-game-drl',
    description: 'Deep Reinforcement Learning agent for Snake game, including custom environment, reward mechanism, and DRL model in TensorFlow.',
    tags: ['Python', 'TensorFlow', 'DRL'],
  },
  {
    title: 'Fake News Classifier',
    slug: 'fake-news-classifier',
    description: 'Compared Naïve Bayes, CNN, and LSTM for detecting fake news from titles and text.',
    tags: ['Python', 'NLP', 'Deep Learning'],
  },
  {
    title: 'Sports Data Hackathon',
    slug: 'sports-data-hackathon',
    description: 'Football player position prediction using tracking data. 1st place.',
    tags: ['Python', 'TensorFlow', 'Data Analysis'],
  },
];
