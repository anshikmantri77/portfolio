export interface Project {
  id: string;
  name: string;
  description: string;
  /** Screenshot image path */
  screenshotUrl?: string;
  /** Big metric headline */
  metricHeadline?: string;
  /** Short overview, 2 sentences max. */
  overview?: string;
  label?: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl: string;
  articleUrl?: string;
  caseStudyUrl?: string;
  caseStudyContent?: string;
  techStack: string[];
  features: string[];
  outcomes?: string[];
  metrics?: string[];
}

export const projects: Project[] = [
  {
    id: "local-vault",
    name: "Local-Vault",
    description: "Privacy-First AI Chatbot with a full RAG pipeline — runs entirely on-device using Ollama, ChromaDB and FastAPI with zero data leaving your machine.",
    metricHeadline: "100% local inference • Multi-format document ingestion",
    overview: "Built a full-stack AI chatbot with RAG pipeline supporting document ingestion (PDF, Word, CSV, images) using OCR, semantic chunking, metadata tagging, and ChromaDB vector search for context-aware LLM responses. Developed Streamlit UI with FastAPI backend; integrated Ollama for private on-device LLM inference with conversation memory.",
    label: "Privacy-First AI Chatbot",
    featured: true,
    githubUrl: "https://github.com/anshikmantri77/LocalVault",
    techStack: ["Python", "FastAPI", "Streamlit", "ChromaDB", "Ollama", "LangChain", "RAG", "OCR", "Vector Search"],
    features: [
      "Full RAG pipeline with multi-format document ingestion (PDF, Word, CSV, images) via OCR",
      "Semantic chunking and metadata tagging for precision context retrieval",
      "ChromaDB vector search for context-aware LLM responses",
      "Streamlit UI with FastAPI backend — responsive chat interface",
      "Ollama integration for fully private on-device LLM inference",
      "Conversation memory and personalized responses from user-uploaded data",
    ],
    outcomes: [
      "100% private on-device inference — zero external API calls",
      "Multi-format document support with OCR",
      "Production-grade RAG with semantic chunking",
    ],
  },
  {
    id: "stocksense-ai",
    name: "StockSense AI",
    description: "Real-Time Stock Analysis Platform powered by LangChain, Gemini LLM, and ML pipelines — covering NIFTY/BSE 500 with AI-driven portfolio building and live dashboards.",
    metricHeadline: "500+ stocks • AI portfolio builder • Live dashboards",
    overview: "Integrated LangChain and Gemini LLM as a finance-domain AI assistant with TextBlob sentiment analysis and a custom stock screener. Built an AI-driven portfolio builder with SIP/lump-sum projections and Plotly/Altair dashboards tracking volatility, drawdown, sector allocation, and benchmark deviation in real time.",
    label: "Real-Time Stock Analysis Platform",
    featured: true,
    githubUrl: "https://github.com/anshikmantri77/STOCKSENSE.AI",
    techStack: ["Python", "MySQL", "NLP", "Scikit-learn", "LangChain", "Gemini LLM", "Plotly", "React", "Altair", "XGBoost"],
    features: [
      "LangChain + Gemini LLM finance-domain AI assistant with contextual Q&A",
      "TextBlob sentiment analysis for news-driven stock insights",
      "Custom stock screener with P/E ratio, ROE, and Debt/Equity filters",
      "Random Forest & XGBoost ML pipelines on NIFTY/BSE 500 data",
      "AI-driven portfolio builder with SIP and lump-sum projection models",
      "Plotly/Altair dashboards tracking volatility, drawdown, sector allocation, and benchmark deviation",
    ],
    outcomes: [
      "Full NIFTY/BSE 500 coverage with live analytics",
      "Gemini-powered finance assistant with ML signal overlay",
      "Interactive dashboards for portfolio risk management",
    ],
  },
];
