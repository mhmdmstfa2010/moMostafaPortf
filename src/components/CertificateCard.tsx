'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Certificate } from '../data/certificates';

interface CertificateCardProps {
  certificate: Certificate;
  onOpen: (certificateId: string) => void;
  index: number;
}

export default function CertificateCard({ certificate, onOpen, index }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer"
      onClick={() => onOpen(certificate.id)}
    >
      <div className="relative h-40 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 flex items-center justify-center">
        <Image
          src={certificate.image}
          alt={`${certificate.name} certificate`}
          width={120}
          height={120}
          className="w-24 h-24 object-contain"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-[var(--text)] text-sm mb-2 leading-tight">
          {certificate.name}
        </h3>
        
        <div className="space-y-1">
          <p className="text-[var(--secondary)] text-sm font-medium">
            {certificate.issuer}
          </p>
          <p className="text-[var(--muted)] text-xs">
            {new Date(certificate.issueDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long'
            })}
          </p>
        </div>
      </div>
    </motion.div>
  );
}