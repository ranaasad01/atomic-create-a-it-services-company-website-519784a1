"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cloud, Shield, Network, BarChart3, GitBranch, Headphones, CheckCircle, ArrowRight, Star, ChevronDown, Mail, Phone, MapPin, Sparkles, Zap, Globe, Lock, Server, Users, Award, TrendingUp } from 'lucide-react';
import {
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
  slideInFromBottom,
} from "@/lib/motion";
import {
  APP_NAME,
  APP_FULL_NAME,
  APP_TAGLINE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_ADDRESS,
  stats,
} from "@/lib/data";

// ─── Inline Data ────────────────────────────────────────────────────────────

const services = [
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Architect, migrate, and manage enterprise-grade cloud environments on AWS, Azure, and GCP with zero-downtime deployments.",
    features: ["Multi-cloud strategy", "Auto-scaling clusters", "Cost optimization", "Disaster recovery"],
    color: "bg-black",
    glow: "shadow-gray-200",
  },
  {
    id: "security",
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with end-to-end security frameworks, real-time threat detection, and compliance management.",
    features: ["Zero-trust architecture", "SOC 2 compliance", "Penetration testing", "24/7 threat monitoring"],
    color: "bg-black",
    glow: "shadow-gray-200",
  },
  {
    id: "network",
    icon: Network,
    title: "Network Solutions",
    description:
      "Design and deploy high-performance, resilient network infrastructure that scales with your business demands.",
    features: ["SD-WAN deployment", "Network segmentation", "Load balancing", "VPN & MPLS"],
    color: "bg-black",
    glow: "shadow-gray-200",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable intelligence with our advanced analytics platforms and real-time dashboards.",
    features: ["BI dashboards", "Predictive analytics", "Data warehousing", "ETL pipelines"],
    color: "bg-black",
    glow: "shadow-gray-200",
  },
  {
    id: "devops",
    icon: GitBranch,
    title: "DevOps & Automation",
    description:
      "Accelerate software delivery with CI/CD pipelines, infrastructure-as-code, and intelligent automation workflows.",
    features: ["CI/CD pipelines", "Kubernetes orchestration", "IaC with Terraform", "GitOps workflows"],
    color: "bg-black",
    glow: "shadow-gray-200",
  },
  {
    id: "support",
    icon: Headphones,
    title: "Managed IT Support",
    description:
      "Round-the-clock expert support with guaranteed SLAs, proactive monitoring, and dedicated account management.",
    features: ["24/7 help desk", "Proactive monitoring", "On-site engineers", "SLA guarantees"],
    color: "bg-black",
    glow: "shadow-gray-200",
  },
];

