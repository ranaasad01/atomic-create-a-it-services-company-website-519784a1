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
    default: "NexaCore IT Solutions | Enterprise Technology Services",
    template: "%s | NexaCore IT Solutions",
  },
  description:
    "NexaCore IT Solutions delivers enterprise-grade cloud infrastructure, cybersecurity, networking, and managed IT services to help businesses scale securely and efficiently.",
  keywords: [
    "IT services",
    "cloud computing",
    "cybersecurity",
    "managed IT",
    "network infrastructure",
    "digital transformation",
    "enterprise technology",
  ],
  authors: [{ name: "NexaCore IT Solutions" }],
  creator: "NexaCore IT Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexacore.io",
    siteName: "NexaCore IT Solutions",
    title: "NexaCore IT Solutions | Enterprise Technology Services",
    description:
      "Enterprise-grade cloud, cybersecurity, and managed IT services for modern businesses.",
    images: [
      {
        url: "/images/og-nexacore.jpg",
        width: 1200,
        height: 630,
        alt: "NexaCore IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaCore IT Solutions",
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
