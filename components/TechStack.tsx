'use client'

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPhp,
  SiDocker,
  SiAmazonwebservices,
  SiFigma,
  SiAdobephotoshop,
  SiCanva,
} from 'react-icons/si'

const frontendTechs = [
  { name: 'React', icon: SiReact, color: 'text-blue-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800 dark:text-gray-100' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
]

const backendTechs = [
  { name: 'FastAPI', icon: SiFastapi, color: 'text-green-500' },
  { name: 'PHP', icon: SiPhp, color: 'text-purple-500' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
  { name: 'AWS', icon: SiAmazonwebservices, color: 'text-orange-500' },

]

const designTools = [
  { name: 'Figma', icon: SiFigma, color: 'text-pink-500' },
  { name: 'Photoshop', icon: SiAdobephotoshop, color: 'text-blue-600' },
  { name: 'Canva', icon: SiCanva, color: 'text-green-500' },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-20 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-6">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--foreground))]">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-xl text-[hsl(var(--foreground))]/70 max-w-3xl mx-auto">
              Technologies I work with daily to build scalable and maintainable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--foreground))]">
                Frontend Expertise
              </h3>
              <div className="space-y-3">
                {frontendTechs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[hsl(var(--accent))] transition-colors group"
                  >
                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                    <span className="font-medium text-[hsl(var(--foreground))]">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend & DevOps */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--foreground))]">
                Backend & DevOps
              </h3>
              <div className="space-y-3">
                {backendTechs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[hsl(var(--accent))] transition-colors group"
                  >
                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                    <span className="font-medium text-[hsl(var(--foreground))]">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Tools */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--foreground))]">
                Design Tools
              </h3>
              <div className="space-y-3">
                {designTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[hsl(var(--accent))] transition-colors group"
                  >
                    <tool.icon className={`w-6 h-6 ${tool.color}`} />
                    <span className="font-medium text-[hsl(var(--foreground))]">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
