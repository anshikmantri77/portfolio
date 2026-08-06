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
    id: "gigstaan",
    company: "Gigstaan",
    location: "Bengaluru, India",
    role: "Software Development Engineer I (SDE-1)",
    dates: "Jun 2026 – Present",
    skills: ["Next.js", "React", "React Native", "TypeScript", "PostgreSQL", "Kysely", "AWS Bedrock", "pgvector", "Cashfree"],
    bullets: [
      "Full-Stack Delivery & Data Layer: Shipped 20+ end-to-end features across a Next.js/React web app and React Native client, exposing multi-tenant, role-scoped REST APIs from a single versioned contract; wrote type-safe Kysely queries and validated PostgreSQL migrations against production-like snapshots for zero-downtime releases.",
      "Recommendation & Ranking Pipeline: Built an LLM-powered matchmaking service (AWS Bedrock, pgvector, PostgreSQL) turning natural-language requests into ranked, explained recommendations — HNSW approximate-nearest-neighbour retrieval over embeddings, then a deterministic weighted scoring model with Bayesian shrinkage on sparse ratings; ran embedding generation as an incremental batch pipeline with offline evaluation telemetry.",
      "Payments & Escrow: Built milestone-based bidding and payout workflows on Cashfree — order creation, idempotent webhook reconciliation, refund and failure recovery — over a normalized PostgreSQL escrow ledger that kept freelancer–client transactions auditable.",
    ],
  },
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
