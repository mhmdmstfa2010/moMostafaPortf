'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.28 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.98, 
    transition: { duration: 0.18 }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <h2 id="modal-title" className="text-2xl font-bold text-[var(--text)]">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-[var(--muted)] hover:text-[var(--text)] hover:bg-gray-100 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2"
                aria-label="Close modal"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Project Image */}
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-md bg-[var(--primary)]/10 text-[var(--primary)] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                    Problem
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {project.details.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                    Solution
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {project.details.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  Results & Impact
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  {project.details.results}
                </p>
              </div>

              {/* Architecture Image */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                  Architecture Overview
                </h3>
                <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
                  <Image
                    src={project.details.architectureImage}
                    alt={`${project.title} architecture diagram`}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.details.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--text)] text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--text)] focus:ring-offset-2"
                >
                  <FiGithub className="w-4 h-4" />
                  View Repository
                </a>
                
                <a
                  href={project.details.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--secondary)] text-[var(--secondary)] font-medium rounded-md hover:bg-[var(--secondary)] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2"
                >
                  <FiExternalLink className="w-4 h-4" />
                  View Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}