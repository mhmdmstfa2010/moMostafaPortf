"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Certificate } from "../data/certificates";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ scale: 1.05, y: -6 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgba(30,58,138,0.08)] hover:shadow-[0_16px_40px_rgba(30,58,138,0.15)] border border-blue-200/50 overflow-hidden cursor-pointer transition-all duration-300"
    >
      <div className="relative h-40 bg-gradient-to-br from-blue-100/80 to-indigo-100/60 flex items-center justify-center overflow-hidden">
        <Image
          src={certificate.image}
          alt={`${certificate.name} certificate`}
          width={120}
          height={120}
          className="w-full h-auto"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-2 leading-tight">
          {certificate.name}
        </h3>

        <div className="space-y-1">
          <p className="text-blue-700 text-sm font-medium">
            {certificate.issuer}
          </p>
          <p className="text-slate-600 text-xs">
            {new Date(certificate.issueDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
