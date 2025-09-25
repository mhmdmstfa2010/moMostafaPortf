"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[min(96%,1100px)] rounded-2xl bg-white/80 backdrop-blur-md border border-primary/10 shadow-[0_8px_30px_rgba(30,58,138,0.06)]"
      role="banner"
    >
      <nav
        className="mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
            aria-label="Go to home"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-3"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white font-semibold">
                MM
              </span>
              <div className="hidden sm:block text-sm">
                <div className="text-text font-semibold">Mo Mostafa</div>
                <div className="text-xs text-muted -mt-0.5">
                  DevOps Engineer
                </div>
              </div>
            </motion.div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "text-text hover:text-primary hover:bg-primary/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {/* active underline (subtle) */}
                  <span
                    className={`absolute left-2 right-2 -bottom-2 h-1 rounded-full transition-all duration-300 ${
                      isActive ? "bg-secondary opacity-90" : "bg-transparent"
                    }`}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-text hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            onClick={() => setIsOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.28 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm border-t border-primary/8"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-text hover:text-primary hover:bg-primary/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
            {/* small socials row (optional) */}
            <div className="pt-2 border-t border-primary/6 mt-2 flex items-center gap-3">
              <Link
                href="https://github.com/youseif-elshreif"
                onClick={(e) => e}
                className="text-sm text-muted hover:text-primary"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/youseif-elshreif-2930a6227"
                onClick={(e) => e}
                className="text-sm text-muted hover:text-primary"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}
