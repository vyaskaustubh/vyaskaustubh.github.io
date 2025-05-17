import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export type Photo = {
  id: number | string
  title: string
  description: string
  image: string
  category?: string
}

export function PhotographySection({ photos = [] }: { photos?: Photo[] }) {
  // Default photos if none provided
  const defaultPhotos = [
    {
      id: 1,
      title: "Urban Geometry",
      description: "Architectural patterns in the city, showcasing the symmetry and rhythm of modern buildings.",
      image: "/placeholder.svg?height=400&width=600",
      category: "urban",
    },
    {
      id: 2,
      title: "Natural Landscapes",
      description: "Capturing the serene beauty of mountains and valleys during golden hour.",
      image: "/placeholder.svg?height=400&width=600",
      category: "nature",
    },
    {
      id: 3,
      title: "Abstract Patterns",
      description: "Finding unexpected patterns and textures in everyday objects and environments.",
      image: "/placeholder.svg?height=400&width=600",
      category: "abstract",
    },
    {
      id: 4,
      title: "Street Photography",
      description: "Documenting candid moments of urban life and the stories that unfold in public spaces.",
      image: "/placeholder.svg?height=400&width=600",
      category: "urban",
    },
    {
      id: 5,
      title: "Macro World",
      description: "Exploring the intricate details of small subjects that often go unnoticed by the naked eye.",
      image: "/placeholder.svg?height=400&width=600",
      category: "nature",
    },
    {
      id: 6,
      title: "Light Studies",
      description: "Experimental photography focusing on how light interacts with different surfaces and environments.",
      image: "/placeholder.svg?height=400&width=600",
      category: "abstract",
    },
  ]

  const displayPhotos = photos.length > 0 ? photos : defaultPhotos

  if (displayPhotos.length === 0) return null

  return (
    <section id="photography" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Photography</h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          When I'm not researching AI, I enjoy capturing moments through my lens. Here's a selection of my favorite
          shots.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPhotos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden group dark:bg-slate-800 dark:border-slate-700">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{photo.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{photo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/photography" className="flex items-center">
              <span>View Full Gallery</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
