import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export type Publication = {
  id: number | string
  title: string
  authors: string
  description: string
  conference: {
    name: string
    color?: string
  }
  tags: string[]
  url?: string
}

export function PublicationsSection({ publications = [] }: { publications?: Publication[] }) {
  // Default publications if none provided
  const defaultPublications = [
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
  ]

  const displayPublications = publications.length > 0 ? publications : defaultPublications

  if (displayPublications.length === 0) return null

  return (
    <section id="publications" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Publications</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {displayPublications.map((pub) => (
            <Card key={pub.id} className="dark:bg-slate-900 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      <span className="font-medium">Authors:</span> {pub.authors}
                    </p>
                    <p className="mb-4">{pub.description}</p>
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <Badge className={pub.conference.color || "bg-blue-600"}>{pub.conference.name}</Badge>
                      {pub.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-1/4 flex justify-end items-start">
                    {pub.url && (
                      <Button variant="outline" size="sm" asChild className="dark:border-slate-600 dark:text-slate-300">
                        <a href={pub.url} className="flex items-center">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Paper
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
