"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (projectId: string) => void;
  index: number;
}

export default function ProjectCard({
  project,
  onOpen,
  index,
}: ProjectCardProps) {
  return (
    <div className={`relative ${index % 2 === 0 ? "translate-y-3" : ""}`}>
      {/* Floating accent panel */}
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-900/15 via-blue-800/10 to-indigo-800/15 -z-10 accent-rot"></div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.03, y: -8 }}
        className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-blue-200/50 shadow-[0_16px_40px_rgba(30,58,138,0.12)] hover:shadow-[0_24px_60px_rgba(30,58,138,0.18)] overflow-hidden cursor-pointer group transition-all duration-500"
        onClick={() => onOpen(project.id)}
      >
        <div className="relative h-44 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-blue-800/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-800/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-slate-800 leading-tight group-hover:text-blue-900 transition-colors duration-300">
              {project.title}
            </h3>
            <FiExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-700 flex-shrink-0 ml-2 transition-colors duration-300" />
          </div>
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
            {project.short}
          </p>{" "}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 font-medium border border-blue-200/50"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 font-semibold border border-slate-200/50">
                  +{project.tech.length - 3} more
                </span>
              )}
            </div>

            <button
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900 to-indigo-800 text-white text-sm font-medium hover:from-blue-800 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transform hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                onOpen(project.id);
              }}
            >
              Show details
            </button>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
