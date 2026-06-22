import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Datics.ai | Enterprise Technology Services",
    template: "%s | Datics.ai",
  },
  description:
    "Datics.ai delivers enterprise-grade cloud infrastructure, cybersecurity, networking, and managed IT services to help businesses scale securely and efficiently.",
  keywords: [
    "IT services",
    "cloud computing",
    "cybersecurity",
    "managed IT",
    "network infrastructure",
    "digital transformation",
    "enterprise technology",
  ],
  authors: [{ name: "Datics.ai" }],
  creator: "Datics.ai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://datics.ai",
    siteName: "Datics.ai",
    title: "Datics.ai | Enterprise Technology Services",
    description:
      "Enterprise-grade cloud, cybersecurity, and managed IT services for modern businesses.",
    images: [
      {
        url: "/images/og-nexacore.jpg",
        width: 1200,
        height: 630,
        alt: "Datics.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datics.ai",
    description: "Enterprise-grade IT services for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-[#1a1a1a] antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
