import { Badge } from "@/components/ui/badge"

export function SkillsSection({ skills = [] }: { skills?: Array<{ name: string; level: number }> }) {
  // Default skills if none provided
  const defaultSkills = [
    { name: "Deep Learning", level: 95 },
    { name: "Natural Language Processing", level: 90 },
    { name: "Computer Vision", level: 85 },
    { name: "PyTorch", level: 90 },
    { name: "TensorFlow", level: 85 },
    { name: "Python", level: 95 },
    { name: "Reinforcement Learning", level: 80 },
    { name: "Generative Models", level: 90 },
    { name: "JAX", level: 80 },
    { name: "Experimental Design", level: 90 },
  ]

  const displaySkills = skills.length > 0 ? skills : defaultSkills

  if (displaySkills.length === 0) return null

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {displaySkills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <Badge variant="outline" className="dark:border-slate-600">
                  {skill.level}%
                </Badge>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                <div
                  className="bg-slate-700 dark:bg-slate-300 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
