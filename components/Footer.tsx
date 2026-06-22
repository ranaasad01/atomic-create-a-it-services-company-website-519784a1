"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Globe as Facebook, Sparkles, ArrowRight } from 'lucide-react';
import { navLinks, APP_NAME, APP_FULL_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const footerServices = [
  { label: "Cloud Infrastructure", href: "#services" },
  { label: "Cybersecurity", href: "#services" },
  { label: "Network Solutions", href: "#services" },
  { label: "Managed IT Support", href: "#services" },
  { label: "Data Analytics", href: "#services" },
  { label: "DevOps & Automation", href: "#services" },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export default function Footer() {
  const pathname = usePathname();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  return (
    <footer className="bg-[#FAFAF7] border-t border-[#E8DFC0]">
      {/* Newsletter Banner */}
      <div className="border-b border-[#E8DFC0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
                Stay ahead of the curve
              </h3>
              <p className="text-[#6B6B6B] text-sm">
                Get the latest IT insights and industry news delivered to your inbox.
              </p>
            </motion.div>
            <motion.form
              variants={fadeInUp}
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-white border border-[#E8DFC0] text-[#1A1A1A] placeholder-[#A0A0A0] text-sm focus:outline-none focus:border-[#B8860B]/60 focus:bg-[#FDF6E3] transition-all"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#B8860B] to-[#F5C518] text-white text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-yellow-600/30 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B8860B] to-[#F5C518] flex items-center justify-center shadow-lg shadow-yellow-600/30 group-hover:shadow-yellow-600/50 transition-shadow duration-300">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-[#1A1A1A]">{APP_NAME}</span>
                <span className="text-[#B8860B]">.</span>
              </span>
            </Link>
            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
              Enterprise-grade IT solutions that power modern businesses. From cloud to cybersecurity, we engineer the future.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white text-[#6B6B6B] hover:bg-[#FDF6E3] hover:text-[#B8860B] border border-[#E8DFC0] flex items-center justify-center transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-[#1A1A1A] font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#B8860B] rounded-full" />
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLinkHref(link.href)}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-[#6B6B6B] hover:text-[#B8860B] text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#B8860B] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-[#1A1A1A] font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#B8860B] rounded-full" />
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={getLinkHref(service.href)}
                    onClick={(e) => handleAnchorClick(e, service.href)}
                    className="text-[#6B6B6B] hover:text-[#B8860B] text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#B8860B] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-[#1A1A1A] font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#B8860B] rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FDF6E3] border border-[#E8DFC0] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
                  </div>
                  <div>
                    <p className="text-[#8B8B8B] text-xs uppercase tracking-wide mb-0.5">Email</p>
                    <p className="text-[#6B6B6B] text-sm group-hover:text-[#B8860B] transition-colors">{CONTACT_EMAIL}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FDF6E3] border border-[#E8DFC0] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
                  </div>
                  <div>
                    <p className="text-[#8B8B8B] text-xs uppercase tracking-wide mb-0.5">Phone</p>
                    <p className="text-[#6B6B6B] text-sm group-hover:text-[#B8860B] transition-colors">{CONTACT_PHONE}</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FDF6E3] border border-[#E8DFC0] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                  </div>
                  <div>
                    <p className="text-[#8B8B8B] text-xs uppercase tracking-wide mb-0.5">Address</p>
                    <p className="text-[#6B6B6B] text-sm">{CONTACT_ADDRESS}</p>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E8DFC0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#8B8B8B] text-sm">
              © {new Date().getFullYear()} {APP_FULL_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF6E3] border border-[#E8DFC0] text-[#B8860B] text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-pulse" />
                All systems operational
              </span>
              <div className="flex items-center gap-3">
                <Link href="#" className="text-[#8B8B8B] hover:text-[#B8860B] text-xs transition-colors">Privacy Policy</Link>
                <span className="text-[#E8DFC0]">·</span>
                <Link href="#" className="text-[#8B8B8B] hover:text-[#B8860B] text-xs transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
