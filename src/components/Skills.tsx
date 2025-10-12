"use client";

import { motion } from "framer-motion";
import {
  FiGitBranch,
  FiCloud,
  FiSettings,
  FiBox,
  FiActivity,
  FiServer,
  FiDatabase,
  FiShield,
  FiMonitor,
  FiCode,
  FiTool,
  FiZap,
} from "react-icons/fi";

const getLevelColor = (
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner"
) => {
  switch (level) {
    case "Expert":
      return "bg-gradient-to-r from-blue-900 to-indigo-800 text-white";
    case "Advanced":
      return "bg-gradient-to-r from-blue-700 to-blue-800 text-white";
    case "Intermediate":
      return "bg-gradient-to-r from-blue-500 to-blue-600 text-white";
    default:
      return "bg-gradient-to-r from-slate-500 to-slate-600 text-white";
  }
};

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner";
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "CI/CD & Version Control",
    skills: [
      { name: "GitHub Actions", icon: <FiGitBranch />, level: "Expert" },
      { name: "Jenkins", icon: <FiTool />, level: "Expert" },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", icon: <FiCloud />, level: "Expert" },
      { name: "Azure", icon: <FiCloud />, level: "Beginner" },
    ],
  },
  {
    title: "Infrastructure as Code",
    skills: [
      { name: "Terraform", icon: <FiSettings />, level: "Expert" },
      { name: "Ansible", icon: <FiTool />, level: "Advanced" },
    ],
  },
  {
    title: "Containers & Orchestration",
    skills: [
      { name: "Docker", icon: <FiBox />, level: "Expert" },
      { name: "Kubernetes", icon: <FiServer />, level: "Expert" },
      { name: "Helm", icon: <FiSettings />, level: "Beginner" },
    ],
  },
  {
    title: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", icon: <FiActivity />, level: "Expert" },
      { name: "Grafana", icon: <FiMonitor />, level: "Expert" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div className="inline-block" transition={{ duration: 0.3 }}>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
          </motion.div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise in modern DevOps practices, cloud
            technologies, and infrastructure automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-200/50 shadow-[0_8px_30px_rgba(30,58,138,0.08)] hover:shadow-[0_12px_40px_rgba(30,58,138,0.12)] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/80 border border-blue-100/50 hover:bg-blue-50/50 hover:border-blue-200/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div
                        className="w-6 h-6 flex items-center justify-center text-blue-700 text-xl"
                        aria-hidden="true"
                      >
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
