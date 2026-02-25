export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  dates: string;
  skills: string[];
  bullets: string[];
  isTransition?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    id: "sg-cloud",
    company: "SG Cloud Consulting",
    location: "Remote",
    role: "AWS Engineer Trainee",
    dates: "Mar 2025 – Present",
    skills: ["AWS", "Terraform", "Go", "Amazon Bedrock", "Jenkins", "Docker", "SonarQube", "OWASP", "Trivy"],
    bullets: [
      "Architected enterprise security control framework across 6+ AWS services, building 50+ Terraform templates with 95% reduction in config errors",
      "Deployed AI-powered content moderation pipeline using Bedrock Guardrails with 99.5% uptime, reducing manual review by 70%",
      "Engineered secure DevSecOps CI/CD pipeline with Jenkins, SonarQube, OWASP, Trivy — detecting 10+ vulnerability types, reducing deployment time by 40%",
      "Built auto-scaling architecture handling 250+ concurrent users with zero-downtime deployments",
    ],
  },
  {
    id: "career-pause",
    company: "",
    location: "",
    role: "Career Pause (H-4)",
    dates: "Feb 2024 – Feb 2025",
    skills: [],
    bullets: [
      "Left Discover due to H-4 visa status change. Used the period to upskill: 5 AWS certifications, 3 hackathon projects, 8+ articles, and AWS She Builds mentorship.",
    ],
    isTransition: true,
  },
  {
    id: "discover",
    company: "Discover Financial Services",
    location: "Chicago, IL",
    role: "IT Auditor",
    dates: "Aug 2022 – Feb 2024",
    skills: ["IT Audit", "Risk Assessment", "AuditBoard", "SOX", "HIPAA", "Security Controls"],
    bullets: [
      "Conducted IT audits across Business Continuity Planning, Information Security Governance, Data Center Operations, Voice Services Management, and IT Asset & Configuration Management — 98% compliance rate",
      "Evaluated 40+ controls spanning security policies, cybersecurity review councils, BISO roles, and Fedline Security Reviews",
      "Assessed Data Center physical security controls and tested risk management controls for KRI metrics and Board-level risk reporting",
      "Documented findings and recommendations; tracked remediation to closure for audit cycle completion",
      "Mentored 3+ new team members on audit methodology and tools; supported enterprise-wide AuditBoard rollout",
    ],
  },
  {
    id: "forvis",
    company: "FORVIS LLP (formerly BKD/DHG)",
    location: "Chicago, IL",
    role: "Technology Advisory Consultant",
    dates: "Mar 2021 – Aug 2022",
    skills: ["SOX Compliance", "IT Controls", "Risk/Control Matrices", "ServiceNow", "JIRA"],
    bullets: [
      "Led IT control walkthroughs for change management, logical access, IT operations, and SDLC — 90% client satisfaction on delivery",
      "Designed and maintained risk/control matrices supporting $5M+ in SOX compliance engagements",
      "Evaluated vendor management and third-party risk controls, disaster recovery plans, and data backup procedures",
      "Prepared workpapers and management summaries for external auditors and client leadership",
    ],
  },
  {
    id: "education-transition",
    company: "",
    location: "",
    role: "Graduate Studies",
    dates: "May 2019 – 2021",
    skills: [],
    bullets: [
      "Left Cognizant to pursue Master's at Washington University in St. Louis (graduated 2021).",
    ],
    isTransition: true,
  },
  {
    id: "cognizant",
    company: "Cognizant Technology Solutions",
    location: "Chennai, India",
    role: "Project Associate",
    dates: "Aug 2018 – May 2019",
    skills: ["Business Analysis", "Security Controls", "User Access Management"],
    bullets: [
      "Delivered 8+ technology and process improvements that reduced processing time by 15%",
      "Designed and documented features that contributed to a 25% reduction in fraudulent claims",
      "Supported user access management and security control testing for client deliverables",
    ],
  },
];
