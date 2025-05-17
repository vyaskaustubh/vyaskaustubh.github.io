"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Photo } from "@/components/photography-section"

export default function PhotographyPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "urban", name: "Urban" },
    { id: "nature", name: "Nature" },
    { id: "abstract", name: "Abstract" },
    { id: "portrait", name: "Portrait" },
    { id: "travel", name: "Travel" },
  ]

  const photos: Photo[] = [
    {
      id: 1,
      title: "City Reflections",
      description: "Modern architecture reflected in the glass facades of downtown buildings after rain.",
      category: "urban",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Mountain Vista",
      description: "Panoramic view of the mountain range at sunrise, with fog filling the valleys below.",
      category: "nature",
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 3,
      title: "Light Patterns",
      description: "Abstract patterns created by light passing through a prism onto a textured surface.",
      category: "abstract",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      id: 4,
      title: "Street Corner",
      description: "A quiet moment captured at a busy intersection during the blue hour.",
      category: "urban",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Forest Path",
      description: "Sunlight filtering through ancient trees along a moss-covered forest trail.",
      category: "nature",
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 6,
      title: "Color Study",
      description: "Experimental photography exploring the interaction between complementary colors.",
      category: "abstract",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      id: 7,
      title: "Urban Geometry",
      description: "Striking geometric patterns found in contemporary urban architecture.",
      category: "urban",
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 8,
      title: "Ocean Waves",
      description: "Long exposure capture of ocean waves creating a dreamy, ethereal seascape.",
      category: "nature",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 9,
      title: "Texture Study",
      description: "Close-up exploration of natural and man-made textures found in everyday objects.",
      category: "abstract",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      id: 10,
      title: "City Skyline",
      description: "Panoramic view of the city skyline at dusk as lights begin to illuminate the buildings.",
      category: "urban",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 11,
      title: "Desert Landscape",
      description: "The stark beauty of sand dunes shaped by wind and time in the golden afternoon light.",
      category: "nature",
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 12,
      title: "Shadow Play",
      description: "Abstract composition created by shadows cast through architectural elements.",
      category: "abstract",
      image: "/placeholder.svg?height=600&width=600",
    },
  ]

  const filteredPhotos = activeCategory === "all" ? photos : photos.filter((photo) => photo.category === activeCategory)

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Photography</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            A collection of moments captured through my lens. Photography allows me to explore creativity outside the
            realm of AI research.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          <button
            className={`px-4 py-2 rounded-full ${
              activeCategory === "all"
                ? "bg-slate-900 dark:bg-slate-700 text-white"
                : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-300"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category.id
                  ? "bg-slate-900 dark:bg-slate-700 text-white"
                  : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-300"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              style={{
                height: photo.category === "abstract" ? "300px" : photo.category === "nature" ? "400px" : "350px",
              }}
            >
              <Image
                src={photo.image || "/placeholder.svg"}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
                  <p className="text-slate-300 text-sm mt-1">{photo.description}</p>
                  <p className="text-slate-400 text-xs mt-2 capitalize">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
