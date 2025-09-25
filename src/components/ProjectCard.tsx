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
      <div className="absolute -inset-2 rounded-3xl bg-primary/8 -z-10 accent-rot"></div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.03, y: -6 }}
        className="relative bg-card rounded-2xl border border-primary/10 shadow-[0_10px_30px_rgba(30,58,138,0.06)] overflow-hidden cursor-pointer group"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-text leading-tight">
              {project.title}
            </h3>
            <FiExternalLink className="w-5 h-5 text-muted flex-shrink-0 ml-2" />
          </div>

          <p className="text-muted text-sm mb-4 leading-relaxed">
            {project.short}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-xs px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold">
                  +{project.tech.length - 3} more
                </span>
              )}
            </div>

            <button
              className="ml-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-white text-sm font-medium hover:bg-secondary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
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
