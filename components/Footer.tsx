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
    <footer className="bg-black border-t border-white/10">
      {/* Newsletter Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold text-white mb-1">
                Stay ahead of the curve
              </h3>
              <p className="text-gray-400 text-sm">
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
                className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 whitespace-nowrap"
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
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-lg transition-shadow duration-300">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">{APP_NAME}</span>
                <span className="text-white">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {APP_FULL_NAME} delivers enterprise-grade IT solutions that help businesses scale securely and efficiently in the digital age.
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
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              Navigation
              <span className="flex-1 h-px bg-white opacity-20 ml-1" />
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLinkHref(link.href)}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-1.5 group transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 -ml-1 transition-all duration-200 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              Services
              <span className="flex-1 h-px bg-white opacity-20 ml-1" />
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={getLinkHref(service.href)}
                    onClick={(e) => handleAnchorClick(e, service.href)}
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-1.5 group transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 -ml-1 transition-all duration-200 group-hover:ml-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              Contact
              <span className="flex-1 h-px bg-white opacity-20 ml-1" />
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-gray-400 hover:text-white text-sm flex items-start gap-2.5 group transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="text-gray-400 hover:text-white text-sm flex items-start gap-2.5 group transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  {CONTACT_ADDRESS}
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {APP_FULL_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-gray-700">&bull;</span>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <span className="text-gray-700">&bull;</span>
              <Link href="/sitemap" className="text-gray-500 hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
