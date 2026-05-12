export interface Certification {
  id: string;
  name: string;
  issuer: string;
  credlyUrl: string;
  abbreviation?: string;
  /** Badge image URL */
  badgeImageUrl?: string;
  /** Categories for filtering */
  categories?: string[];
  /** Custom link label (default: "View Certificate") */
  linkLabel?: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-ccp",
    name: "AWS Certified Cloud Practitioner",
    categories: ["cloud"],
    issuer: "Amazon Web Services",
    credlyUrl: "https://www.credly.com",
    abbreviation: "CCP",
    linkLabel: "View Certificate",
  },
  {
    id: "ds-ml-udemy",
    name: "Data Science, ML, Deep Learning & NLP Bootcamp",
    categories: ["ai", "ml"],
    issuer: "Udemy",
    credlyUrl: "https://www.udemy.com",
    linkLabel: "View Certificate",
  },
  {
    id: "data-engineering-ibm",
    name: "Data Engineering, Apache Spark & Hadoop",
    categories: ["data"],
    issuer: "IBM / Coursera",
    credlyUrl: "https://www.coursera.org",
    linkLabel: "View Certificate",
  },
  {
    id: "python-ds-ibm",
    name: "Python for Data Science",
    categories: ["data", "ai"],
    issuer: "IBM / Coursera",
    credlyUrl: "https://www.coursera.org",
    linkLabel: "View Certificate",
  },
];
