export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "C++", "Golang"],
  },
  {
    category: "Backend",
    skills: [
      "FastAPI",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "JWT",
      "OAuth2",
      "API Gateway",
      "Rate Limiting",
      "System Design",
    ],
  },
  {
    category: "AI & ML",
    skills: [
      "LangChain",
      "FAISS",
      "RAG Pipelines",
      "Sentence Transformers",
      "Multi-Agent Systems",
      "Transformers",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Hugging Face",
      "Ollama",
      "ChromaDB",
      "Prompt Engineering",
    ],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Aerospike", "ChromaDB", "MariaDB", "NoSQL"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (CCP Certified)", "Azure", "Docker", "Kubernetes", "CI/CD", "Jenkins", "DataDog", "Linux"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Streamlit", "HTML", "CSS", "RESTful Integration"],
  },
  {
    category: "Data & Tools",
    skills: ["Pandas", "NumPy", "Power BI", "ETL Pipelines", "Apache Spark", "Hadoop", "Git", "Postman", "Jira"],
  },
];
