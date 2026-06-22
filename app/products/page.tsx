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
    gradient: "bg-black",
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
    gradient: "bg-black",
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
    gradient: "bg-black",
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
    gradient: "bg-black",
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
    gradient: "bg-black",
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
    gradient: "bg-black",
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
      <section className="bg-black border-b border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <motion.nav variants={fadeInUp} className="flex items-center gap-2 text-sm mb-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-600">/</span>
              <span className="text-white font-medium">Products</span>
            </motion.nav>

            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm font-medium">
                <Package className="w-4 h-4" />
                Our Product Suite
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Enterprise IT Products{" "}
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Built to Scale
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl"
            >
              From cloud infrastructure to cybersecurity, our product suite gives your business
              the tools to operate at enterprise scale — securely, reliably, and efficiently.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-200"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-200"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. STATS BAR ────────────────────────────────────────────── */}
      <section className="bg-black border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "6", label: "Core Products", suffix: "" },
              { value: "500", label: "Enterprise Clients", suffix: "+" },
              { value: "99.99", label: "Uptime SLA", suffix: "%" },
              { value: "24", label: "Support Coverage", suffix: "/7" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                  <span className="text-gray-400">{stat.suffix}</span>
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. PRODUCTS GRID ────────────────────────────────────────── */}
      <section id="products" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Product Suite
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Purpose-built enterprise products that integrate seamlessly to power your entire IT ecosystem.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-black transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:underline transition-all duration-200"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 4. PRICING SECTION ──────────────────────────────────────── */}
      <section id="pricing" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Choose the plan that fits your business. Scale up or down at any time with no hidden fees.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.id}
                variants={scaleIn}
                className={`relative rounded-2xl p-8 border flex flex-col ${
                  tier.highlighted
                    ? "bg-black text-white border-black shadow-2xl"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Highlighted Badge */}
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold shadow">
                      <Star className="w-3 h-3" /> Most Popular
                    </span>
                  </div>
                )}

                {/* Tier Name */}
                <h3 className={`text-xl font-bold mb-2 ${
                  tier.highlighted ? "text-white" : "text-gray-900"
                }`}>
                  {tier.name}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-6 ${
                  tier.highlighted ? "text-gray-400" : "text-gray-600"
                }`}>
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${
                    tier.highlighted ? "text-white" : "text-gray-900"
                  }`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`text-sm ml-1 ${
                      tier.highlighted ? "text-gray-400" : "text-gray-500"
                    }`}>
                      {tier.period}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                        tier.highlighted ? "text-white" : "text-black"
                      }`} />
                      <span className={tier.highlighted ? "text-gray-300" : "text-gray-700"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="#contact"
                  className={`w-full text-center py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    tier.highlighted
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. CTA SECTION ──────────────────────────────────────────── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm font-medium">
                <Zap className="w-4 h-4" />
                Ready to get started?
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              Transform Your IT Infrastructure Today
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 mb-10"
            >
              Join 500+ enterprises already using {APP_FULL_NAME} products to power their digital operations.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-200"
              >
                Get a Free Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-200"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
