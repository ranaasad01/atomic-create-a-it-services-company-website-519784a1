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
    color: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
  },
  {
    id: "security",
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with end-to-end security frameworks, real-time threat detection, and compliance management.",
    features: ["Zero-trust architecture", "SOC 2 compliance", "Penetration testing", "24/7 threat monitoring"],
    color: "from-violet-500 to-purple-400",
    glow: "shadow-violet-500/20",
  },
  {
    id: "network",
    icon: Network,
    title: "Network Solutions",
    description:
      "Design and deploy high-performance, resilient network infrastructure that scales with your business demands.",
    features: ["SD-WAN deployment", "Network segmentation", "Load balancing", "VPN & MPLS"],
    color: "from-emerald-500 to-teal-400",
    glow: "shadow-emerald-500/20",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable intelligence with our advanced analytics platforms and real-time dashboards.",
    features: ["BI dashboards", "Predictive analytics", "Data warehousing", "ETL pipelines"],
    color: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/20",
  },
  {
    id: "devops",
    icon: GitBranch,
    title: "DevOps & Automation",
    description:
      "Accelerate software delivery with CI/CD pipelines, infrastructure-as-code, and intelligent automation workflows.",
    features: ["CI/CD pipelines", "Kubernetes orchestration", "IaC with Terraform", "GitOps workflows"],
    color: "from-pink-500 to-rose-400",
    glow: "shadow-pink-500/20",
  },
  {
    id: "support",
    icon: Headphones,
    title: "Managed IT Support",
    description:
      "Round-the-clock expert support with guaranteed SLAs, proactive monitoring, and dedicated account management.",
    features: ["24/7 help desk", "Proactive monitoring", "On-site engineers", "SLA guarantees"],
    color: "from-sky-500 to-blue-400",
    glow: "shadow-sky-500/20",
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
      { label: "Compliance", value: "100%" },
      { label: "Data Latency", value: "<50ms" },
    ],
    image: "https://www.keycdn.com/img/support/network-latency.png",
    tag: "Security + Cloud",
  },
  {
    id: "retail",
    category: "Retail",
    title: "E-commerce platform handling 10M+ daily active users",
    description:
      "Engineered a globally distributed microservices architecture for a top-10 e-commerce brand, enabling seamless Black Friday traffic spikes.",
    metrics: [
      { label: "Daily Active Users", value: "10M+" },
      { label: "Response Time", value: "120ms" },
      { label: "Revenue Impact", value: "+34%" },
    ],
    image: "https://www.keycdn.com/img/support/network-latency.png",
    tag: "DevOps + Analytics",
  },
];

const teamMembers = [
  {
    id: "ceo",
    name: "Alexandra Chen",
    role: "CEO & Co-Founder",
    bio: "15+ years leading enterprise digital transformation initiatives for Fortune 500 companies.",
    avatar: "AC",
  },
  {
    id: "cto",
    name: "Marcus Rivera",
    role: "CTO & Cloud Architect",
    bio: "Former AWS Principal Engineer with deep expertise in distributed systems and cloud-native architecture.",
    avatar: "MR",
  },
  {
    id: "ciso",
    name: "Priya Patel",
    role: "Chief Security Officer",
    bio: "Certified CISSP with 12 years securing critical infrastructure for financial and healthcare sectors.",
    avatar: "PP",
  },
  {
    id: "vp",
    name: "James O'Brien",
    role: "VP of Engineering",
    bio: "Full-stack engineering leader who has scaled engineering teams from 5 to 200+ across three continents.",
    avatar: "JO",
  },
];

const testimonials = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "CTO, FinEdge Capital",
    quote:
      "NexaCore transformed our entire cloud infrastructure in under 90 days. The performance gains were immediate and the cost savings exceeded our projections by 40%.",
    rating: 5,
    avatar: "SM",
  },
  {
    id: "t2",
    name: "David Park",
    role: "VP Engineering, MedCore Systems",
    quote:
      "Their cybersecurity team is world-class. They identified vulnerabilities our internal team had missed for years and implemented a zero-trust framework that gave us full SOC 2 compliance.",
    rating: 5,
    avatar: "DP",
  },
  {
    id: "t3",
    name: "Elena Vasquez",
    role: "COO, RetailMax Global",
    quote:
      "We handled our biggest Black Friday ever with zero downtime. NexaCore's architecture scaled flawlessly to 10x our normal traffic. Absolutely phenomenal work.",
    rating: 5,
    avatar: "EV",
  },
];

