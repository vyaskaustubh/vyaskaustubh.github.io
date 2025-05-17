import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Briefcase } from "lucide-react"

export type HireMeInfo = {
  role: string
  location: string
  availability: string
  commitment: string
  isAvailable: boolean
}

export function HireMeSection({ info }: { info?: HireMeInfo }) {
  // Default info if none provided
  const defaultInfo = {
    role: "AI Research Engineer / Scientist",
    location: "Remote or Major Tech Hubs",
    availability: "Immediate",
    commitment: "Full-time",
    isAvailable: true,
  }

  const displayInfo = info || defaultInfo

  if (!displayInfo.isAvailable) return null

  return (
    <section id="hire-me" className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge className="bg-green-500 mb-4">Available for Hire</Badge>
          <h2 className="text-3xl font-bold mb-4">Looking for New Opportunities</h2>
          <p className="text-lg text-slate-300 mb-8">
            I'm currently exploring new research positions where I can apply my expertise in AI and machine learning to
            solve challenging problems.
          </p>
          <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="bg-slate-800 border-none">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Briefcase className="h-10 w-10 mb-4 text-green-400" />
              <h3 className="text-lg font-semibold mb-2">Role</h3>
              <p className="text-slate-300">{displayInfo.role}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-none">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <MapPin className="h-10 w-10 mb-4 text-green-400" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-slate-300">{displayInfo.location}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-none">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Calendar className="h-10 w-10 mb-4 text-green-400" />
              <h3 className="text-lg font-semibold mb-2">Availability</h3>
              <p className="text-slate-300">{displayInfo.availability}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-none">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Clock className="h-10 w-10 mb-4 text-green-400" />
              <h3 className="text-lg font-semibold mb-2">Commitment</h3>
              <p className="text-slate-300">{displayInfo.commitment}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
