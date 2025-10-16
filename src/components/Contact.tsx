"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailCopied, setEmailCopied] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just create a mailto link with the form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:mhmdmstfa710@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mhmdmstfa710@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div className="inline-block" transition={{ duration: 0.3 }}>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
              Let&apos;s Work Together
            </h2>
          </motion.div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Interested in discussing DevOps opportunities, infrastructure
            challenges, or collaboration? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Get in Touch
              </h3>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-blue-200/50 shadow-[0_8px_30px_rgba(30,58,138,0.08)]">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <FiMail className="w-5 h-5 text-blue-700" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-800">Email</p>
                  <p className="text-slate-600 text-sm">
                    mhmdmstfa710@gmail.com
                  </p>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2"
                  aria-label="Copy email address"
                >
                  {emailCopied ? (
                    <FiCheck className="w-4 h-4 text-green-600" />
                  ) : (
                    <FiCopy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">
                Connect with Me
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/mhmdmstfa2010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-white/90 border-2 border-blue-200 text-slate-600 rounded-full hover:border-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2 transform hover:scale-110"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub Profile"
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/mohamed-moustafa20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-white/90 border-2 border-blue-200 text-slate-600 rounded-full hover:border-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2 transform hover:scale-110"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Toast notification */}
            {emailCopied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
              >
                Email copied to clipboard!
              </motion.div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--text)] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[var(--primary)]/10 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/40 focus:border-transparent transition-colors duration-200 text-[var(--text)] placeholder-[var(--muted)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--text)] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[var(--primary)]/10 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/40 focus:border-transparent transition-colors duration-200 text-[var(--text)] placeholder-[var(--muted)]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--text)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[var(--primary)]/10 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/40 focus:border-transparent transition-colors duration-200 text-[var(--text)] placeholder-[var(--muted)] resize-vertical"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[var(--secondary)] text-white font-medium py-3 px-6 rounded-lg hover:bg-[var(--primary)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/40 focus:ring-offset-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
