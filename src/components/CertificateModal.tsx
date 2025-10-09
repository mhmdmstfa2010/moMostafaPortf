"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import { Certificate } from "@/data/certificates";

interface CertificateModalProps {
  isOpen: boolean;
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({
  isOpen,
  certificate,
  onClose,
}: CertificateModalProps) {
  if (!certificate) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-[0_32px_64px_rgba(30,58,138,0.2)] border border-blue-200/50 w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced Header */}
            <div
              className="sticky top-0  backdrop-blur-md border-b border-blue-200/30 px-8 py-6 flex items-center justify-between z-10"
              style={{ background: "#eaf2ff" }}
            >
              <div>
                <h3
                  id="certificate-modal-title"
                  className="text-2xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent"
                >
                  {certificate.name}
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  {certificate.issuer}
                </p>
              </div>
              <motion.button
                onClick={onClose}
                className="p-3 text-slate-500 hover:text-slate-700 hover:bg-white rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close certificate modal"
              >
                <FiX className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="px-8 pb-8">
                {/* Certificate Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative group mb-8"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                    <div className="relative h-64 sm:h-80 flex items-center justify-center">
                      <Image
                        src={certificate.image}
                        alt={`${certificate.name} certificate`}
                        width={500}
                        height={400}
                        className="max-w-full max-h-full object-contain rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Certificate Details Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl border border-blue-100/50"
                >
                  <div className="text-center space-y-4">
                    <div>
                      <h4 className="text-xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-2">
                        {certificate.name}
                      </h4>
                      <p className="text-slate-700 font-semibold text-lg">
                        {certificate.issuer}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 rounded-full border border-blue-200/30">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p className="text-slate-600 text-sm font-medium">
                        Issued{" "}
                        {new Date(certificate.issueDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
