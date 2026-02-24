export interface Article {
  id: string;
  title: string;
  publication: string;
  excerpt: string;
  date: string;
  url: string;
  /** Reading time in minutes */
  readTimeMin?: number;
  /** Topic for gradient/icon (e.g. "architecture" | "ai" | "devops" | "security" | "migration") */
  topic?: string;
  coverImageUrl?: string;
}

export const articles: Article[] = [
  { id: "1", title: "Monolith vs Microservices: What Actually Matters (Lessons From Netflix, Amazon, Atlassian)", publication: "AWS In Plain English", excerpt: "Lessons from industry giants on architecture decisions", date: "Feb 2026", url: "https://medium.com/aws-in-plain-english/monolith-vs-microservices-what-actually-matters-lessons-from-netflix-amazon-atlassian-7cdc19dff4e4", readTimeMin: 12, topic: "architecture" },
  { id: "2", title: "MCP vs Strands vs RAG vs A2A vs Bedrock vs AgentCore vs Q: AWS AI Agents Compared", publication: "AWS In Plain English", excerpt: "Comprehensive comparison of AWS AI agent frameworks", date: "Sep 2025", url: "https://medium.com/aws-in-plain-english/mcp-vs-strands-vs-rag-vs-a2a-vs-bedrock-vs-agentcore-vs-q-aws-ai-agents-compared-2025-788089e7ed33", readTimeMin: 15, topic: "ai" },
  { id: "3", title: "Building Proactive Monitoring on AWS with EC2, CloudWatch & Terraform", publication: "Towards AWS", excerpt: "From setup scripts to production monitoring", date: "Jun 2025", url: "https://medium.com/towards-aws/building-proactive-monitoring-on-aws-with-ec2-cloudwatch-terraform-from-setup-scripts-to-71bdc0e4a7dc", readTimeMin: 10, topic: "devops" },
  { id: "4", title: "How I Architected an AI-Powered, Serverless Content Moderation Pipeline on AWS", publication: "AWS In Plain English", excerpt: "Building scalable content moderation with AI", date: "Jun 2025", url: "https://medium.com/aws-in-plain-english/how-i-architected-an-ai-powered-serverless-content-moderation-pipeline-on-aws-950a00e2eb81", readTimeMin: 11, topic: "ai" },
  { id: "5", title: "From NextAuth to AWS Cognito: Building Bulletproof Authentication in NextJS", publication: "AWS In Plain English", excerpt: "Securing Next.js apps with Cognito", date: "Jul 2025", url: "https://medium.com/aws-in-plain-english/from-nextauth-to-aws-cognito-building-bulletproof-authentication-in-nextjs-4ff89f248686", readTimeMin: 9, topic: "security" },
  { id: "6", title: "Two Terraform Problems That Will Ruin Your Day (And the Safe Solutions)", publication: "AWS In Plain English", excerpt: "Solutions that actually work", date: "Jul 2025", url: "https://medium.com/aws-in-plain-english/two-terraform-problems-that-will-ruin-your-day-and-the-safe-solutions-that-actually-work-d0e7e3c8e0c3", readTimeMin: 8, topic: "devops" },
  { id: "7", title: "Building a Secure DevSecOps Pipeline on AWS for the Wanderlust Project", publication: "DevSecOps Community", excerpt: "DevSecOps best practices on AWS", date: "May 2025", url: "https://medium.com/devsecops-community/building-a-secure-devsecops-pipeline-on-aws-for-the-wanderlust-project-c08577deed4b", readTimeMin: 10, topic: "devops" },
  { id: "8", title: "From EC2 to AWS Managed Services: Migrating to AWS RDS with DMS", publication: "Towards AWS", excerpt: "Database migration strategies with DMS", date: "May 2025", url: "https://medium.com/@bhavi.28.mantri/from-ec2-to-aws-managed-services-migrating-to-aws-rds-with-dms-d16eb89605f3", readTimeMin: 9, topic: "migration" },
];
