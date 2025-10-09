export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  image: string;
  issueDate: string;
}

export const certificates: Certificate[] = [
  {
    id: "aws-saa",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    image: "/images/aws-saa.png",
    issueDate: "2024-08-10",
  },

  {
    id: "aws-cloud-practitioner",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "/images/aws-cloud-practitioner.png",
    issueDate: "2024-10-19",
  },
  {
    id: "azure-fundamentals",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    image: "/images/azure-fundamentals.png",
    issueDate: "2025-06-30",
  },
];
