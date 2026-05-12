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
  metadataBase: new URL("https://anshikmantri.vercel.app"),
  title: "Anshik Mantri — Backend Engineer | AI/ML Engineer",
  description:
    "Backend & AI/ML Engineer. Building scalable APIs, RAG pipelines, and intelligent systems. AWS CCP Certified. VIT Chennai '25.",
  openGraph: {
    title: "Anshik Mantri — Backend Engineer | AI/ML Engineer",
    description:
      "Backend & AI/ML Engineer. Building scalable APIs, RAG pipelines, and intelligent systems. AWS CCP Certified. VIT Chennai '25.",
    url: "https://anshikmantri.vercel.app",
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
    name: "Anshik Mantri",
    jobTitle: "Backend Engineer",
    url: "https://anshikmantri.vercel.app",
    email: "anshikmantri@gmail.com",
    telephone: "+917023805961",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/anshikmantri77",
      "https://linkedin.com/in/anshikmantri",
    ],
    worksFor: {
      "@type": "Organization",
      name: "PharmEasy",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Vellore Institute of Technology, Chennai",
    },
    knowsAbout: [
      "Backend Engineering",
      "FastAPI",
      "Node.js",
      "AI/ML",
      "RAG Pipelines",
      "LangChain",
      "Python",
      "Microservices",
      "AWS",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased font-sans text-slate-900" suppressHydrationWarning>
        <Navbar />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
