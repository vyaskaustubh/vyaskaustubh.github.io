export type Experience = {
  id: number | string
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export function ExperienceSection({ experiences = [] }: { experiences?: Experience[] }) {
  // Default experiences if none provided
  const defaultExperiences = [
    {
      id: 1,
      title: "Senior AI Research Engineer",
      company: "TechCorp AI",
      period: "2021 - Present",
      description:
        "Leading research initiatives in natural language processing and multimodal learning. Developing novel algorithms for efficient fine-tuning of large language models.",
      achievements: [
        "Developed a new approach for parameter-efficient fine-tuning, reducing computational requirements by 60%",
        "Led a team of 5 researchers working on multimodal representation learning",
        "Published 2 papers at top-tier conferences (ICLR and EMNLP)",
      ],
    },
    {
      id: 2,
      title: "AI Research Engineer",
      company: "AI Innovations Lab",
      period: "2018 - 2021",
      description:
        "Conducted research on transformer architectures and their applications to various NLP tasks. Collaborated with product teams to deploy research prototypes.",
      achievements: [
        "Designed and implemented novel attention mechanisms for improved model efficiency",
        "Created a framework for evaluating model interpretability across different domains",
        "Mentored junior researchers and interns on best practices in ML research",
      ],
    },
    {
      id: 3,
      title: "Research Assistant",
      company: "Stanford University",
      period: "2015 - 2018",
      description:
        "Conducted research on machine learning algorithms for natural language understanding as part of Ph.D. program.",
      achievements: [
        "Developed new methods for low-resource language processing",
        "Collaborated with faculty and other researchers on interdisciplinary projects",
        "Published 3 papers in peer-reviewed conferences and journals",
      ],
    },
  ]

  const displayExperiences = experiences.length > 0 ? experiences : defaultExperiences

  if (displayExperiences.length === 0) return null

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {displayExperiences.map((exp) => (
            <div key={exp.id} className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{exp.company}</p>
                <p className="text-slate-500 dark:text-slate-500">{exp.period}</p>
              </div>
              <div className="md:w-2/3">
                <p className="mb-4">{exp.description}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
