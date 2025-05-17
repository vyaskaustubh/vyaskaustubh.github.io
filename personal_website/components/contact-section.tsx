import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export type ContactInfo = {
  email: string
  linkedin: string
  github: string
}

export function ContactSection({ info }: { info?: ContactInfo }) {
  // Default contact info if none provided
  const defaultInfo = {
    email: "contact@example.com",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
  }

  const displayInfo = info || defaultInfo

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-lg mb-8">
            I'm always open to discussing research collaborations, job opportunities, or just chatting about AI and
            machine learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-slate-800 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Mail className="h-10 w-10 mb-4 text-slate-300" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href={`mailto:${displayInfo.email}`} className="text-slate-300 hover:text-white transition-colors">
                  {displayInfo.email}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Linkedin className="h-10 w-10 mb-4 text-slate-300" />
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <a
                  href={`https://${displayInfo.linkedin}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {displayInfo.linkedin}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Github className="h-10 w-10 mb-4 text-slate-300" />
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <a href={`https://${displayInfo.github}`} className="text-slate-300 hover:text-white transition-colors">
                  {displayInfo.github}
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-slate-400 mb-2">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
