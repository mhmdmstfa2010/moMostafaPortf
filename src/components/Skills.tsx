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

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: "Expert" | "Advanced" | "Intermediate";
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
      { name: "GitLab CI", icon: <FiGitBranch />, level: "Advanced" },
      { name: "Azure DevOps", icon: <FiCode />, level: "Advanced" },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", icon: <FiCloud />, level: "Expert" },
      { name: "Azure", icon: <FiCloud />, level: "Advanced" },
      { name: "Google Cloud", icon: <FiCloud />, level: "Intermediate" },
    ],
  },
  {
    title: "Infrastructure as Code",
    skills: [
      { name: "Terraform", icon: <FiSettings />, level: "Expert" },
      { name: "CloudFormation", icon: <FiSettings />, level: "Advanced" },
      { name: "Ansible", icon: <FiTool />, level: "Advanced" },
      { name: "Pulumi", icon: <FiCode />, level: "Intermediate" },
    ],
  },
  {
    title: "Containers & Orchestration",
    skills: [
      { name: "Docker", icon: <FiBox />, level: "Expert" },
      { name: "Kubernetes", icon: <FiServer />, level: "Expert" },
      { name: "Helm", icon: <FiSettings />, level: "Advanced" },
      { name: "Istio", icon: <FiShield />, level: "Advanced" },
    ],
  },
  {
    title: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", icon: <FiActivity />, level: "Expert" },
      { name: "Grafana", icon: <FiMonitor />, level: "Expert" },
      { name: "ELK Stack", icon: <FiDatabase />, level: "Advanced" },
      { name: "Jaeger", icon: <FiZap />, level: "Advanced" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-100 text-green-800";
    case "Advanced":
      return "bg-blue-100 text-blue-800";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
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
              className="p-4 bg-card rounded-xl border border-primary/8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-text mb-6">
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center gap-3 p-2 rounded-md bg-white/60 border border-gray-100"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div
                        className="w-6 h-6 flex items-center justify-center text-secondary text-xl"
                        aria-hidden="true"
                      >
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-text">
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
