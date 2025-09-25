"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiBriefcase, FiAward } from "react-icons/fi";
import { experiences, type Experience } from "../data/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "full-time":
        return "bg-green-100 text-green-800";
      case "part-time":
        return "bg-blue-100 text-blue-800";
      case "contract":
        return "bg-purple-100 text-purple-800";
      case "internship":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-200/50 shadow-[0_8px_30px_rgba(30,58,138,0.08)] hover:shadow-[0_16px_40px_rgba(30,58,138,0.15)] p-6 transition-all duration-300"
    >
      {/* Timeline connector */}
      <div className="absolute -left-4 top-8 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
        <FiBriefcase className="w-3 h-3 text-white" />
      </div>

      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">
              {experience.position}
            </h3>
            <p className="text-lg font-semibold text-blue-700">
              {experience.company}
            </p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
              experience.type
            )}`}
          >
            {experience.type.replace("-", " ").toUpperCase()}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-slate-600 text-sm">
          <div className="flex items-center gap-1">
            <FiCalendar className="w-4 h-4" />
            <span>
              {formatDate(experience.startDate)} -{" "}
              {experience.endDate ? formatDate(experience.endDate) : "Present"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FiMapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed mb-4">
        {experience.description}
      </p>

      {/* Achievements */}
      <div className="mb-4">
        <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-2">
          <FiAward className="w-4 h-4 text-blue-600" />
          Key Achievements
        </h4>
        <ul className="space-y-1">
          {experience.achievements.map((achievement, idx) => (
            <li
              key={idx}
              className="text-sm text-slate-600 flex items-start gap-2"
            >
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-sm font-semibold text-slate-800 mb-2">
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block"
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
              Work Experience
            </h2>
          </motion.div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey in DevOps and infrastructure engineering,
            building scalable systems and leading automation initiatives
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-8 ml-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
