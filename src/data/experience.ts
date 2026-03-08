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
      'Lead end-to-end data strategy across SEA; manage 3TB+ data spanning operations, CRM, and IoT',
      'Led analytics on sales funneling, retention, churn, LTV — enabling ~300% YoY growth',
      'Deployed Zendesk CRM + AI chatbot; managed 2,000+ tickets/month',
      'Built Databricks data lakehouse integrating AliCloud, AWS, and Google Drive',
      'Coordinated Power BI dashboards for real-time bike tracking and business KPIs',
      'R&D: Vehicle Routing Problem optimization, battery performance tracking',
    ],
  },
  {
    company: 'Belajarlagi',
    role: 'Excel Bootcamp Instructor',
    period: 'Jul 2025 – Aug 2025',
    description: [],
  },
  {
    company: 'Rolls-Royce Singapore',
    role: 'AI Intern',
    period: 'Jul 2022 – Dec 2022',
    description: [
      'Anomaly detection for multivariate time series (jet engine failure prevention)',
      'R&D in multimodal ML (text + images) for aerospace',
      'Root cause analysis on fuel consumption using ML',
      'Fire evacuation system (Excel, SQL, JavaScript)',
    ],
  },
  {
    company: 'Shopee',
    role: 'Regional Data Analytics Intern',
    period: 'Jan 2022 – Apr 2022',
    description: [
      'SQL aggregation + real-time dashboard for Shopee Express rider productivity across SEA',
      'Root cause analysis coordinating with local ops teams',
    ],
  },
  {
    company: 'JobKred',
    role: 'Data Science Intern',
    period: 'May 2021 – Jul 2021',
    description: [
      'BERT-based NER for skills detection in job ads (90% accuracy)',
      'Managed 30+ models on GCP + MLflow',
    ],
  },
  {
    company: 'NTU',
    role: 'Undergraduate Student Researcher',
    period: 'Aug 2020 – May 2021',
    description: [
      'Deep Reinforcement Learning on Snake Game (TensorFlow)',
    ],
  },
  {
    company: 'Mathematics Olympiad Trainer',
    role: 'Trainer',
    period: 'May 2020 – Dec 2020',
    description: [],
  },
];
