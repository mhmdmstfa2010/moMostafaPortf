"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import pic from "../../public/images/me.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="space-y-8 lg:order-1"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Mo Mostafa
              </motion.h1>
              <motion.div
                className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                DevOps Engineer
              </motion.div>
              <motion.p
                className="text-lg text-slate-600 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Passionate about building scalable infrastructure, automating
                deployments, and creating reliable systems that empower
                development teams to deliver exceptional software.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-indigo-800 text-white font-medium rounded-full hover:from-blue-800 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transform hover:scale-105"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </motion.a>

              <div className="flex gap-3">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border-2 border-blue-200 text-slate-600 rounded-full hover:border-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transform hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  aria-label="GitHub Profile"
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border-2 border-blue-200 text-slate-600 rounded-full hover:border-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transform hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="mailto:mo@example.com"
                  className="inline-flex items-center justify-center w-12 h-12 border-2 border-blue-200 text-slate-600 rounded-full hover:border-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transform hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  aria-label="Send Email"
                >
                  <FiMail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:order-2"
          >
            {/* Enhanced blue background panel */}
            <div className="absolute inset-0 bg-[var(--primary)]/8 rounded-2xl transform rotate-3 scale-105"></div>

            {/* Image container */}
            <div className="relative bg-[var(--card)] rounded-2xl shadow-[0_10px_30px_rgba(30,58,138,0.06)] border border-[var(--primary)]/10 p-8 transform -rotate-1">
              <motion.div
                className="relative aspect-square max-w-sm mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={pic}
                  alt="Mo Mostafa - DevOps Engineer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
