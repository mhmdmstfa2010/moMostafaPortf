"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import pic from "../../public/images/me.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 lg:order-1"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                mohamed mostafa
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                DevOps Engineer
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Passionate about building scalable infrastructure, automating
                deployments, and creating reliable systems that empower
                development teams to deliver exceptional software.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-indigo-800 text-white font-medium rounded-full hover:from-blue-800 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 active:scale-95"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border-2 border-blue-200 text-slate-600 rounded-full hover:border-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 active:scale-95"
                  aria-label="GitHub Profile"
                >
                  <FiGithub className="w-5 h-5" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border-2 border-blue-200 text-slate-600 rounded-full hover:border-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 active:scale-95"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>

                <a
                  href="mailto:mo@example.com"
                  className="inline-flex items-center justify-center w-12 h-12 border-2 border-blue-200 text-slate-600 rounded-full hover:border-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 active:scale-95"
                  aria-label="Send Email"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:order-2"
          >
            {/* Simplified background panel */}
            <div className="absolute inset-0 bg-blue-100/50 rounded-2xl transform rotate-2 scale-105"></div>

            {/* Image container */}
            <div className="relative bg-blue-100 rounded-2xl shadow-xl border border-blue-100 p-8 transform -rotate-1">
              <div className="relative aspect-square max-w-sm mx-auto  ">
                <Image
                  src={pic}
                  alt="mohamed mostafa - DevOps Engineer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
