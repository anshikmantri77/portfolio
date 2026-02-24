export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Cloud & Security",
    skills: [
      "AWS (IAM, KMS, GuardDuty, Security Hub, VPC, CloudTrail, Config, Bedrock)",
      "Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    category: "AWS Services",
    skills: [
      "EC2",
      "RDS",
      "S3",
      "Lambda",
      "API Gateway",
      "SQS",
      "SNS",
      "DynamoDB",
      "CloudWatch",
      "CloudFront",
      "EventBridge",
      "DMS",
      "EKS",
      "ECR",
      "STS",
    ],
  },
  {
    category: "AI & GenAI",
    skills: [
      "AI Agents",
      "Strands Agents SDK",
      "Model Context Protocol (MCP)",
      "Amazon Bedrock",
      "Prompt Engineering",
      "Cursor AI",
    ],
  },
  {
    category: "Programming & Tools",
    skills: [
      "Python",
      "Bash",
      "Go",
      "SQL",
      "Node.js",
      "Django",
      "GitHub Actions",
      "SonarQube",
      "OWASP",
      "Trivy",
      "Grype",
      "Snyk",
      "Packer",
    ],
  },
  {
    category: "Compliance",
    skills: [
      "ISO 27001",
      "SOC 2",
      "SOX",
      "PCI-DSS",
      "HIPAA",
      "NIST 800-53",
      "NIST CSF",
      "CIS Benchmarks",
      "GDPR",
    ],
  },
];
