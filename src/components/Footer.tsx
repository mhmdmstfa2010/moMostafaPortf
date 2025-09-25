"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                  MM
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                    Mo Mostafa
                  </h3>
                  <p className="text-blue-300/80 text-sm">
                    DevOps Engineer & Infrastructure Specialist
                  </p>
                </div>
              </div>
              <p className="text-blue-200/70 leading-relaxed max-w-md">
                Passionate about building scalable infrastructure and automating
                deployments. Creating reliable systems that empower development
                teams to deliver exceptional software.
              </p>
            </motion.div>

            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-blue-200">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["Skills", "Projects", "Certificates", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-blue-300/70 hover:text-blue-200 transition-colors duration-200 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-blue-200">Connect</h4>
              <div className="flex flex-col space-y-3">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-300/70 hover:text-blue-200 transition-all duration-300 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <FiGithub className="w-4 h-4" />
                  </div>
                  <span className="text-sm">GitHub</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-300/70 hover:text-blue-200 transition-all duration-300 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <FiLinkedin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="mailto:mo@example.com"
                  className="flex items-center gap-3 text-blue-300/70 hover:text-blue-200 transition-all duration-300 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Email</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-blue-300/60 text-sm"
              >
                © {currentYear} Mo Mostafa. All rights reserved.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-2 text-blue-300/60 text-sm"
              >
                <span>Built with</span>
                <div className="flex items-center gap-1">
                  {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map(
                    (tech, index) => (
                      <span key={tech} className="flex items-center">
                        <span className="text-blue-200 font-medium">
                          {tech}
                        </span>
                        {index < 3 && <span className="mx-1">•</span>}
                      </span>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
