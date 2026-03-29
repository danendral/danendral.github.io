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
    description: 'End-to-end AI customer service platform with RAG-based agents, vector search, ticket classification, and a natural language "Talk to DB" admin dashboard.',
    tags: ['n8n', 'Supabase', 'OpenAI', 'WAHA', 'WhatsApp API'],
  },
  {
    title: 'Football Match Video Analysis',
    slug: 'football-match-video-analysis',
    description: 'Computer vision pipeline using YOLOv11, ByteTrack, and K-Means for player detection, tracking, team assignment, speed/distance computation, and ball possession analysis.',
    tags: ['Python', 'OpenCV', 'YOLOv11', 'scikit-learn'],
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
