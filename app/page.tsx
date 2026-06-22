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
      { label: "Data Processed Daily", value: "4TB" },
      { label: "Compliance Score", value: "100%" },
    ],
    image: "http://www.eitc.org/research-opportunities/photos3/smart-hospitals_120723a",
    tag: "Security + Analytics",
  },
  {
    id: "retail",
    category: "Retail",
    title: "Zero-downtime migration for a global e-commerce giant",
    description:
      "Migrated a 12-year-old monolithic e-commerce platform to microservices on Kubernetes, achieving zero downtime during peak Black Friday traffic.",
    metrics: [
      { label: "Downtime", value: "0 min" },
      { label: "Performance Gain", value: "3.4×" },
      { label: "Deploy Frequency", value: "10×" },
    ],
    image: "https://amsgcorp.net/wp-content/uploads/2024/08/iStock-1426414891.jpg",
    tag: "Cloud + DevOps",
  },
];

const team = [
  {
    id: "ceo",
    name: "Marcus Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of Engineering at AWS. 20+ years building enterprise infrastructure at scale.",
    image: "https://podcastle.org/wp-content/uploads/2024/09/photo_2024-06-24_16-15-54-660x989.jpg",
    linkedin: "#",
  },
  {
    id: "cto",
    name: "Priya Nair",
    role: "CTO & Co-Founder",
    bio: "Ex-Google SRE lead. Architect of systems serving 500M+ daily active users.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQE3NpM1FP01Yg/feedshare-shrink_800/B56Zf4pvKcGUAg-/0/1752223383746?e=2147483647&v=beta&t=C11dC6M36dpAKpcbBRMtusPrnkgE-cNJfHc93ZNpFoQ",
    linkedin: "#",
  },
  {
    id: "cso",
    name: "James Okafor",
    role: "Chief Security Officer",
    bio: "Former NSA cybersecurity analyst. CISSP-certified with 18 years in enterprise security.",
    image: "https://achiya.org/wp-content/uploads/writers/james-okafor-4d4bc7.webp",
    linkedin: "#",
  },
  {
    id: "vp",
    name: "Sofia Reyes",
    role: "VP of Cloud Architecture",
    bio: "AWS Solutions Architect Pro. Led 200+ enterprise cloud migrations across 3 continents.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Sof%C3%ADa_Reyes_2016.jpg",
    linkedin: "#",
  },
];

const testimonials = [
  {
    id: "t1",
    name: "David Hartmann",
    role: "CTO, Meridian Financial",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/David_Hartman_at_the_Society_of_Experimental_Test_Pilots_Oct_5%2C_2002.jpg/250px-David_Hartman_at_the_Society_of_Experimental_Test_Pilots_Oct_5%2C_2002.jpg",
    rating: 5,
    quote:
      "NexaCore transformed our entire infrastructure in 90 days. Their team's depth of knowledge is unmatched — we've seen a 40% reduction in operational overhead since the migration.",
  },
  {
    id: "t2",
    name: "Aisha Patel",
    role: "VP Engineering, HealthBridge",
    avatar: "https://static.hudl.com/users/temp/18785842_918b1bb5d7054415a784e4f1eb777f2d.jpg",
    rating: 5,
    quote:
      "The cybersecurity audit alone was worth every penny. They identified 23 critical vulnerabilities we had no idea existed. Now we sleep soundly knowing our patient data is protected.",
  },
  {
    id: "t3",
    name: "Robert Kim",
    role: "Director of IT, GlobalRetail Co.",
    avatar: "https://m.media-amazon.com/images/M/MV5BZjhhNGE0YjctZjI1Yy00YjU4LTgzZTUtZTAxZTI1ZDY5NTQ1XkEyXkFqcGc@._V1_.jpg",
    rating: 5,
    quote:
      "We went from 3-week release cycles to daily deployments. The DevOps transformation NexaCore delivered has fundamentally changed how we ship software.",
  },
];

const technologies = [
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Datadog", category: "Monitoring" },
  { name: "Splunk", category: "Security" },
  { name: "CrowdStrike", category: "Security" },
  { name: "Snowflake", category: "Data" },
  { name: "Databricks", category: "Data" },
  { name: "Grafana", category: "Monitoring" },
];

