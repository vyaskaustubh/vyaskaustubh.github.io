import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import type { BlogPost } from "@/components/blog-preview"

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
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
    {
      id: 4,
      title: "Transformer Architectures: Beyond NLP Applications",
      excerpt: "How transformer models are being adapted for computer vision, audio processing, and more.",
      date: "November 5, 2022",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Transformers", "Architecture", "Multi-domain"],
      slug: "transformer-architectures-beyond-nlp",
    },
    {
      id: 5,
      title: "Ethical Considerations in AI Research",
      excerpt: "Exploring the ethical implications of advanced AI systems and how researchers can address them.",
      date: "September 18, 2022",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Ethics", "Responsible AI", "Research"],
      slug: "ethical-considerations-ai-research",
    },
    {
      id: 6,
      title: "Reinforcement Learning from Human Feedback",
      excerpt: "How incorporating human preferences is improving the alignment of AI systems with human values.",
      date: "July 30, 2022",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["RLHF", "Alignment", "Human Feedback"],
      slug: "reinforcement-learning-human-feedback",
    },
  ]

  if (blogPosts.length === 0) {
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
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
          </div>
          <div className="text-center py-12">
            <p className="text-lg text-slate-600 dark:text-slate-400">No blog posts available yet. Check back soon!</p>
          </div>
        </div>
      </main>
    )
  }

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
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Thoughts, research insights, and explorations in the world of artificial intelligence and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden flex flex-col h-full dark:bg-slate-800 dark:border-slate-700"
            >
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="mr-2 mb-2 dark:bg-slate-700">
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
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
