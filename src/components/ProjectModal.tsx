"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "../data/projects";

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
    transition: { duration: 0.28 },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.18 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
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
            className="relative bg-white/95 backdrop-blur-lg rounded-3xl shadow-[0_32px_64px_rgba(30,58,138,0.2)] max-w-5xl w-full max-h-[90vh] overflow-hidden border border-blue-200/50"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-blue-200/30 px-8 py-6 flex items-center justify-between z-10">
              <div>
                <h2
                  id="modal-title"
                  className="text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent"
                >
                  {project.title}
                </h2>
                <p className="text-slate-600 text-sm mt-1">{project.short}</p>
              </div>
              <motion.button
                onClick={onClose}
                className="p-3 text-slate-500 hover:text-slate-700 hover:bg-blue-50 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close modal"
              >
                <FiX className="w-6 h-6 cursor-pointer" />
              </motion.button>
            </div>

            <div className="max-h-[calc(90vh-120px)] overflow-y-auto">
              <div className="p-8">
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-10"></div>
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + index * 0.05,
                        }}
                        className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 font-medium border border-blue-200/50 hover:shadow-md hover:scale-105 transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/30 shadow-lg">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                      Problem
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {project.details.problem}
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/30 shadow-lg">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                      Solution
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {project.details.solution}
                    </p>
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-8"
                >
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                      Results & Impact
                    </h3>
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {project.details.results}
                    </p>
                  </div>
                </motion.div>

                {/* Architecture Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                    Architecture Overview
                  </h3>
                  <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden bg-slate-50 border-2 border-blue-200/50 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent z-10"></div>
                    <Image
                      src={project.details.architectureImage}
                      alt={`${project.title} architecture diagram`}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>

                {/* Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    href={project.details.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-medium rounded-full hover:from-slate-700 hover:to-slate-600 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500/40 focus:ring-offset-2 transform hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiGithub className="w-5 h-5" />
                    View Repository
                  </motion.a>

                  <motion.a
                    href={project.details.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full hover:from-blue-500 hover:to-indigo-500 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2 transform hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiExternalLink className="w-5 h-5" />
                    View Live Demo
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
