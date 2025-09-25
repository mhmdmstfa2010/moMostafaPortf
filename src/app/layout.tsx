import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mo Mostafa - DevOps Engineer & Infrastructure Specialist",
  description: "Professional DevOps Engineer specializing in cloud infrastructure, automation, and scalable systems. Expert in AWS, Kubernetes, Terraform, and modern DevOps practices.",
  keywords: "DevOps, Cloud Infrastructure, AWS, Kubernetes, Terraform, CI/CD, Automation, Infrastructure as Code",
  authors: [{ name: "Mo Mostafa" }],
  openGraph: {
    title: "Mo Mostafa - DevOps Engineer",
    description: "Professional DevOps Engineer specializing in cloud infrastructure, automation, and scalable systems.",
    url: "https://mo-mostafa-portfolio.vercel.app",
    siteName: "Mo Mostafa Portfolio",
    images: [
      {
        url: "/images/placeholder-profile.png",
        width: 1200,
        height: 630,
        alt: "Mo Mostafa - DevOps Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mo Mostafa - DevOps Engineer",
    description: "Professional DevOps Engineer specializing in cloud infrastructure, automation, and scalable systems.",
    images: ["/images/placeholder-profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
