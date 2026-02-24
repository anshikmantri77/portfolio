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
    id: "washu",
    institution: "Washington University in St. Louis",
    degree: "M.Eng.",
    field: "Engineering Management (STEM)",
    dates: "2019–2021",
    gpa: "3.72/4.00",
    highlights: [
      "Graduate Certificate in Cybersecurity Management",
      "Graduate Teaching Assistant (Cybersecurity)",
    ],
  },
  {
    id: "nitj",
    institution: "National Institute of Technology, Jalandhar",
    degree: "B.Tech",
    field: "Engineering",
    dates: "2014–2018",
    gpa: "7.7/10.0",
  },
];
