import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhavikamantri.vercel.app"),
  title: "Bhavika Mantri — Cloud Security Engineer & AI Builder",
  description:
    "Cloud Security Engineer building AI-powered security agents. 5x AWS Certified. Building autonomous IAM auditing, threat detection, and incident response platforms.",
  openGraph: {
    title: "Bhavika Mantri — Cloud Security Engineer & AI Builder",
    description:
      "Cloud Security Engineer building AI-powered security agents. 5x AWS Certified.",
    url: "https://bhavikamantri.vercel.app",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bhavika Mantri",
    jobTitle: "Cloud Security Engineer",
    url: "https://bhavikamantri.vercel.app",
    sameAs: [
      "https://github.com/bhavikam28",
      "https://linkedin.com/in/bhavikamantri",
      "https://medium.com/@bhavi.28.mantri",
    ],
    worksFor: {
      "@type": "Organization",
      name: "SG Cloud Consulting",
    },
    knowsAbout: [
      "Cloud Security",
      "AWS",
      "AI Agents",
      "Terraform",
      "DevSecOps",
    ],
  };

  return (
    <html lang="en" className="font-sans">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased font-sans text-slate-900">
        <Navbar />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