const faqs = [
  {
    id: "f1",
    question: "How long does a typical cloud migration take?",
    answer:
      "Migration timelines vary based on complexity, but most mid-enterprise migrations complete in 60–120 days. We begin with a thorough discovery phase, then execute in parallel workstreams to minimize disruption. Our record is a full 200-server migration completed in 47 days.",
  },
  {
    id: "f2",
    question: "Do you offer ongoing managed services after the initial project?",
    answer:
      "Absolutely. Over 80% of our clients transition to our Managed IT Support tier after initial engagements. We offer flexible plans from basic monitoring to fully managed operations with dedicated account engineers.",
  },
  {
    id: "f3",
    question: "How do you handle compliance requirements like HIPAA, SOC 2, or PCI-DSS?",
    answer:
      "Compliance is built into every engagement from day one. Our security team includes certified compliance specialists for HIPAA, SOC 2 Type II, PCI-DSS, ISO 27001, and GDPR. We've helped 150+ organizations achieve and maintain certification.",
  },
  {
    id: "f4",
    question: "What is your SLA for critical incident response?",
    answer:
      "Our Platinum support tier guarantees a 15-minute response time for P1 critical incidents, 24/7/365. Standard support offers 1-hour P1 response. All SLAs are contractually backed with financial penalties if we miss targets.",
  },
  {
    id: "f5",
    question: "Can you work with our existing in-house IT team?",
    answer:
      "Yes — we operate as an extension of your team, not a replacement. We offer co-managed models where we handle specific domains (e.g., cloud ops or security) while your team retains ownership of others. Knowledge transfer is a core part of every engagement.",
  },
];

