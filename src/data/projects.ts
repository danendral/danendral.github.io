export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'BantuAI',
    description: 'End-to-end AI customer service platform with RAG-based agents, vector search, ticket classification, and a natural language "Talk to DB" admin dashboard.',
    tags: ['n8n', 'Supabase', 'OpenAI', 'WAHA', 'WhatsApp API'],
  },
  {
    title: 'Football Match Video Analysis',
    description: 'Computer vision pipeline using YOLOv11, ByteTrack, and K-Means for player detection, tracking, team assignment, speed/distance computation, and ball possession analysis.',
    tags: ['Python', 'OpenCV', 'YOLOv11', 'scikit-learn'],
  },
  {
    title: 'AI Customer Service & Sales AI',
    description: 'AI-powered customer service with automated troubleshooting and escalation, plus omnichannel sales AI across WhatsApp, Instagram, Facebook, and TikTok.',
    tags: ['OpenAI', 'Pinecone', 'MongoDB', 'n8n', 'AWS'],
  },
  {
    title: 'Snake Game DRL',
    description: 'Deep Reinforcement Learning agent for Snake game, including custom environment, reward mechanism, and DRL model in TensorFlow.',
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
];
