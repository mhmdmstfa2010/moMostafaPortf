"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { certificates, Certificate } from "../data/certificates";
import CertificateCard from "./CertificateCard";

export default function CertificatesGrid() {
    useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div className="inline-block" transition={{ duration: 0.3 }}>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
              Certifications
            </h2>
          </motion.div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Professional certifications that validate my expertise in cloud
            platforms, DevOps tools, and modern infrastructure practices
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
