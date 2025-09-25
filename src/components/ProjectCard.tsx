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
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className={`rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-white cursor-pointer transform ${
        index % 2 === 1 ? "translate-y-3" : ""
      }`}
      onClick={() => onOpen(project.id)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-[var(--text)] leading-tight">
            {project.title}
          </h3>
          <FiExternalLink className="w-5 h-5 text-[var(--muted)] flex-shrink-0 ml-2" />
        </div>

        <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
          {project.short}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-md bg-[var(--primary)]/5 text-[var(--primary)] font-medium"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-[var(--muted)]">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>

          <button
            className="ml-3 inline-flex items-center px-3 py-1 rounded-md bg-[var(--secondary)] text-white text-sm font-medium hover:bg-[var(--primary)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2"
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
  );
}
