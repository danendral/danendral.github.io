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
