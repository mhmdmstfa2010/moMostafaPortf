export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null; // null for current position
  description: string;
  achievements: string[];
  technologies: string[];
  type: "full-time" | "part-time" | "contract" | "internship";
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    position: "Senior DevOps Engineer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    startDate: "2022-01",
    endDate: null, // Current position
    description:
      "Leading DevOps initiatives for cloud infrastructure and CI/CD pipeline optimization.",
    achievements: [
      "Reduced deployment time by 80% through automated CI/CD pipelines",
      "Managed multi-cloud infrastructure serving 1M+ users",
      "Implemented monitoring solutions reducing downtime by 95%",
      "Led a team of 5 DevOps engineers",
    ],
    technologies: [
      "AWS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Jenkins",
      "Prometheus",
      "Grafana",
    ],
    type: "full-time",
  },
  {
    id: "exp-2",
    position: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Cairo, Egypt",
    startDate: "2020-03",
    endDate: "2021-12",
    description:
      "Focused on containerization and infrastructure automation for enterprise clients.",
    achievements: [
      "Migrated 50+ applications to containerized environments",
      "Implemented Infrastructure as Code reducing provisioning time by 70%",
      "Set up comprehensive monitoring and alerting systems",
      "Improved system reliability to 99.9% uptime",
    ],
    technologies: [
      "Docker",
      "Kubernetes",
      "Azure",
      "Ansible",
      "GitLab CI",
      "ELK Stack",
      "Python",
    ],
    type: "full-time",
  },
  {
    id: "exp-3",
    position: "Junior DevOps Engineer",
    company: "StartupHub",
    location: "Alexandria, Egypt",
    startDate: "2018-06",
    endDate: "2020-02",
    description:
      "Started my DevOps journey working on cloud migration and automation projects.",
    achievements: [
      "Automated deployment processes for 20+ microservices",
      "Migrated legacy applications to AWS cloud",
      "Implemented backup and disaster recovery solutions",
      "Contributed to reducing infrastructure costs by 40%",
    ],
    technologies: ["AWS", "Linux", "Bash", "Git", "MySQL", "Apache", "Nginx"],
    type: "full-time",
  },
];
