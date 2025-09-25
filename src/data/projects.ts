export interface Project {
  id: string;
  title: string;
  image: string;
  tech: string[];
  short: string;
  details: {
    problem: string;
    solution: string;
    results: string;
    architectureImage: string;
    repo: string;
    live: string;
  };
}

export const projects: Project[] = [
  {
    id: "ci-cd-microservices",
    title: "Automated CI/CD for Microservices",
    image: "/images/placeholder-project.png",
    tech: ["GitHub Actions", "Docker", "Kubernetes", "Terraform"],
    short:
      "End-to-end CI/CD pipeline with infrastructure automation for microservices architecture",
    details: {
      problem:
        "Manual deployment processes were causing delays, errors, and inconsistencies across environments, leading to reduced team productivity and increased risk of production issues.",
      solution:
        "Implemented comprehensive CI/CD pipeline with GitHub Actions, containerized deployments with Docker and Kubernetes, infrastructure as code with Terraform, and blue-green deployment strategy for zero-downtime releases.",
      results:
        "Deployment time reduced by 70%, achieved zero-downtime deployments, reduced deployment errors by 95%, and improved developer productivity with automated testing and rollback capabilities.",
      architectureImage: "/images/placeholder-arch.png",
      repo: "#",
      live: "#",
    },
  },
  {
    id: "aws-infrastructure",
    title: "Scalable AWS Infrastructure",
    image: "/images/placeholder-project.png",
    tech: ["AWS", "Terraform", "CloudFormation", "Auto Scaling"],
    short:
      "Multi-tier AWS infrastructure with auto-scaling and disaster recovery",
    details: {
      problem:
        "Legacy on-premises infrastructure couldn't handle traffic spikes and lacked proper disaster recovery, resulting in downtime during peak usage periods.",
      solution:
        "Designed and implemented multi-tier AWS infrastructure using EC2, RDS, ELB, and Auto Scaling Groups. Implemented Infrastructure as Code with Terraform and set up cross-region disaster recovery.",
      results:
        "Achieved 99.9% uptime, reduced infrastructure costs by 40%, improved response time by 60%, and established RTO of 15 minutes with automated disaster recovery.",
      architectureImage: "/images/placeholder-arch.png",
      repo: "#",
      live: "#",
    },
  },
  {
    id: "monitoring-observability",
    title: "Comprehensive Monitoring Stack",
    image: "/images/placeholder-project.png",
    tech: ["Prometheus", "Grafana", "ELK Stack", "Jaeger"],
    short:
      "Full observability platform with metrics, logs, and distributed tracing",
    details: {
      problem:
        "Limited visibility into application performance and system health made troubleshooting difficult and prevented proactive issue resolution.",
      solution:
        "Implemented comprehensive observability stack with Prometheus for metrics, ELK Stack for centralized logging, Grafana for visualization, and Jaeger for distributed tracing across microservices.",
      results:
        "Mean time to resolution (MTTR) reduced by 80%, proactive issue detection increased by 90%, and improved system reliability with comprehensive alerting and monitoring dashboards.",
      architectureImage: "/images/placeholder-arch.png",
      repo: "#",
      live: "#",
    },
  },
  {
    id: "kubernetes-platform",
    title: "Enterprise Kubernetes Platform",
    image: "/images/placeholder-project.png",
    tech: ["Kubernetes", "Helm", "Istio", "ArgoCD"],
    short: "Production-ready Kubernetes platform with service mesh and GitOps",
    details: {
      problem:
        "Development teams needed a self-service platform for deploying applications with proper security, networking, and operational best practices.",
      solution:
        "Built enterprise Kubernetes platform on AWS EKS with Istio service mesh, ArgoCD for GitOps deployments, Helm for package management, and comprehensive RBAC policies.",
      results:
        "Reduced deployment time from hours to minutes, improved security posture with zero-trust networking, enabled self-service for 20+ development teams, and achieved 99.95% platform availability.",
      architectureImage: "/images/placeholder-arch.png",
      repo: "#",
      live: "#",
    },
  },
  {
    id: "security-compliance",
    title: "Security & Compliance Automation",
    image: "/images/placeholder-project.png",
    tech: ["AWS Config", "CloudTrail", "Security Hub", "Terraform"],
    short: "Automated security compliance and governance framework",
    details: {
      problem:
        "Manual security audits and compliance checks were time-consuming and prone to human error, making it difficult to maintain consistent security posture.",
      solution:
        "Implemented automated security compliance framework using AWS Config rules, CloudTrail for audit logging, Security Hub for centralized findings, and automated remediation with Lambda functions.",
      results:
        "Reduced compliance audit time by 75%, automated 90% of security checks, improved security posture with continuous monitoring, and achieved SOC 2 Type II compliance.",
      architectureImage: "/images/placeholder-arch.png",
      repo: "#",
      live: "#",
    },
  },
  {
    id: "backup-disaster-recovery",
    title: "Multi-Cloud Backup & DR",
    image: "/images/placeholder-project.png",
    tech: ["AWS Backup", "Azure", "Veeam", "Terraform"],
    short: "Cross-cloud backup and disaster recovery solution",
    details: {
      problem:
        "Single-cloud dependency posed business continuity risks, and existing backup solutions didn't meet RTO/RPO requirements for critical applications.",
      solution:
        "Designed multi-cloud backup and disaster recovery strategy spanning AWS and Azure, implemented automated backup scheduling, cross-region replication, and disaster recovery testing procedures.",
      results:
        "Achieved RPO of 1 hour and RTO of 30 minutes, reduced backup storage costs by 50% with intelligent tiering, and established business continuity with 99.99% data durability.",
      architectureImage: "/images/placeholder-arch.png",
      repo: "#",
      live: "#",
    },
  },
];
