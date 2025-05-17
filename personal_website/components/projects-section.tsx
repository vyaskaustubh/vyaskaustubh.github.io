import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export type Project = {
  id: number | string
  title: string
  description: string
  image: string
  tags: string[]
  url?: string
}

export function ProjectsSection({ projects = [] }: { projects?: Project[] }) {
  // Default projects if none provided
  const defaultProjects = [
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
      description:
        "An interactive dashboard for visualizing and understanding the inner workings of complex ML models.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["JavaScript", "React", "D3.js"],
      url: "https://github.com",
    },
  ]

  const displayProjects = projects.length > 0 ? projects : defaultProjects

  if (displayProjects.length === 0) return null

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden dark:bg-slate-800 dark:border-slate-700">
              <div className="h-48 relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="dark:bg-slate-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.url && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full dark:border-slate-600 dark:text-slate-300"
                  >
                    <a href={project.url} className="flex items-center justify-center">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
