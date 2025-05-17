import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export type BlogPost = {
  id: number | string
  title: string
  excerpt: string
  date: string
  image: string
  tags: string[]
  slug: string
}

export function BlogPreview({ posts = [] }: { posts?: BlogPost[] }) {
  // Default blog posts if none provided
  const defaultPosts = [
    {
      id: 1,
      title: "Efficient Fine-tuning Techniques for Large Language Models",
      excerpt:
        "Exploring methods to fine-tune LLMs with minimal computational resources while maintaining performance.",
      date: "May 15, 2023",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["LLM", "Fine-tuning", "Efficiency"],
      slug: "efficient-fine-tuning-techniques",
    },
    {
      id: 2,
      title: "The Future of Multimodal AI Systems",
      excerpt: "How combining different data modalities is leading to more robust and capable AI systems.",
      date: "March 22, 2023",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Multimodal", "Vision-Language", "Research"],
      slug: "future-of-multimodal-ai",
    },
    {
      id: 3,
      title: "Interpretability in Deep Learning: Current Approaches",
      excerpt: "A survey of techniques for understanding and explaining the decisions made by deep neural networks.",
      date: "January 10, 2023",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Interpretability", "XAI", "Neural Networks"],
      slug: "interpretability-deep-learning",
    },
  ]

  const displayPosts = posts.length > 0 ? posts : defaultPosts

  if (displayPosts.length === 0) return null

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Latest Articles</h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          I write about AI research, machine learning techniques, and industry trends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden flex flex-col h-full dark:bg-slate-900 dark:border-slate-700"
            >
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2 dark:bg-slate-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{post.date}</p>
                <p className="text-slate-700 dark:text-slate-300 mb-4 flex-grow">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-slate-900 dark:text-white font-medium inline-flex items-center hover:underline mt-auto"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-slate-900 dark:text-white font-semibold hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            View all articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
