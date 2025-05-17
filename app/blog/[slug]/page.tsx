import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

// Mock blog post data (in real apps, fetch from CMS or filesystem)
const blogPosts = [
  {
    slug: "efficient-fine-tuning-llms",
    title: "Efficient Fine-tuning Techniques for Large Language Models",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["LLM", "Fine-tuning", "Efficiency"],
    content: `...`, // You can keep your full HTML content here
  },
]

// Required for static export
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) return <div className="p-10 text-center">Post not found.</div>

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <article className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        <div className="flex items-center gap-4 mb-8 text-slate-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="mb-6">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="mr-2">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold mb-2">Share this article</h3>
              <div className="flex gap-4">
                <button className="text-slate-600 hover:text-slate-900">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </button>
              </div>
            </div>
            <Link href="/blog" className="text-slate-900 font-medium inline-flex items-center hover:underline">
              More articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
