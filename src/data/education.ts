export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export const education: Education[] = [
  {
    institution: 'Nanyang Technological University',
    degree: 'BSc Mathematical Sciences, Minor in Finance',
    period: 'Aug 2019 – Jun 2023',
    details: [
      'CGPA: 4.88/5.00',
      "Dean's List AY2020/2021",
      'ASEAN Undergraduate Scholarship',
      'Specialisation in Statistics',
    ],
  },
  {
    institution: 'National University of Singapore',
    degree: 'Student Exchange Programme (SUSEP)',
    period: 'Aug 2021 – Dec 2021',
    details: [
      'Focus: Statistics & Business Analytics, AI courses',
    ],
  },
];
