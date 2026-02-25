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
    highlights: [
      "Graduate Certificate in Cybersecurity Management",
      "Graduate Teaching Assistant (Cybersecurity)",
    ],
  },
  {
    id: "nitj",
    institution: "National Institute of Technology, Jalandhar",
    degree: "B.Tech",
    field: "Civil Engineering",
    dates: "2014–2018",
  },
];
