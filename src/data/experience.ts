export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Oyika',
    role: 'Data, Analytics, and AI',
    period: 'Jan 2023 – Present',
    description: [
      'Lead end-to-end data strategy and analytics across Southeast Asia operations',
      'Architect and deploy AI-powered customer service system with automated troubleshooting and human-in-the-loop escalation',
      'Build omnichannel sales AI handling lead engagement and escalation across WhatsApp, Instagram, Facebook, and TikTok',
      'Design and implement company-wide Databricks data lakehouse integrating multiple cloud platforms',
      'Deliver Power BI dashboards for real-time tracking and R&D initiatives including vehicle routing optimization',
    ],
  },
  {
    company: 'Belajarlagi',
    role: 'Excel Bootcamp Instructor',
    period: 'Jul 2025 – Aug 2025',
    description: [
      'Deliver Excel training from fundamentals to advanced analytics, Power Query, Power Pivot, and interactive dashboards',
      'Design business case-driven projects to develop practical analytical thinking',
    ],
  },
  {
    company: 'Rolls-Royce Singapore',
    role: 'AI Intern',
    period: 'Jul 2022 – Dec 2022',
    description: [
      'Develop anomaly detection models for multivariate time series in aerospace',
      'Support R&D in multimodal ML combining text and image data for next-gen solutions',
      'Conduct root cause analysis on fuel consumption efficiency using ML',
      'Build fire evacuation management system using Excel, SQL, and JavaScript',
    ],
  },
  {
    company: 'Shopee',
    role: 'Data Analytics Intern',
    period: 'Jan 2022 – Apr 2022',
    description: [
      'Build SQL-driven aggregation pipelines and real-time interactive dashboards for regional operations',
      'Conduct root cause analysis and coordinate with local teams to implement data-driven solutions',
    ],
  },
  {
    company: 'JobKred',
    role: 'Data Science Intern',
    period: 'May 2021 – Jul 2021',
    description: [
      'Develop BERT-based NER models for skills detection in job advertisements using NLP',
      'Manage ML model lifecycle on GCP with MLflow for experiment tracking and evaluation',
    ],
  },
  {
    company: 'NTU',
    role: 'Undergraduate Student Researcher',
    period: 'Aug 2020 – May 2021',
    description: [
      'Implement deep reinforcement learning agents for game environments using TensorFlow',
    ],
  },
];
