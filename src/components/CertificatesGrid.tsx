'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import { certificates, Certificate } from '../data/certificates';
import CertificateCard from './CertificateCard';

export default function CertificatesGrid() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenLightbox = (certificateId: string) => {
    const certificate = certificates.find(c => c.id === certificateId);
    if (certificate) {
      setSelectedCertificate(certificate);
      setIsLightboxOpen(true);
    }
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-4">
            Certifications
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto">
            Professional certifications that validate my expertise in cloud platforms, DevOps tools, and modern infrastructure practices
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onOpen={handleOpenLightbox}
              index={index}
            />
          ))}
        </div>

        {/* Certificate Lightbox */}
        <AnimatePresence>
          {isLightboxOpen && selectedCertificate && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={handleCloseLightbox}
              />

              {/* Lightbox */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                role="dialog"
                aria-modal="true"
                aria-labelledby="lightbox-title"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <h3 id="lightbox-title" className="text-lg font-semibold text-[var(--text)]">
                    {selectedCertificate.name}
                  </h3>
                  <button
                    onClick={handleCloseLightbox}
                    className="p-2 text-[var(--muted)] hover:text-[var(--text)] hover:bg-gray-100 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2"
                    aria-label="Close lightbox"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Certificate Image */}
                <div className="p-6">
                  <div className="relative h-64 sm:h-80 flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 rounded-xl mb-4">
                    <Image
                      src={selectedCertificate.image}
                      alt={`${selectedCertificate.name} certificate`}
                      width={400}
                      height={300}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Certificate Details */}
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-[var(--text)] mb-2">
                      {selectedCertificate.name}
                    </h4>
                    <p className="text-[var(--secondary)] font-medium mb-1">
                      {selectedCertificate.issuer}
                    </p>
                    <p className="text-[var(--muted)] text-sm">
                      Issued {new Date(selectedCertificate.issueDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}