const technologies = [
  { name: "AWS", icon: Cloud },
  { name: "Azure", icon: Server },
  { name: "GCP", icon: Globe },
  { name: "Kubernetes", icon: GitBranch },
  { name: "Terraform", icon: Zap },
  { name: "Docker", icon: Server },
  { name: "Datadog", icon: BarChart3 },
  { name: "Vault", icon: Lock },
  { name: "Ansible", icon: GitBranch },
  { name: "Prometheus", icon: TrendingUp },
  { name: "Grafana", icon: BarChart3 },
  { name: "Istio", icon: Network },
];

const faqs = [
  {
    id: "f1",
    question: "What industries do you specialize in?",
    answer:
      "We serve clients across FinTech, Healthcare, Retail, Manufacturing, and Government sectors. Our team has deep domain expertise in regulated industries requiring strict compliance frameworks like HIPAA, SOC 2, PCI-DSS, and FedRAMP.",
  },
  {
    id: "f2",
    question: "How quickly can you onboard our organization?",
    answer:
      "Our rapid onboarding process typically takes 2–4 weeks depending on the scope of services. We begin with a comprehensive IT audit, followed by a tailored roadmap and phased implementation to minimize disruption.",
  },
  {
    id: "f3",
    question: "Do you offer 24/7 support?",
    answer:
      "Yes. All managed service plans include 24/7/365 monitoring and support with guaranteed response times. Our global NOC team ensures your systems are always operational, with escalation paths and dedicated account managers.",
  },
  {
    id: "f4",
    question: "What cloud platforms do you support?",
    answer:
      "We are certified partners with AWS, Microsoft Azure, and Google Cloud Platform. We also support hybrid and multi-cloud architectures, helping you avoid vendor lock-in while optimizing for cost and performance.",
  },
  {
    id: "f5",
    question: "How do you handle data security and compliance?",
    answer:
      "Security is embedded in everything we do. We follow a zero-trust security model, conduct regular penetration testing, and maintain compliance with major frameworks including SOC 2 Type II, ISO 27001, HIPAA, and GDPR.",
  },
];

const values = [
  { icon: Shield, title: "Security First", desc: "Every solution is built with security as the foundation, not an afterthought." },
  { icon: Zap, title: "Performance Driven", desc: "We engineer for speed, reliability, and scalability at every layer of the stack." },
  { icon: Users, title: "Client Partnership", desc: "We embed with your team, aligning our success metrics with your business outcomes." },
  { icon: Award, title: "Certified Excellence", desc: "Our engineers hold 200+ certifications across all major cloud and security platforms." },
];

