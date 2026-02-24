export interface Certification {
  id: string;
  name: string;
  issuer: string;
  credlyUrl: string;
  abbreviation?: string;
  /** Credly badge image URL (Share badge → Copy image address on Credly) */
  badgeImageUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-sap",
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    credlyUrl: "https://www.credly.com/badges/43af6d23-8840-46e2-b4cf-4d9bcc1c185d/public_url",
    abbreviation: "SAP",
    badgeImageUrl: "/images/certifications/aws-sap.png",
  },
  {
    id: "aws-security",
    name: "AWS Certified Security – Specialty",
    issuer: "Amazon Web Services",
    credlyUrl: "https://www.credly.com/badges/e38d9503-52e0-42fc-8533-e6dcdc001e53/public_url",
    abbreviation: "SEC",
    badgeImageUrl: "/images/certifications/aws-security.png",
  },
  {
    id: "aws-saa",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    credlyUrl: "https://www.credly.com/badges/d7be1f91-f565-4b02-9604-985242f8453b/public_url",
    abbreviation: "SAA",
    badgeImageUrl: "/images/certifications/aws-saa.png",
  },
  {
    id: "aws-ai",
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    credlyUrl: "https://www.credly.com/badges/3400fd44-16cf-4942-9925-d949e9f8009d/public_url",
    abbreviation: "AIP",
    badgeImageUrl: "/images/certifications/aws-ai.png",
  },
  {
    id: "terraform",
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    credlyUrl: "https://www.credly.com/badges/fcb7357e-5408-4e78-a825-31c4b35160ef/public_url",
    abbreviation: "TFA",
    badgeImageUrl: "/images/certifications/terraform.png",
  },
  {
    id: "cisa",
    name: "Certified Information Systems Auditor (CISA)",
    issuer: "ISACA",
    credlyUrl: "https://www.credly.com/badges/1d58d761-568d-4c2f-9d48-d1eb724a34a1/public_url",
    abbreviation: "CISA",
    badgeImageUrl: "/images/certifications/cisa.png",
  },
];
