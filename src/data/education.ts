export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  dates: string;
  gpa?: string;
  highlights?: string[];
}

export const education: EducationItem[] = [
  {
    id: "vit",
    institution: "Vellore Institute of Technology, Chennai",
    degree: "B.Tech",
    field: "Computer Science Engineering",
    dates: "2021 – 2025",
    gpa: "8.1/10",
    highlights: [
      "Coursework: DSA, DBMS, Computer Networks, OS, OOP, Data Visualization, Distributed Systems, Statistics & Probability",
    ],
  },
];