// ─── Main Page Component ─────────────────────────────────────────────────────

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#FAFAF7] to-[#FDF6E3] overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#F5C518]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B8860B]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF6E3] text-[#B8860B] border border-[#E8DFC0] text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Trusted by 500+ Enterprise Clients
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-[#1A1A1A] to-[#4A4A4A] bg-clip-text text-transparent">
                Engineering the
              </span>
              <br />
              <span className="text-[#B8860B]">Future of IT</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[#6B6B6B] max-w-2xl mb-10 leading-relaxed"
            >
              {APP_FULL_NAME} delivers enterprise-grade cloud, cybersecurity, and managed IT services
              that help modern businesses scale securely and efficiently.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#F5C518] text-white font-semibold text-lg shadow-lg shadow-yellow-600/30 hover:shadow-yellow-600/50 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                Get a Free Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 rounded-xl border border-[#E8DFC0] text-[#1A1A1A] font-semibold text-lg hover:bg-[#FDF6E3] transition-all duration-200 flex items-center gap-2"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-8 sm:gap-12"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4">
                  {i > 0 && <div className="hidden sm:block w-px h-10 bg-[#E8DFC0]" />}
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-[#B8860B]">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-[#6B6B6B] mt-0.5">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute left-8 top-1/3 hidden xl:flex flex-col gap-3"
        >
          {["AWS Certified", "ISO 27001", "SOC 2 Type II"].map((badge) => (
            <div
              key={badge}
              className="px-4 py-2 rounded-lg bg-white border border-[#E8DFC0] shadow-md text-sm font-medium text-[#1A1A1A] flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4 text-[#B8860B]" />
              {badge}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute right-8 top-1/3 hidden xl:flex flex-col gap-3"
        >
          {["Azure Partner", "GCP Partner", "HIPAA Compliant"].map((badge) => (
            <div
              key={badge}
              className="px-4 py-2 rounded-lg bg-white border border-[#E8DFC0] shadow-md text-sm font-medium text-[#1A1A1A] flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4 text-[#B8860B]" />
              {badge}
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8B8B8B] text-xs"
        >
          <span>Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-[#E8DFC0] flex items-start justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-[#B8860B]"
            />
          </div>
        </motion.div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] mb-4">
              Enterprise IT Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              From cloud migration to cybersecurity, we deliver end-to-end technology solutions
              that drive measurable business outcomes.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={scaleIn}
                  className="group relative bg-white border border-[#E8DFC0] hover:border-[#B8860B]/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg ${service.glow}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{service.title}</h3>
                  <p className="text-[#6B6B6B] text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                        <CheckCircle className="w-4 h-4 text-[#B8860B] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="text-sm font-semibold text-[#B8860B] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-[#B8860B] to-[#D4A017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center relative">
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20 hidden lg:block" />
                )}
                <div className="text-4xl font-extrabold text-white mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
                About NexaCore
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] mb-6">
                We Build Technology That Scales With You
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#6B6B6B] text-lg mb-6 leading-relaxed">
                Founded in 2009, NexaCore IT Solutions has grown from a boutique consultancy to a
                global technology partner serving 500+ enterprise clients across 30 countries.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[#6B6B6B] mb-8 leading-relaxed">
                Our mission is simple: deliver technology solutions that create real, measurable
                business value. We combine deep technical expertise with strategic business acumen
                to help organizations navigate digital transformation with confidence.
              </motion.p>
              <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <motion.div
                      key={v.title}
                      variants={fadeInUp}
                      className="flex gap-3 p-4 rounded-xl bg-[#FAFAF7] border border-[#E8DFC0]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#FDF6E3] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#B8860B]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#1A1A1A] text-sm mb-1">{v.title}</div>
                        <div className="text-[#6B6B6B] text-xs leading-relaxed">{v.desc}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Visual side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#FDF6E3] p-8 border border-[#E8DFC0]">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe, label: "30+ Countries", sub: "Global Reach" },
                    { icon: Users, label: "500+ Clients", sub: "Enterprise Scale" },
                    { icon: Award, label: "200+ Certs", sub: "Certified Experts" },
                    { icon: TrendingUp, label: "15+ Years", sub: "Industry Experience" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="bg-white rounded-xl p-5 border border-[#E8DFC0] text-center shadow-sm"
                      >
                        <Icon className="w-8 h-8 text-[#B8860B] mx-auto mb-2" />
                        <div className="font-bold text-[#1A1A1A] text-lg">{item.label}</div>
                        <div className="text-[#6B6B6B] text-xs">{item.sub}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 p-4 bg-white rounded-xl border border-[#E8DFC0] shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-sm font-medium text-[#1A1A1A]">All Systems Operational</span>
                  </div>
                  <div className="space-y-2">
                    {["Cloud Infrastructure", "Security Operations", "Network Monitoring"].map((sys) => (
                      <div key={sys} className="flex items-center justify-between">
                        <span className="text-xs text-[#6B6B6B]">{sys}</span>
                        <span className="text-xs font-semibold text-emerald-500">99.99%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ──────────────────────────────────────────────────── */}
      <section id="technologies" className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
              Our Stack
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] mb-4">
              Technologies We Master
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
          >
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  variants={scaleIn}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-[#E8DFC0] hover:border-[#B8860B]/40 shadow-sm transition-all duration-200 group"
                >
                  <Icon className="w-8 h-8 text-[#B8860B] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-[#4A4A4A]">{tech.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
              Client Stories
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] mb-4">
              Trusted by Industry Leaders
            </motion.h2>
          </motion.div>

          <div className="relative">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FAFAF7] border border-[#E8DFC0] shadow-sm rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-[#4A4A4A] text-lg md:text-xl leading-relaxed mb-8 italic">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B8860B] to-[#F5C518] flex items-center justify-center text-white font-bold">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="font-bold text-[#1A1A1A]">{testimonials[activeTestimonial].name}</div>
                  <div className="text-sm text-[#6B6B6B]">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </motion.div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === activeTestimonial
                      ? "bg-[#B8860B] scale-125"
                      : "bg-[#E8DFC0] hover:bg-[#D4A017]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────────────────── */}
      <section id="case-studies" className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
              Our Work
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] mb-4">
              Case Studies
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Real results for real businesses. See how we&apos;ve helped industry leaders transform
              their technology infrastructure.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {caseStudies.map((cs) => (
              <motion.div
                key={cs.id}
                variants={fadeInUp}
                className="bg-white border border-[#E8DFC0] shadow-sm rounded-2xl overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">
                      {cs.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#FDF6E3] text-[#B8860B] text-xs font-medium">
                      {cs.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 leading-snug">{cs.title}</h3>
                  <p className="text-[#6B6B6B] text-sm mb-6 leading-relaxed">{cs.description}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="text-center p-3 rounded-lg bg-[#FAFAF7] border border-[#E8DFC0]">
                        <div className="text-xl font-extrabold text-[#B8860B]">{m.value}</div>
                        <div className="text-xs text-[#6B6B6B] mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────────────── */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
              Our People
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] mb-4">
              Meet the Leadership Team
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              World-class engineers, architects, and strategists united by a passion for
              technology excellence.
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
                variants={scaleIn}
                className="bg-[#FAFAF7] border border-[#E8DFC0] shadow-sm rounded-2xl p-6 text-center group hover:shadow-md transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#B8860B] to-[#F5C518] flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg">
                  {member.avatar}
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-[#B8860B] mb-3">{member.role}</p>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-[#FAFAF7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
              FAQ
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] mb-4">
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
                className={`bg-white border shadow-sm rounded-xl overflow-hidden transition-all duration-200 ${
                  openFaq === faq.id ? "border-[#B8860B]/40" : "border-[#E8DFC0]"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-[#1A1A1A] pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B8860B] flex-shrink-0 transition-transform duration-200 ${
                      openFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="px-5 pb-5">
                    <p className="text-[#6B6B6B] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
              Get In Touch
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] mb-4">
              Start Your Transformation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Ready to modernize your IT infrastructure? Let&apos;s talk. Our experts are standing
              by to provide a free, no-obligation technology audit.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {[
                { icon: Mail, label: "Email Us", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: Phone, label: "Call Us", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE}` },
                { icon: MapPin, label: "Visit Us", value: CONTACT_ADDRESS, href: "#" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    variants={fadeInUp}
                    className="flex gap-4 p-5 rounded-xl bg-[#FAFAF7] border border-[#E8DFC0] hover:border-[#B8860B]/40 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#FDF6E3] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#B8860B]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#8B8B8B] mb-1">{item.label}</div>
                      <div className="text-sm text-[#1A1A1A] font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              onSubmit={handleFormSubmit}
              className="lg:col-span-2 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#4A4A4A] mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DFC0] text-[#1A1A1A] placeholder-[#A0A0A0] focus:outline-none focus:border-[#B8860B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4A4A4A] mb-1.5">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DFC0] text-[#1A1A1A] placeholder-[#A0A0A0] focus:outline-none focus:border-[#B8860B] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4A4A4A] mb-1.5">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your Company Name"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DFC0] text-[#1A1A1A] placeholder-[#A0A0A0] focus:outline-none focus:border-[#B8860B] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4A4A4A] mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your IT challenges and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DFC0] text-[#1A1A1A] placeholder-[#A0A0A0] focus:outline-none focus:border-[#B8860B] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#F5C518] text-white font-semibold text-lg shadow-lg shadow-yellow-600/30 hover:shadow-yellow-600/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
              {formSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-[#B8860B] font-medium"
                >
                  ✓ Message sent! We&apos;ll be in touch within 24 hours.
                </motion.p>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
}
