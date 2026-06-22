"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Package, Cloud, Shield, Server, Database, Cpu, Wifi, Monitor, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from "@/lib/motion";
import { APP_FULL_NAME } from "@/lib/data";

const products = [
  {
    id: "nexacloud",
    icon: Cloud,
    name: "NexaCloud Platform",
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
    id: "nexashield",
    icon: Shield,
    name: "NexaShield",
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
    id: "nexaserver",
    icon: Server,
    name: "NexaServer Pro",
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
    id: "nexadata",
    icon: Database,
    name: "NexaData",
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
    id: "nexaedge",
    icon: Cpu,
    name: "NexaEdge",
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
    id: "nexaconnect",
    icon: Wifi,
    name: "NexaConnect",
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
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8860B]/40 bg-[#FDF6E3] text-[#B8860B] text-sm font-semibold">
                <Package className="w-4 h-4" />
                Our Products
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-tight mb-6"
            >
              Enterprise IT{" "}
              <span className="text-[#B8860B]">Products</span>{" "}
              Built for Scale
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#4A4A4A] leading-relaxed mb-10"
            >
              {APP_FULL_NAME} offers a comprehensive suite of enterprise-grade IT products
              — from cloud management and cybersecurity to edge computing and networking —
              engineered to power your business at any scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="#products-grid"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#F5C518] text-white font-semibold text-base shadow-lg shadow-yellow-600/30 hover:opacity-90 hover:shadow-yellow-600/50 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Explore All Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#B8860B] text-[#B8860B] font-semibold text-base hover:bg-[#FDF6E3] transition-all duration-200"
              >
                Request a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. PRODUCTS GRID SECTION ────────────────────────────────── */}
      <section id="products-grid" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 rounded-full bg-[#FDF6E3] border border-[#B8860B]/30 text-[#B8860B] text-sm font-semibold mb-4"
            >
              Product Suite
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]"
            >
              Everything Your Business Needs
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[#4A4A4A] text-lg max-w-2xl mx-auto"
            >
              Six powerful products, one unified ecosystem — built to integrate seamlessly
              and scale with your enterprise.
            </motion.p>
          </motion.div>

          {/* Products Grid */}
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
                  variants={scaleIn}
                  className="group bg-white border border-[#E8DFC0] rounded-2xl p-8 flex flex-col gap-5 hover:shadow-lg hover:shadow-[#B8860B]/10 hover:border-[#B8860B]/30 transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Name & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2 flex-1">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                        <CheckCircle className="w-4 h-4 text-[#B8860B] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <div className="pt-2">
                    <Link
                      href={`#${product.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8860B] hover:gap-2.5 transition-all duration-200"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 3. FEATURED PRODUCT SPOTLIGHT ───────────────────────────── */}
      <section className="bg-[#FAFAF7] border-y border-[#E8DFC0] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF6E3] border border-[#B8860B]/30 text-[#B8860B] text-sm font-semibold mb-6"
              >
                <Star className="w-4 h-4" />
                Featured Product
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4"
              >
                NexaCloud Platform
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-[#4A4A4A] text-lg leading-relaxed mb-8"
              >
                Our flagship cloud management platform gives your team a single pane of glass
                to manage, monitor, and optimize workloads across AWS, Azure, and GCP —
                reducing cloud spend by up to 40% while improving reliability.
              </motion.p>

              <motion.ul variants={staggerContainer} className="flex flex-col gap-4 mb-10">
                {[
                  "Unified multi-cloud dashboard with real-time visibility",
                  "Intelligent cost optimization and anomaly detection",
                  "Policy-driven auto-scaling across all cloud providers",
                  "One-click deployments with rollback and audit trails",
                ].map((highlight) => (
                  <motion.li
                    key={highlight}
                    variants={fadeInUp}
                    className="flex items-start gap-3 text-[#4A4A4A]"
                  >
                    <CheckCircle className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeInUp}>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#F5C518] text-white font-semibold text-base shadow-lg shadow-yellow-600/30 hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <Zap className="w-5 h-5" />
                  Get Started with NexaCloud
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Mock Dashboard */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={scaleIn}
            >
              <div className="bg-gradient-to-br from-[#B8860B]/10 to-[#F5C518]/10 border border-[#E8DFC0] rounded-2xl p-6 shadow-xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-semibold text-[#B8860B] bg-[#FDF6E3] px-3 py-1 rounded-full border border-[#B8860B]/20">
                    NexaCloud Dashboard
                  </span>
                  <Monitor className="w-4 h-4 text-[#B8860B]/60" />
                </div>

                {/* Stat Cards Row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Cost Saved", value: "$12.4K", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
                    { label: "Uptime", value: "99.99%", color: "bg-blue-50 border-blue-200 text-blue-700" },
                    { label: "Instances", value: "248", color: "bg-violet-50 border-violet-200 text-violet-700" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className={`rounded-xl border p-3 ${stat.color}`}
                    >
                      <div className="text-xs font-medium opacity-70 mb-1">{stat.label}</div>
                      <div className="text-lg font-extrabold">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Bar Chart Mock */}
                <div className="bg-white/70 rounded-xl border border-[#E8DFC0] p-4 mb-4">
                  <div className="text-xs font-semibold text-[#4A4A4A] mb-3">Cloud Spend Overview</div>
                  <div className="flex items-end gap-2 h-20">
                    {[55, 70, 45, 80, 60, 90, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-[#B8860B] to-[#F5C518] opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                      <span key={d} className="text-[10px] text-[#A0A0A0] flex-1 text-center">{d}</span>
                    ))}
                  </div>
                </div>

                {/* Provider Badges */}
                <div className="flex gap-2">
                  {[
                    { label: "AWS", color: "bg-orange-100 text-orange-700 border-orange-200" },
                    { label: "Azure", color: "bg-blue-100 text-blue-700 border-blue-200" },
                    { label: "GCP", color: "bg-green-100 text-green-700 border-green-200" },
                  ].map((p) => (
                    <span
                      key={p.label}
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${p.color}`}
                    >
                      {p.label}
                    </span>
                  ))}
                  <span className="ml-auto text-xs text-[#B8860B] font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    All systems operational
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. PRICING TIERS SECTION ────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 rounded-full bg-[#FDF6E3] border border-[#B8860B]/30 text-[#B8860B] text-sm font-semibold mb-4"
            >
              Pricing
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[#4A4A4A] text-lg max-w-xl mx-auto"
            >
              No hidden fees. No surprises. Choose the plan that fits your business.
            </motion.p>
          </motion.div>

          {/* Pricing Cards */}
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
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  tier.highlighted
                    ? "border-[#B8860B] shadow-xl shadow-[#B8860B]/15 bg-[#FAFAF7]"
                    : "border-[#E8DFC0] bg-white hover:shadow-lg hover:shadow-[#B8860B]/10 hover:border-[#B8860B]/30"
                }`}
              >
                {/* Most Popular Badge */}
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#B8860B] to-[#F5C518] text-white text-xs font-bold shadow-lg shadow-yellow-600/30">
                      <Star className="w-3.5 h-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier Name */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{tier.name}</h3>
                  <p className="text-sm text-[#4A4A4A]">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-[#1A1A1A]">{tier.price}</span>
                  {tier.period && (
                    <span className="text-[#6B6B6B] text-base font-medium ml-1">{tier.period}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-[#4A4A4A]">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 ${
                          tier.highlighted ? "text-[#B8860B]" : "text-emerald-500"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="#contact"
                  className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-[#B8860B] to-[#F5C518] text-white shadow-lg shadow-yellow-600/30 hover:opacity-90 hover:scale-105 active:scale-95"
                      : "border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#FDF6E3]"
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. CTA BANNER ───────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#B8860B] to-[#F5C518] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
            >
              Ready to Transform Your IT Infrastructure?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/85 text-lg mb-10 max-w-xl mx-auto"
            >
              Join 500+ enterprises already running on NexaCore products. Start your
              free trial today — no credit card required.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#B8860B] font-bold text-base hover:bg-[#FDF6E3] hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
              >
                <Zap className="w-5 h-5" />
                Get Started Today
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white text-white font-bold text-base hover:bg-white/10 transition-all duration-200"
              >
                Schedule a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
