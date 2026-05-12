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
    id: "pharmeasy",
    company: "PharmEasy",
    location: "Bengaluru, India",
    role: "Backend Developer Intern",
    dates: "Sep 2025 – Present",
    skills: ["Node.js", "Redis", "JWT", "OAuth2", "Microservices", "REST APIs", "OWASP", "Rate Limiting"],
    bullets: [
      "B2B API Suite: Developed and enhanced B2B backend APIs (orders, reports, auth, catalog) with validation, filtering, pagination, and guard-based authentication across distributed microservices for scalable partner integrations.",
      "Rate Limiting & Locking: Implemented Redis-based rate limiting and concurrent request locking for Products API, eliminating duplicate requests and enforcing per-minute quotas; resolved production bugs via Redis key lifecycle restructuring.",
      "Security (IDOR Fix): Eliminated critical IDOR vulnerability by enforcing JWT-based ownership validation and HTTP 403 access control, aligning with OWASP best practices across order management APIs.",
    ],
  },
  {
    id: "rofolin",
    company: "Rofolin",
    location: "Remote",
    role: "AI/ML Engineer",
    dates: "Aug 2025 – Sep 2025",
    skills: ["Python", "FastAPI", "LangChain", "FAISS", "Sentence Transformers", "Multi-Agent Systems", "RAG"],
    bullets: [
      "Multi-Agent Platform: Built a Python-based AI automation system with specialized LLM agents (research, trend analysis, content generation) orchestrated via central controller, automating end-to-end marketing campaigns.",
      "RAG Pipeline: Engineered production-grade RAG pipeline using FAISS vector search and Sentence Transformers, backed by FastAPI service with real-time analytics dashboard for context-aware LLM content generation at scale.",
    ],
  },
  {
    id: "hexawealth",
    company: "HexaWealth",
    location: "Remote",
    role: "Data Analyst Intern",
    dates: "Aug 2024 – Jan 2025",
    skills: ["Python", "MySQL", "SQL", "Pandas", "Scikit-learn", "ETL Pipelines", "Random Forest", "XGBoost"],
    bullets: [
      "ETL & EDA: Built ETL pipelines ingesting multi-source financial data into MySQL; performed EDA on NIFTY/BSE 500 equities covering sector returns, volatility trends, and drawdown patterns across 500+ instruments.",
      "Risk Analytics & ML: Developed risk classification engine using SQL window functions and Python (Sharpe ratio, volatility, return quartiles); trained Random Forest, XGBoost, and Logistic Regression models achieving high classification accuracy.",
    ],
  },
];
