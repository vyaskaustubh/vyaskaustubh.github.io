import type { Experience } from "@/components/experience-section"
import type { Publication } from "@/components/publications-section"
import type { Project } from "@/components/projects-section"
import type { Photo } from "@/components/photography-section"
import type { BlogPost } from "@/components/blog-preview"
import type { ContactInfo } from "@/components/contact-section"
import type { HireMeInfo } from "@/components/hire-me-section"

export type SiteData = {
  name: string
  title: string
  summary: string
  about: string[]
  contact: ContactInfo
  hireMeInfo: HireMeInfo
  experiences: Experience[]
  publications: Publication[]
  projects: Project[]
  skills: Array<{ name: string; level: number }>
  photos: Photo[]
  blogPosts: BlogPost[]
}

// This would typically come from a CMS or API
export const siteData: SiteData = {
  // Personal info
  name: "John Doe",
  title: "AI Research Engineer",
  summary: "Pushing the boundaries of artificial intelligence through innovative research and practical applications.",
  about: [
    "I'm an AI Research Engineer with a passion for developing novel machine learning algorithms and applying them to solve real-world problems. My research focuses on natural language processing and multimodal learning, with a particular interest in improving model efficiency and interpretability.",
    "With a Ph.D. in Computer Science from Stanford University and several years of industry experience, I've had the opportunity to work on cutting-edge AI projects that push the boundaries of what's possible with machine learning.",
    "My work has been published in top-tier conferences including ICLR (International Conference on Learning Representations) and EMNLP (Empirical Methods in Natural Language Processing), where I've contributed to advancements in transformer architectures and efficient fine-tuning methods.",
  ],
  
  // Contact info
  contact: {
    email: "contact@example.com",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
  },
  
  // Job seeking info
  hireMeInfo: {
    role: "AI Research Engineer / Scientist",
    location: "Remote or Major Tech Hubs",
    availability: "Immediate",
    commitment: "Full-time",
    isAvailable: true,
  },
  
  // Content sections - these would be populated from a CMS or database
  experiences: [
    {
      id: 1,
      title: "Senior AI Research Engineer",
      company: "TechCorp AI",
      period: "2021 - Present",
      description:
        "Leading research initiatives in natural language processing and multimodal learning. Developing novel algorithms for efficient fine-tuning of large language models.",
      achievements: [
        "Developed a new approach for parameter-efficient fine-tuning, reducing computational requirements by 60%",
        "Led a team of 5 researchers working on multimodal representation learning",
        "Published 2 papers at top-tier conferences (ICLR and EMNLP)",
      ],
    },
    {
      id: 2,
      title: "AI Research Engineer",
      company: "AI Innovations Lab",
      period: "2018 - 2021",
      description:
        "Conducted research on transformer architectures and their applications to various NLP tasks. Collaborated with product teams to deploy research prototypes.",
      achievements: [
        "Designed and implemented novel attention mechanisms for improved model efficiency",
        "Created a framework for evaluating model interpretability across different domains",
        "Mentored junior researchers and interns on best practices in ML research",
      ],
    },
    {
      id: 3,
      title: "Research Assistant",
      company: "Stanford University",
      period: "2015 - 2018",
      description:
        "Conducted research on machine learning algorithms for natural language understanding as part of Ph.D. program.",
      achievements: [
        "Developed new methods for low-resource language processing",
        "Collaborated with faculty and other researchers on interdisciplinary projects",
        "Published 3 papers in peer-reviewed conferences and journals",
      ],
    },
  ],
  publications: [
    {
      id: 1,
      title: "EfficientTune: Parameter-Efficient Fine-tuning for Large Language Models",
      authors: "John Doe, Jane Smith, Robert Johnson",
      description:
        "A novel approach for fine-tuning large language models with significantly reduced parameter counts while maintaining performance comparable to full fine-tuning.",
      conference: {
        name: "ICLR 2023",
        color: "bg-blue-600",
      },
      tags: ["Natural Language Processing", "Efficient Fine-tuning"],
      url: "#",
    },
    {
      id: 2,
      title: "MultiModal-T: A Transformer Architecture for Integrating Multiple Modalities",
      authors: "John Doe, Alice Chen, Michael Brown",
      description:
        "This paper introduces a novel transformer architecture designed specifically for efficient integration and processing of multiple data modalities including text, images, and structured data.",
      conference: {
        name: "EMNLP 2022",
        color: "bg-green-600",
      },
      tags: ["Multimodal Learning", "Transformer Architectures"],
      url: "#",
    },
  ],
  projects: [
    {
      id: 1,
      title: "NLP Efficiency Toolkit",
      description: "An open-source toolkit for optimizing and benchmarking NLP models for efficiency and performance.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Python", "PyTorch", "NLP"],
      url: "https://github.com",
    },
    {
      id: 2,
      title: "MultiModal Research Framework",
      description: "A framework for experimenting with multimodal learning approaches and architectures.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Python", "TensorFlow", "Computer Vision"],
      url: "https://github.com",
    },
    {
      id: 3,
      title: "Model Interpretability Dashboard",
      description: "An interactive dashboard for visualizing and understanding the inner workings of complex ML models.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["JavaScript", "React", "D3.js"],
      url: "https://github.com",
    },
  ],
  skills: [
    { name: "Deep Learning", level: 95 },
    { name: "Natural Language Processing", level: 90 },
    { name: "Computer Vision", level: 85 },
    { name: "PyTorch", level: 90 },
    { name
