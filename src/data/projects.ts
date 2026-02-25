export interface Project {
  id: string;
  name: string;
  description: string;
  /** Screenshot image path (e.g. /images/projects/aegis-iam-screenshot.png) */
  screenshotUrl?: string;
  /** Big metric headline (e.g. "8 compliance frameworks • One-click remediation") */
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
    id: "aegis-iam",
    name: "Aegis IAM",
    description: "Enterprise-grade security platform leveraging Claude Sonnet 4.5 via Amazon Bedrock to generate, validate, and audit AWS IAM policies with a conversational AI interface.",
    metricHeadline: "8 compliance frameworks • Natural language → production IAM",
    overview: "Aegis IAM uses a multi-agent system (Strands + 3 AWS MCP servers) to turn natural language into least-privilege, compliant policies and run autonomous account audits with one-click remediation. It plugs into CI/CD via a GitHub App so IAM changes are validated before merge.",
    label: "AWS She Builds Capstone | AWS AI Agent Global Hackathon (Nov 2025)",
    featured: true,
    liveUrl: "https://aegis-iam.vercel.app",
    screenshotUrl: "/images/projects/aegis-iam-screenshot.png",
    githubUrl: "https://github.com/bhavikam28/aegis-iam",
    techStack: ["React 18", "TypeScript", "FastAPI", "Amazon Bedrock", "Strands Agents SDK", "MCP", "CloudTrail", "Server-Sent Events"],
    features: [
      "Natural language → production IAM policies with validation",
      "20+ risk categories; 8 compliance frameworks (PCI DSS, HIPAA, SOX, GDPR, CIS, HITRUST, NIST 800-53, ISO 27001)",
      "Autonomous account audit agent with one-click auto-remediation",
      "CI/CD security via GitHub App (analyzes IAM in PRs)",
      "Multi-agent system: Strands Agents SDK + 3 AWS MCP servers",
    ],
    outcomes: [
      "Production-ready IAM from conversational input",
      "Compliance coverage across major frameworks",
      "PR-level IAM review in existing workflows",
    ],
  },
  {
    id: "nova-sentinel",
    name: "Nova Sentinel",
    description: "Autonomous incident response platform that resolves security incidents in under 1 minute using 5 Amazon Nova AI models in coordinated multi-agent orchestration.",
    metricHeadline: "99.5% faster incident resolution • 5 Nova models in one pipeline",
    overview: "Nova Sentinel orchestrates five Amazon Nova models for end-to-end incident response: 90-day CloudTrail analysis, architecture diagram review, real-time risk scoring, and voice-driven investigation. A crypto-mining attack demo traces a 17-resource compromise in under a minute.",
    label: "Amazon Nova AI Hackathon (Mar 2026)",
    featured: true,
    screenshotUrl: "/images/projects/nova-sentinel-screenshot.png",
    githubUrl: "https://github.com/bhavikam28/nova-sentinel",
    techStack: ["Amazon Nova AI (5 models)", "Python", "CloudTrail", "Multi-agent orchestration"],
    features: [
      "Temporal reasoning (Nova 2 Lite): 90 days CloudTrail analysis, attack pattern identification, 95%+ confidence",
      "Multimodal visual agent (Nova Pro): Architecture diagram analysis (PNG/JPG) for security gaps",
      "Real-time risk scoring (Nova Micro): <1 second classification",
      "Voice interface (Nova 2 Sonic): Hands-free incident investigation",
      "Crypto mining attack demo: Full attack chain across 17 compromised resources",
    ],
    outcomes: [
      "99.5% reduction in time to resolve incidents",
      "Multi-model orchestration (temporal, visual, real-time, voice)",
      "Demonstrable attack-chain analysis",
    ],
  },
  {
    id: "aws-security-lab",
    name: "AWS Security Lab",
    description: "Comprehensive DevSecOps & Infrastructure Security portfolio — production-grade AWS with enterprise Terraform, EKS, and secure CI/CD.",
    metricHeadline: "Zero stored credentials in CI • 3 scanners + SBOM",
    overview: "Multi-tier VPC, EKS with RBAC, and three GitHub Actions pipelines using OIDC (no long-lived secrets). Trivy, Grype, and Snyk plus Syft SBOMs; CloudTrail, Config, and VPC Flow Logs for audit-ready infra.",
    screenshotUrl: "/images/projects/awssecuritylab-screenshot.png",
    githubUrl: "https://github.com/bhavikam28/aws-security-lab",
    techStack: ["Terraform", "EKS", "Go", "Docker", "GitHub Actions", "Trivy", "Grype", "Snyk", "Syft"],
    features: [
      "Multi-tier VPC, EKS with RBAC, encrypted S3",
      "3 automated GitHub Actions CI/CD pipelines with OIDC auth (zero stored credentials)",
      "Triple-threat container scanning: Trivy, Grype, Snyk + SBOM via Syft",
      "CloudTrail, AWS Config, VPC Flow Logs, IAM least-privilege",
      "Go app with multi-stage Docker builds, JWT auth, K8s deployments",
    ],
    outcomes: [
      "Zero stored credentials in CI (OIDC-only)",
      "Multiple scanners + SBOM for supply-chain visibility",
      "Audit-ready infra and app deployment",
    ],
  },
  {
    id: "content-moderation-pipeline",
    name: "AI-Powered Content Moderation Pipeline",
    description: "Serverless content moderation on AWS using AI to automate review, with Bedrock Guardrails for safety and scalability.",
    overview: "Designing a serverless pipeline that ingests content from S3 and runs it through Bedrock Guardrails for policy enforcement. Covers architecture, error handling, and high availability.",
    metricHeadline: "99.5% uptime • Serverless content moderation at scale",
    label: "From Medium: AWS In Plain English",
    articleUrl: "https://medium.com/aws-in-plain-english/how-i-architected-an-ai-powered-serverless-content-moderation-pipeline-on-aws-950a00e2eb81",
    githubUrl: "https://github.com/bhavikam28",
    techStack: ["AWS Lambda", "Amazon Bedrock", "S3", "API Gateway", "Guardrails"],
    features: [
      "Serverless architecture with Lambda and Bedrock",
      "Content moderation with AI Guardrails",
      "Scalable and cost-effective pipeline",
    ],
    outcomes: ["99.5% uptime design", "Policy-driven moderation", "Fully serverless"],
  },
  {
    id: "cognito-nextjs",
    name: "NextJS + AWS Cognito Authentication",
    description: "Bulletproof authentication in Next.js — migrating from NextAuth to AWS Cognito for production-grade security.",
    metricHeadline: "Cognito-first auth • Production-ready sessions",
    overview: "Replacing NextAuth with AWS Cognito in Next.js: User Pools, JWT handling, and session management. Production-ready patterns and security considerations.",
    label: "From Medium: AWS In Plain English",
    articleUrl: "https://medium.com/aws-in-plain-english/from-nextauth-to-aws-cognito-building-bulletproof-authentication-in-nextjs-4ff89f248686",
    githubUrl: "https://github.com/bhavikam28",
    techStack: ["Next.js", "AWS Cognito", "JWT", "Amplify"],
    features: [
      "Cognito User Pools and identity federation",
      "Secure session handling",
      "Production-ready auth flow",
    ],
    outcomes: ["Cognito-first auth in Next.js", "Secure sessions", "Federation-ready"],
  },
  {
    id: "devsecops-wanderlust",
    name: "Secure DevSecOps Pipeline (Wanderlust)",
    description: "End-to-end DevSecOps on AWS with security baked into CI/CD for the Wanderlust project.",
    metricHeadline: "Security gates in CI/CD • IaC-driven deployment",
    overview: "Building a secure pipeline on AWS with GitHub Actions, Terraform, and CodePipeline. Security gates, IaC, and container plus dependency scanning for fast, compliant releases.",
    label: "From Medium: DevSecOps Community",
    articleUrl: "https://medium.com/devsecops-community/building-a-secure-devsecops-pipeline-on-aws-for-the-wanderlust-project-c08577deed4b",
    githubUrl: "https://github.com/bhavikam28",
    techStack: ["GitHub Actions", "Terraform", "Docker", "AWS CodePipeline", "Security scanning"],
    features: [
      "CI/CD with security gates",
      "Infrastructure as Code",
      "Container and dependency scanning",
    ],
    outcomes: ["Security gates in CI/CD", "IaC-driven deployment", "Wanderlust case study"],
  },
  {
    id: "proactive-monitoring",
    name: "Proactive Monitoring with EC2, CloudWatch & Terraform",
    description: "Production monitoring on AWS — from setup scripts to Terraform-managed CloudWatch alarms and dashboards.",
    metricHeadline: "Terraform-managed alarms • Custom metrics & dashboards",
    overview: "From manual EC2 setup to IaC: Terraform-managed CloudWatch alarms, custom metrics, and dashboards. Cost-effective, repeatable observability.",
    label: "From Medium: Towards AWS",
    articleUrl: "https://medium.com/towards-aws/building-proactive-monitoring-on-aws-with-ec2-cloudwatch-terraform-from-setup-scripts-to-71bdc0e4a7dc",
    githubUrl: "https://github.com/bhavikam28",
    techStack: ["EC2", "CloudWatch", "Terraform", "Alarms", "Dashboards"],
    features: [
      "Terraform-managed monitoring",
      "Custom metrics and alarms",
      "Cost-effective observability",
    ],
    outcomes: ["Scripts → Terraform", "Custom metrics & alarms", "Reusable dashboards"],
  },
  {
    id: "rds-dms-migration",
    name: "EC2 to RDS Migration with DMS",
    description: "Database migration to AWS managed services using Database Migration Service (DMS) for minimal downtime.",
    metricHeadline: "Minimal-downtime migration • DMS + CDC",
    overview: "Migrating from EC2-hosted databases to RDS with DMS. Homogeneous and heterogeneous options, CDC for minimal downtime, and RDS best practices.",
    label: "From Medium: Towards AWS",
    articleUrl: "https://medium.com/@bhavi.28.mantri/from-ec2-to-aws-managed-services-migrating-to-aws-rds-with-dms-d16eb89605f3",
    githubUrl: "https://github.com/bhavikam28",
    techStack: ["AWS DMS", "RDS", "EC2", "Migration"],
    features: [
      "Homogeneous/heterogeneous migration",
      "CDC for minimal downtime",
      "RDS best practices",
    ],
    outcomes: ["Minimal-downtime migration", "DMS + CDC", "RDS operational model"],
  },
];
