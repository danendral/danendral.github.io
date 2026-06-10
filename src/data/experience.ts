export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Oyika',
    role: 'Data and AI Lead',
    period: 'Jan 2023 – Present',
    description: [
      'Own Oyika\'s entire data + AI stack: production databases, Databricks lakehouse, BI analytics, and LLM systems powering customer service and sales',
      'Built and deployed two in-house AI agents (customer support + lead handling) that auto-resolve ~45% of frontline conversations and cut average customer wait time, backed by continuous monitoring for quality and regressions',
      'Drive digitalisation and automation across departments, replacing manual processes to make the organisation leaner and more efficient',
      'Defined the foundational KPIs and data definitions used to track and steer battery-swapping network operations',
      'Built a spatial-clustering model (DBSCAN-style) on battery GPS telemetry (lat/long/timestamp) to verify customer residence for KYC — consolidates fragmented swap-location history into probable home cluster(s) with confidence scores',
      'Developed real-time dashboards for cabinet and battery monitoring, covering alarms, utilisation, and operational insights',
      'Automated recurring reporting delivered to management, internal teams, and external partners',
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
