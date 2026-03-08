export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'BantuAI',
    description: 'AI-powered customer service platform. WhatsApp-based RAG chatbot for an Indonesian electronics retailer.',
    tags: ['n8n', 'Supabase', 'OpenAI', 'WAHA', 'WhatsApp API'],
  },
  {
    title: 'Oyika Data Lakehouse',
    description: 'Built company-wide Databricks lakehouse integrating AliCloud, AWS, and Google Drive for centralized analytics across SEA operations.',
    tags: ['Databricks', 'SQL', 'AWS', 'AliCloud'],
  },
  {
    title: 'AI Customer Support Bot',
    description: 'Deployed AI chatbot integrated with Zendesk CRM, handling 2,000+ tickets/month across WhatsApp, Instagram, email.',
    tags: ['Zendesk', 'OpenAI', 'Python'],
  },
  {
    title: 'Snake Game DRL',
    description: 'Deep Reinforcement Learning agent for Snake game — agent scored 40 points within 50 episodes.',
    tags: ['Python', 'TensorFlow', 'DRL'],
  },
  {
    title: 'Fake News Classifier',
    description: 'Compared Naïve Bayes, CNN, and LSTM for detecting fake news from titles and text.',
    tags: ['Python', 'NLP', 'Deep Learning'],
  },
  {
    title: 'Sports Data Hackathon',
    description: 'Football player position prediction using tracking data. 1st place.',
    tags: ['Python', 'TensorFlow', 'Data Analysis'],
  },
  {
    title: 'Excel Esports',
    description: 'Competed in Microsoft Excel World Championship. 1st place MEWC Indonesia 2024, Top 8 Collegiate Challenge 2022.',
    tags: ['Excel', 'Problem Solving'],
  },
  {
    title: 'VRP Optimization',
    description: "Vehicle Routing Problem optimization for Oyika's battery-swapping logistics.",
    tags: ['Python', 'OR'],
  },
];
