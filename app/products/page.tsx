"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Package, Cloud, Shield, Server, Database, Cpu, Wifi, Monitor, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from "@/lib/motion";
import { APP_FULL_NAME } from "@/lib/data";

const products = [
  {
    id: "daticscloud",
    icon: Cloud,
    name: "DaticsCloud Platform",
    description: "Unified cloud management platform for multi-cloud environments",
    gradient: "from-blue-500 to-cyan-400",
    features: [
      "AWS, Azure & GCP integration",
      "Real-time cost monitoring",
      "Auto-scaling policies",
      "One-click deployments",
    ],
  },
  {
    id: "daticsshield",
    icon: Shield,
    name: "DaticsShield",
    description: "Enterprise cybersecurity suite with AI-powered threat detection",
    gradient: "from-violet-500 to-purple-400",
    features: [
      "Zero-trust network access",
      "AI threat intelligence",
      "Compliance automation",
      "Incident response",
    ],
  },
  {
    id: "daticsserver",
    icon: Server,
    name: "DaticsServer Pro",
    description: "High-performance dedicated server solutions with 99.99% uptime",
    gradient: "from-emerald-500 to-teal-400",
    features: [
      "Bare-metal performance",
      "NVMe SSD storage",
      "DDoS protection",
      "24/7 monitoring",
    ],
  },
  {
    id: "daticsdata",
    icon: Database,
    name: "DaticsData",
    description: "Scalable data warehouse and analytics platform for enterprises",
    gradient: "from-orange-500 to-amber-400",
    features: [
      "Petabyte-scale storage",
      "Real-time analytics",
      "ML-ready pipelines",
      "GDPR compliant",
    ],
  },
  {
    id: "daticsedge",
    icon: Cpu,
    name: "DaticsEdge",
    description: "Edge computing infrastructure for low-latency applications",
    gradient: "from-pink-500 to-rose-400",
    features: [
      "Sub-5ms latency",
      "IoT device management",
      "Distributed processing",
      "Global PoP network",
    ],
  },
  {
    id: "daticsconnect",
    icon: Wifi,
    name: "DaticsConnect",
    description: "SD-WAN and enterprise networking solutions for hybrid workforces",
    gradient: "from-indigo-500 to-blue-400",
    features: [
      "SD-WAN deployment",
      "Secure remote access",
      "Network analytics",
      "QoS management",
    ],
  },
];

const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    price: "$299",
    period: "/mo",
    description: "Perfect for small businesses getting started with enterprise IT.",
    features: [
      "Up to 5 users",
      "Basic cloud monitoring",
      "Email support",
      "99.9% uptime SLA",
      "Monthly reports",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "professional",
    name: "Professional",
    price: "$799",
    period: "/mo",
    description: "Ideal for growing teams that need advanced features and priority support.",
    features: [
      "Up to 50 users",
      "Full cloud management suite",
      "Priority 24/7 support",
      "99.99% uptime SLA",
      "Advanced analytics & reporting",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex requirements.",
    features: [
      "Unlimited users",
      "Dedicated infrastructure",
      "Dedicated account manager",
      "Custom SLA agreements",
      "On-site engineering support",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export default function ProductsPage() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="bg-[#FAFAF7] border-b border-[#E8DFC0] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF6E3] border border-[#E8DFC0] text-[#B8860B] text-sm font-medium mb-6">
              <Package className="w-4 h-4" />
              Our Products
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Enterprise IT Products
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#F5C518]"> Built for Scale</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-[#4A4A4A] mb-8 leading-relaxed">
              Explore the full suite of {APP_FULL_NAME} products — from cloud platforms to cybersecurity tools — engineered to power modern enterprises.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#products"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#F5C518] text-white font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-yellow-600/30 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Explore Products
              </Link>
              <Link
                href="#pricing"
                className="px-8 py-3.5 rounded-xl border border-[#E8DFC0] text-[#1A1A1A] font-semibold hover:border-[#B8860B] hover:text-[#B8860B] hover:bg-[#FDF6E3] transition-all duration-200"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. PRODUCTS GRID ────────────────────────────────────────── */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
              Our Product Suite
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#4A4A4A] max-w-2xl mx-auto">
              Each product is purpose-built to solve real enterprise challenges — deployable independently or as an integrated platform.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={scaleIn}
                className="group bg-white rounded-2xl border border-[#E8DFC0] p-8 hover:border-[#B8860B]/40 hover:shadow-xl hover:shadow-yellow-600/10 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{product.name}</h3>
                <p className="text-[#4A4A4A] text-sm mb-6 leading-relaxed">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <CheckCircle className="w-4 h-4 text-[#B8860B] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B] hover:text-[#8B6508] transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. PRICING SECTION ──────────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF6E3] border border-[#E8DFC0] text-[#B8860B] text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Simple Pricing
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
              Choose Your Plan
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#4A4A4A] max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Scale up or down as your business grows.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.id}
                variants={scaleIn}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-[#B8860B] to-[#8B6508] text-white shadow-2xl shadow-yellow-600/30 scale-105"
                    : "bg-white border border-[#E8DFC0] text-[#1A1A1A]"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#F5C518] text-[#1A1A1A] text-xs font-bold shadow-lg">
                      <Star className="w-3 h-3" /> Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-1 ${tier.highlighted ? "text-white" : "text-[#1A1A1A]"}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm ${tier.highlighted ? "text-yellow-100" : "text-[#4A4A4A]"}`}>
                    {tier.description}
                  </p>
                </div>
                <div className="mb-8">
                  <span className={`text-5xl font-extrabold ${tier.highlighted ? "text-white" : "text-[#1A1A1A]"}`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`text-sm ml-1 ${tier.highlighted ? "text-yellow-100" : "text-[#4A4A4A]"}`}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${tier.highlighted ? "text-yellow-200" : "text-[#B8860B]"}`} />
                      <span className={tier.highlighted ? "text-yellow-50" : "text-[#4A4A4A]"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`w-full py-3 rounded-xl font-semibold text-center transition-all duration-200 hover:scale-105 active:scale-95 ${
                    tier.highlighted
                      ? "bg-white text-[#B8860B] hover:bg-yellow-50 shadow-lg"
                      : "bg-gradient-to-r from-[#B8860B] to-[#F5C518] text-white hover:opacity-90 hover:shadow-lg hover:shadow-yellow-600/30"
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-[#B8860B] to-[#8B6508]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to transform your IT infrastructure?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-yellow-100 mb-8 text-lg">
              Talk to our experts and get a tailored solution for your business.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-3.5 rounded-xl bg-white text-[#B8860B] font-semibold hover:bg-yellow-50 hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/#services"
                className="px-8 py-3.5 rounded-xl border-2 border-white/50 text-white font-semibold hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
