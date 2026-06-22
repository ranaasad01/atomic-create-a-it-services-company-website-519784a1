"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks, navCTA, APP_NAME } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
      setIsOpen(false);
    }
  };

  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-yellow-600/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B8860B] to-[#F5C518] flex items-center justify-center shadow-lg shadow-yellow-600/30 group-hover:shadow-yellow-600/50 transition-shadow duration-300">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-[#1A1A1A]">{APP_NAME}</span>
              <span className="text-[#B8860B]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getLinkHref(link.href)}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? "text-[#B8860B] bg-[#FDF6E3]"
                    : "text-[#4A4A4A] hover:text-[#B8860B] hover:bg-[#FDF6E3]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={getLinkHref(navCTA.href)}
              onClick={(e) => handleAnchorClick(e, navCTA.href)}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#B8860B] to-[#F5C518] text-white hover:opacity-90 transition-all duration-200 shadow-lg shadow-yellow-600/30 hover:shadow-yellow-600/50 hover:scale-105 active:scale-95"
            >
              {navCTA.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#4A4A4A] hover:text-[#B8860B] hover:bg-[#FDF6E3] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-white/98 border-t border-[#E8DFC0] px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLinkHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === link.href
                      ? "text-[#B8860B] bg-[#FDF6E3]"
                      : "text-[#4A4A4A] hover:text-[#B8860B] hover:bg-[#FDF6E3]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-[#E8DFC0]">
                <Link
                  href={getLinkHref(navCTA.href)}
                  onClick={(e) => handleAnchorClick(e, navCTA.href)}
                  className="block w-full text-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#B8860B] to-[#F5C518] text-white hover:opacity-90 transition-all duration-200 shadow-lg shadow-yellow-600/30"
                >
                  {navCTA.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