const valueProps = [
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "From kickoff to production in weeks, not months. Our battle-tested playbooks eliminate guesswork.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Operations across 4 continents with regional data centers ensuring low-latency performance worldwide.",
  },
  {
    icon: Lock,
    title: "Security-First",
    description: "Every solution is architected with zero-trust principles and continuous compliance monitoring baked in.",
  },
  {
    icon: Server,
    title: "Enterprise Scale",
    description: "Infrastructure designed to handle millions of requests per second without breaking a sweat.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Named engineers, not ticket queues. Your dedicated pod knows your stack inside and out.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "500+ enterprise clients, 15 years of excellence, and a 97% client retention rate speak for themselves.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <main className="bg-[#0F172A] text-white overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#060D1F] via-[#0F172A] to-[#0F1F3D]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Trusted by 500+ Enterprise Clients Worldwide
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 max-w-5xl"
            >
              <span className="text-white">Engineering the</span>
              <br />
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#818CF8] bg-clip-text text-transparent">
                Future of Enterprise
              </span>
              <br />
              <span className="text-white">Technology</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
            >
              {APP_FULL_NAME} delivers cloud infrastructure, cybersecurity, and
              managed IT solutions that scale with your ambitions — backed by
              15 years of enterprise excellence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E40AF] to-[#38BDF8] text-white font-semibold text-base shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow flex items-center gap-2 justify-center"
              >
                Get a Free IT Audit <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#case-studies"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 transition-colors flex items-center gap-2 justify-center"
              >
                View Case Studies
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-3xl"
            >
              {(stats ?? []).map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm"
                >
                  <div className="text-3xl font-extrabold text-white mb-1">
                    {stat.value}
                    <span className="text-[#38BDF8]">{stat.suffix ?? ""}</span>
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0A1628] to-[#0F172A]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium mb-4"
            >
              What We Do
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            >
              End-to-End IT Services
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              From cloud architecture to 24/7 managed support, we cover every
              layer of your technology stack so you can focus on what matters.
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
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`group relative bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:${service.glow}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {(service.features ?? []).map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT / VALUE PROPS ──────────────────────────────────────────── */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#060D1F]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About intro */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInLeft}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium mb-4">
                About NexaCore
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Built by engineers,{" "}
                <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
                  for enterprises
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Founded in 2009 by former AWS and Google engineers, NexaCore was
                built on a single conviction: enterprise technology should be
                resilient, secure, and a competitive advantage — not a liability.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Today, we serve 500+ clients across financial services,
                healthcare, retail, and manufacturing — managing over $2B in
                cloud infrastructure and protecting more than 4 million
                endpoints globally.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <TrendingUp className="w-5 h-5 text-[#38BDF8]" />
                  <span className="text-sm">97% client retention rate</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Award className="w-5 h-5 text-[#38BDF8]" />
                  <span className="text-sm">Gartner Magic Quadrant Leader</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Shield className="w-5 h-5 text-[#38BDF8]" />
                  <span className="text-sm">ISO 27001 Certified</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/40">
                <img
                  src="http://www.nexacore.sg/assets/images/network-operations.jpg"
                  alt="NexaCore operations center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1F]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-white text-sm font-medium">
                        All systems operational — 99.99% uptime this quarter
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#1E40AF] to-[#38BDF8] rounded-2xl p-4 shadow-xl shadow-blue-500/30">
                <div className="text-2xl font-extrabold text-white">15+</div>
                <div className="text-blue-100 text-xs">Years of Excellence</div>
              </div>
            </motion.div>
          </div>

          {/* Value props grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {valueProps.map((vp) => {
              const Icon = vp.icon;
              return (
                <motion.div
                  key={vp.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="flex gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-white/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{vp.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {vp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ─────────────────────────────────────────────────── */}
      <section id="technologies" className="py-24 relative">
        <div className="absolute inset-0 bg-[#0F172A]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium mb-4"
            >
              Our Stack
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            >
              Best-in-Class Technologies
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-lg max-w-xl mx-auto"
            >
              We partner with the world's leading technology vendors to deliver
              solutions that are proven, scalable, and future-proof.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={scaleIn}
                whileHover={{ scale: 1.06, y: -3 }}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/5 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                  <Server className="w-5 h-5 text-slate-300" />
                </div>
                <span className="text-white text-sm font-semibold">{tech.name}</span>
                <span className="text-slate-500 text-xs">{tech.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
      <section id="case-studies" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#060D1F]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium mb-4"
            >
              Case Studies
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            >
              Results That Speak for Themselves
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              Real transformations, measurable outcomes. See how we've helped
              industry leaders modernize their technology infrastructure.
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
                whileHover={{ y: -6 }}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1F] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-medium">
                      {cs.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                      {cs.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {cs.description}
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {(cs.metrics ?? []).map((m) => (
                      <div
                        key={m.label}
                        className="text-center p-3 rounded-xl bg-white/5 border border-white/8"
                      >
                        <div className="text-[#38BDF8] font-extrabold text-lg">
                          {m.value}
                        </div>
                        <div className="text-slate-500 text-xs mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[#0F172A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium mb-4"
            >
              Client Testimonials
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            >
              Trusted by Industry Leaders
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────────────── */}
      <section id="team" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#060D1F]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium mb-4"
            >
              Leadership
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            >
              Meet the Team
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-lg max-w-xl mx-auto"
            >
              World-class engineers and strategists who've built and secured
              some of the most complex systems on the planet.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1F] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg">{member.name}</h3>
                  <p className="text-[#38BDF8] text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 relative">
        <div className="absolute inset-0 bg-[#0F172A]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium mb-4"
            >
              FAQ
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            >
              Common Questions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-lg"
            >
              Everything you need to know before starting your IT transformation.
            </motion.p>
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
                className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-white font-semibold pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === faq.id ? "auto" : 0,
                    opacity: openFaq === faq.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#060D1F]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium mb-4"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            >
              Start Your IT Transformation
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-lg max-w-xl mx-auto"
            >
              Book a free 60-minute IT audit with one of our senior architects.
              No sales pitch — just honest, expert advice.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInLeft}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let&apos;s talk about your challenges
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Whether you&apos;re planning a cloud migration, dealing with a
                  security incident, or simply want to modernize your
                  infrastructure — our team is ready to help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-0.5">Email</div>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-white font-medium hover:text-[#38BDF8] transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-0.5">Phone</div>
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="text-white font-medium hover:text-[#38BDF8] transition-colors"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-0.5">
                      Headquarters
                    </div>
                    <div className="text-white font-medium">
                      {CONTACT_ADDRESS}
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Free 60-min audit", icon: CheckCircle },
                  { label: "No commitment required", icon: CheckCircle },
                  { label: "Response within 2 hours", icon: CheckCircle },
                  { label: "NDA available on request", icon: CheckCircle },
                ].map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={badge.label}
                      className="flex items-center gap-2 text-slate-300 text-sm"
                    >
                      <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {badge.label}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInRight}
            >
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/[0.03] border border-emerald-500/30 rounded-2xl p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Received!
                  </h3>
                  <p className="text-slate-400">
                    Thank you for reaching out. A senior architect will contact
                    you within 2 business hours to schedule your free IT audit.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="John Smith"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8]/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="john@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8]/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      placeholder="Acme Corporation"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8]/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#38BDF8]/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-[#0F172A]">
                        Select a service...
                      </option>
                      <option value="cloud" className="bg-[#0F172A]">
                        Cloud Infrastructure
                      </option>
                      <option value="security" className="bg-[#0F172A]">
                        Cybersecurity
                      </option>
                      <option value="network" className="bg-[#0F172A]">
                        Network Solutions
                      </option>
                      <option value="analytics" className="bg-[#0F172A]">
                        Data Analytics
                      </option>
                      <option value="devops" className="bg-[#0F172A]">
                        DevOps & Automation
                      </option>
                      <option value="support" className="bg-[#0F172A]">
                        Managed IT Support
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Tell us about your challenge
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Describe your current IT challenges or goals..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8]/50 focus:bg-white/8 transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1E40AF] to-[#38BDF8] text-white font-semibold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow flex items-center justify-center gap-2"
                  >
                    Request Free IT Audit <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E40AF] to-[#0369A1]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(56,189,248,0.15),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={slideInFromBottom}
              className="text-4xl lg:text-5xl font-extrabold text-white mb-5"
            >
              Ready to modernize your infrastructure?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto"
            >
              Join 500+ enterprise clients who trust {APP_NAME} to power their
              most critical systems. Your free IT audit is one click away.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl bg-white text-[#1E40AF] font-bold text-base hover:bg-blue-50 transition-colors shadow-xl flex items-center gap-2 justify-center"
              >
                Get Your Free Audit <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`tel:${CONTACT_PHONE}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold text-base hover:bg-white/20 transition-colors flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" /> Call Us Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}