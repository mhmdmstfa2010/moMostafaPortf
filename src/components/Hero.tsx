'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
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
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text)] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Mo Mostafa
              </motion.h1>
              <motion.div 
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--primary)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                DevOps Engineer
              </motion.div>
              <motion.p 
                className="text-lg text-[var(--muted)] max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Passionate about building scalable infrastructure, automating deployments, and creating reliable systems that empower development teams to deliver exceptional software.
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--secondary)] text-white font-medium rounded-md hover:bg-[var(--primary)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2"
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
                  className="inline-flex items-center justify-center w-12 h-12 border border-gray-300 text-[var(--muted)] rounded-md hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2"
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
                  className="inline-flex items-center justify-center w-12 h-12 border border-gray-300 text-[var(--muted)] rounded-md hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="mailto:mo@example.com"
                  className="inline-flex items-center justify-center w-12 h-12 border border-gray-300 text-[var(--muted)] rounded-md hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2"
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
            {/* Background accent shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/5 to-[var(--accent)]/5 rounded-2xl transform rotate-3 scale-105"></div>
            
            {/* Image container */}
            <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transform -rotate-1">
              <motion.div
                className="relative aspect-square max-w-sm mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/placeholder-profile.png"
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