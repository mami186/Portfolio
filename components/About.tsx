import { Code2, Server, Database, Shield } from 'lucide-react'

const skills = [
  {
    category: 'Frontend',
    icon: <Code2 className="w-6 h-6 text-white" />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6 text-white" />,
    items: ['FastAPI', 'PHP', 'Node.js', 'Python'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Database',
    icon: <Database className="w-6 h-6 text-white" />,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'DevOps',
    icon: <Shield className="w-6 h-6 text-white" />,
    items: ['Docker', 'AWS', 'CI/CD', 'Authentication'],
    color: 'from-orange-500 to-red-500',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[hsl(var(--background))]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--foreground))]">
              About <span className="gradient-text">TitenDev</span>
            </h2>
            <p className="text-xl text-[hsl(var(--foreground))]/70 max-w-3xl mx-auto">
              I specialize in building fast, scalable, performant web applications with modern
              Design.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[hsl(var(--foreground))]">
                Professional Background
              </h3>
              <p className="text-lg text-[hsl(var(--foreground))]/70">
                With over 2 years of experience in full-stack development, I've worked
                with startups and tech companies to build products that scale.
              </p>
              <p className="text-lg text-[hsl(var(--foreground))]/70">
                My expertise spans from designing modern UIs with figma/adobe/canvas to building
                robust web apps and APIs with FastAPI, PHP, and modern JavaScript frameworks.
              </p>
            </div>

            {/* Skills card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative glass-effect rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div
                      key={skill.category}
                      className="p-4 rounded-2xl bg-[hsl(var(--accent))]"
                    >
                      <div
                        className={`inline-flex items-center gap-2 mb-3 p-2 rounded-lg bg-gradient-to-r ${skill.color}`}
                      >
                        {skill.icon}
                        <span className="font-semibold text-white">
                          {skill.category}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 rounded-full text-sm
                              bg-[hsl(var(--background))]
                              text-[hsl(var(--foreground))]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
