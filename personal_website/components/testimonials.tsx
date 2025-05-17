import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Research Director at AI Innovations",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "One of the most talented researchers I've worked with. Their ability to quickly grasp complex concepts and translate them into practical implementations is remarkable.",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Professor of Computer Science, Stanford University",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "An exceptional researcher with a rare combination of theoretical depth and practical skills. Their contributions to our lab's research were invaluable.",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Lead AI Scientist, TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "A brilliant mind with an incredible work ethic. They consistently delivered high-quality research and were an inspiration to the entire team.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">What Colleagues Say</h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          Feedback from researchers and professionals I've collaborated with throughout my career.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg">
              <CardContent className="p-8 relative">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-slate-200" />
                <div className="mb-6 pt-6">
                  <p className="text-slate-700 italic relative z-10">{testimonial.quote}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
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
