"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(element.id);
        }
      });
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    // إغلاق القائمة أولاً
    setIsOpen(false);

    // انتظار صغير لإغلاق القائمة قبل السكرول
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const rect = target.getBoundingClientRect();
        const offsetTop = window.pageYOffset + rect.top;
        // تحسين للموبايل - offset أكبر
        const offset = window.innerWidth < 768 ? 100 : 80;

        // استخدام scrollTo محسن للموبايل
        if ("scrollBehavior" in document.documentElement.style) {
          window.scrollTo({
            top: offsetTop - offset,
            behavior: "smooth",
          });
        } else {
          // Fallback للمتصفحات القديمة
          window.scrollTo(0, offsetTop - offset);
        }
      }
    }, 100); // انتظار 100ms لإغلاق القائمة
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
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="cursor-pointer flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
            aria-label="Go to home"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-3"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-900 to-indigo-800 text-white font-semibold shadow-lg">
                M
              </span>
              <div className="sm:block text-sm flex flex-col text-left">
                <div className="text-slate-800 font-semibold">
                  Mohamed Moustafa
                </div>
                <div className="text-xs text-slate-600 -mt-0.5">
                  DevOps Engineer
                </div>
              </div>
            </motion.div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-900 to-indigo-800 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                  } cursor-pointer`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {/* active underline (subtle) */}
                  <span
                    className={`absolute left-2 right-2 -bottom-2 h-1 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"
                        : "bg-transparent"
                    }`}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
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
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm border-t border-blue-200/30"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-900 to-indigo-800 text-white shadow-lg"
                      : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                  } cursor-pointer`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
            {/* small socials row (optional) */}
            <div className="pt-2 border-t border-blue-200/30 mt-2 flex items-center gap-3">
              <Link
                href="https://github.com/mhmdmstfa2010"
                onClick={(e) => e}
                className="text-sm text-slate-600 hover:text-blue-700"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/youseif-elshreif-2930a6227"
                onClick={(e) => e}
                className="text-sm text-slate-600 hover:text-blue-700"
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
