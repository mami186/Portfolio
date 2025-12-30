import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] ${
        featured
          ? 'glass-effect'
          : 'bg-[hsl(var(--background))] shadow-xl border border-[hsl(var(--foreground)/0.1)]'
      }`}
    >
      <div className="p-6 md:p-8">
        {/* Title & Icon */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-[hsl(var(--foreground))]">{title}</h3>
          <ArrowUpRight className="w-6 h-6 text-[hsl(var(--foreground)/0.5)] group-hover:text-[hsl(var(--foreground))] transition-colors" />
        </div>

        {/* Description */}
        <p className="text-[hsl(var(--foreground)/0.7)] mb-6">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm font-medium bg-[hsl(var(--accent)/0.3)] text-[hsl(var(--foreground))]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--foreground))] dark:bg-[hsl(var(--background))] text-[hsl(var(--background))] dark:text-[hsl(var(--foreground))] rounded-lg hover:opacity-80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:bg-[hsl(var(--accent)/0.3)] dark:hover:bg-[hsl(var(--accent)/0.2)] transition-colors"
            >
              <Github className="w-4 h-4 text-[hsl(var(--foreground))]" />
              <span className="text-[hsl(var(--foreground))]">GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* Subtle Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--foreground)/0)] via-[hsl(var(--foreground)/0.05)] to-[hsl(var(--foreground)/0)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>
  )
}
