export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  image: string;
  issueDate: string;
}

export const certificates: Certificate[] = [
  {
    id: "aws-sa",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    image: "/images/placeholder-cert.png",
    issueDate: "2024-06-01",
  },
  {
    id: "aws-devops",
    name: "AWS Certified DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    image: "/images/placeholder-cert.png",
    issueDate: "2024-03-15",
  },
  {
    id: "cka",
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    image: "/images/placeholder-cert.png",
    issueDate: "2024-01-20",
  },
  {
    id: "ckad",
    name: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation",
    image: "/images/placeholder-cert.png",
    issueDate: "2023-11-10",
  },
  {
    id: "terraform",
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    image: "/images/placeholder-cert.png",
    issueDate: "2023-09-05",
  },
  {
    id: "azure-admin",
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    image: "/images/placeholder-cert.png",
    issueDate: "2023-07-12",
  },
  {
    id: "docker",
    name: "Docker Certified Associate (DCA)",
    issuer: "Docker",
    image: "/images/placeholder-cert.png",
    issueDate: "2023-05-18",
  },
  {
    id: "jenkins",
    name: "Jenkins Engineer Certification",
    issuer: "CloudBees",
    image: "/images/placeholder-cert.png",
    issueDate: "2023-03-22",
  },
];