const caseStudies = [
  {
    id: "fintech",
    category: "FinTech",
    title: "Scaled a trading platform to handle 2M+ transactions per day",
    description:
      "Redesigned the entire cloud architecture for a leading fintech firm, reducing latency by 68% and cutting infrastructure costs by $1.2M annually.",
    metrics: [
      { label: "Latency Reduction", value: "68%" },
      { label: "Cost Savings", value: "$1.2M" },
      { label: "Uptime", value: "99.99%" },
    ],
    image: "https://www.keycdn.com/img/support/network-latency.png",
    tag: "Cloud + DevOps",
  },
  {
    id: "healthcare",
    category: "Healthcare",
    title: "HIPAA-compliant data platform for a 50-hospital network",
    description:
      "Built a secure, federated data infrastructure enabling real-time patient analytics across 50 hospitals while achieving full HIPAA and SOC 2 compliance.",
    metrics: [
      { label: "Hospitals Connected", value: "50" },
      { label: "Data Points/Day", value: "10M+" },
      { label: "Compliance", value: "100%" },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    tag: "Security + Data",
  },
  {
    id: "retail",
    category: "Retail",
    title: "Zero-downtime migration for a global e-commerce platform",
    description:
      "Migrated a 200-node legacy infrastructure to a modern Kubernetes-based platform with zero downtime during peak holiday season.",
    metrics: [
      { label: "Nodes Migrated", value: "200" },
      { label: "Downtime", value: "0 min" },
      { label: "Performance Gain", value: "3.5×" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tag: "Cloud + Network",
  },
];

const teamMembers = [
  {
    id: "ceo",
    name: "Marcus Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of Engineering at AWS with 20+ years in enterprise infrastructure.",
    avatar: "MC",
  },
  {
    id: "cto",
    name: "Sarah Mitchell",
    role: "CTO",
    bio: "Ex-Google SRE lead, architect of systems serving 500M+ daily users.",
    avatar: "SM",
  },
  {
    id: "cso",
    name: "David Park",
    role: "Chief Security Officer",
    bio: "15 years in cybersecurity, former NSA consultant and CISSP certified.",
    avatar: "DP",
  },
  {
    id: "vp",
    name: "Priya Sharma",
    role: "VP of Client Success",
    bio: "Managed enterprise accounts for Fortune 500 companies across 3 continents.",
    avatar: "PS",
  },
];

const testimonials = [
  {
    id: "t1",
    name: "James Whitfield",
    role: "CTO, Meridian Financial",
    content:
      "NexaCore transformed our entire cloud infrastructure in under 90 days. The performance gains were immediate and the cost savings exceeded our projections by 40%.",
    rating: 5,
    avatar: "JW",
  },
  {
    id: "t2",
    name: "Elena Rodriguez",
    role: "VP Engineering, HealthBridge",
    content:
      "Their cybersecurity team is world-class. We went from failing audits to achieving SOC 2 Type II certification in just 6 months. Absolutely outstanding.",
    rating: 5,
    avatar: "ER",
  },
  {
    id: "t3",
    name: "Tom Nakamura",
    role: "Director of IT, GlobalRetail Co.",
    content:
      "The managed support team feels like an extension of our own IT department. 24/7 coverage, proactive alerts, and they've prevented 3 major outages this year alone.",
    rating: 5,
    avatar: "TN",
  },
];

const techStack = [
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Terraform", category: "IaC" },
  { name: "Docker", category: "DevOps" },
  { name: "Datadog", category: "Monitoring" },
  { name: "Splunk", category: "Security" },
  { name: "CrowdStrike", category: "Security" },
  { name: "Cisco", category: "Network" },
  { name: "Palo Alto", category: "Security" },
  { name: "Snowflake", category: "Data" },
];

const faqs = [
  {
    id: "f1",
    question: "What industries do you specialize in?",
    answer:
      "We serve clients across financial services, healthcare, retail, manufacturing, and government sectors. Our team has deep domain expertise in regulated industries with strict compliance requirements.",
  },
  {
    id: "f2",
    question: "How quickly can you onboard a new client?",
    answer:
      "Our standard onboarding takes 2–4 weeks depending on scope. For urgent needs, we offer an expedited 72-hour emergency onboarding for critical infrastructure support.",
  },
  {
    id: "f3",
    question: "Do you offer flexible pricing models?",
    answer:
      "Yes. We offer monthly retainers, project-based pricing, and hybrid models. All engagements start with a free audit so we can scope the work accurately before any commitment.",
  },
  {
    id: "f4",
    question: "What does your SLA guarantee cover?",
    answer:
      "Our SLAs cover uptime, response times, and resolution times. We guarantee 99.9% uptime for managed services, with 15-minute response times for P1 incidents and financial penalties if we miss targets.",
  },
  {
    id: "f5",
    question: "Can you work with our existing IT team?",
    answer:
      "Absolutely. We operate as a seamless extension of your internal team. We integrate with your existing tools, workflows, and communication channels to minimize disruption.",
  },
];

const whyChooseUs = [
  {
    id: "w1",
    icon: Award,
    title: "Certified Experts",
    description: "Our engineers hold 200+ certifications across AWS, Azure, GCP, Cisco, and more.",
  },
  {
    id: "w2",
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "We move fast without breaking things. Most projects go live 30% ahead of schedule.",
  },
  {
    id: "w3",
    icon: Lock,
    title: "Security-First Approach",
    description: "Every solution is architected with security baked in from day one, not bolted on.",
  },
  {
    id: "w4",
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Our clients see an average 3.2× ROI within the first year of engagement.",
  },
  {
    id: "w5",
    icon: Globe,
    title: "Global Coverage",
    description: "With engineers across 12 time zones, we provide truly round-the-clock support.",
  },
  {
    id: "w6",
    icon: Users,
    title: "Dedicated Teams",
    description: "You get a named account manager and dedicated pod — not a ticket queue.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <main className="overflow-x-hidden">

      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Trusted by 500+ Enterprise Clients
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
          style={{ color: "#eb0000" }}
          >
            Engineering the Future
            <br />
            <span className="text-white" style={{ color: "#1142d4" }}>
              of Enterprise IT
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {APP_FULL_NAME} delivers cloud infrastructure, cybersecurity, and managed IT
            services that help enterprises scale securely and efficiently.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="#contact"
              className="px-8 py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:scale-105 active:scale-95"
            >
              Get a Free Audit
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 rounded-xl border border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition-all duration-200"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Floating Stat Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="bg-black/80 border border-white/20 rounded-2xl p-4 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                  <span className="text-gray-400">{stat.suffix}</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. SERVICES SECTION ─────────────────────────────────────── */}
      <section id="services" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-black mb-4">
              Enterprise IT Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end technology solutions designed to accelerate growth, reduce risk, and maximize operational efficiency.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-black hover:shadow-md shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />Predictive</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:underline"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. ABOUT / WHY CHOOSE US SECTION ────────────────────────── */}
      <section id="about" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInLeft}
            >
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                We Build Technology That{" "}
                <span className="text-black font-extrabold">Scales With You</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2009, {APP_FULL_NAME} has grown from a boutique IT consultancy to a
                full-service enterprise technology partner trusted by Fortune 500 companies worldwide.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our mission is simple: <span className="text-black font-semibold">eliminate technology friction</span> so
                your business can focus on what matters most. We combine deep technical expertise with
                a client-first approach to deliver solutions that actually work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
                >
                  Work With Us
                </Link>
                <Link
                  href="#case-studies"
                  className="px-6 py-3 rounded-xl border border-gray-200 text-gray-900 font-semibold hover:border-black transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>

            {/* Right: Feature Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Server, label: "Cloud-Native", desc: "Built for modern infrastructure" },
                { icon: Shield, label: "Security-First", desc: "Zero-trust by default" },
                { icon: Zap, label: "High Performance", desc: "Sub-100ms response times" },
                { icon: Users, label: "Expert Team", desc: "200+ certified engineers" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={scaleIn}
                  className="bg-white border border-gray-200 rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.label}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="text-4xl font-extrabold text-gray-900">The {APP_NAME} Difference</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="bg-white border border-gray-200 rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. STATS SECTION ────────────────────────────────────────── */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className={`text-center ${
                  index < stats.length - 1 ? "lg:border-r border-white/20" : ""
                }`}
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                  {stat.value}
                  <span className="text-gray-400">{stat.suffix}</span>
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. TECH STACK SECTION ───────────────────────────────────── */}
      <section id="technologies" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
              Our Stack
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Technologies We Master
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with the industry's leading platforms and tools to deliver best-in-class solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={scaleIn}
                className="bg-white border border-gray-200 hover:border-black rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center mx-auto mb-3">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-700">{tech.name}</div>
                <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS SECTION ─────────────────────────────────── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Client Stories
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Trusted by Industry Leaders
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                variants={fadeInUp}
                onClick={() => setActiveTestimonial(index)}
                className={`bg-white border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  activeTestimonial === index
                    ? "border-white shadow-lg shadow-white/10"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-black fill-black" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? "bg-white w-6" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CASE STUDIES SECTION ─────────────────────────────────── */}
      <section id="case-studies" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
              Our Work
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Case Studies
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results for real businesses. See how we've transformed enterprise IT operations.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((cs) => (
              <motion.div
                key={cs.id}
                variants={fadeInUp}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80";
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black text-white text-xs font-semibold">
                      {cs.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                    {cs.category}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{cs.title}</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{cs.description}</p>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-xl font-extrabold text-gray-900">{m.value}</div>
                        <div className="text-xs text-gray-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:underline"
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. TEAM SECTION ─────────────────────────────────────────── */}
      <section id="team" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
              Our People
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Meet the Leadership Team
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
              World-class engineers and strategists with decades of combined enterprise experience.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 font-medium mb-3">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center gap-3 mt-4">
                  <button className="text-gray-400 hover:text-black transition-colors">
                    <Globe className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-black transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 9. FAQ SECTION ──────────────────────────────────────────── */}
      <section id="faq" className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
              FAQ
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-3"
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                variants={fadeInUp}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`font-semibold text-base ${
                      openFaq === faq.id ? "text-black" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-black flex-shrink-0 transition-transform duration-300 ${
                      openFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 10. CONTACT SECTION ─────────────────────────────────────── */}
      <section id="contact" className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Get In Touch
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Let's Build Something Great
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to transform your IT infrastructure? Get a free audit and discover how we can help.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInLeft}
              onSubmit={handleFormSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corporation"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project or challenge..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInRight}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
                <p className="text-gray-400">
                  Reach out directly or fill in the form and we'll respond within 24 hours.
                </p>
              </div>

              {[
                { icon: Mail, label: "Email", value: CONTACT_EMAIL },
                { icon: Phone, label: "Phone", value: CONTACT_PHONE },
                { icon: MapPin, label: "Office", value: CONTACT_ADDRESS },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 border border-white/20"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-300 mb-1">{item.label}</div>
                    <div className="text-white">{item.value}</div>
                  </div>
                </div>
              ))}

              <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
                <h4 className="font-bold text-white mb-3">Office Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday – Friday</span>
                    <span className="text-white">9:00 AM – 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Emergency Support</span>
                    <span className="text-white">24/7/365</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
