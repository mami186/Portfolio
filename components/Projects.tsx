import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Game Hub',
    description: 'Clonning the largest game library RAWG , featuring caching ,pagination ..and more .',
    technologies: ['Next.js' ,'React' , 'TypeScript','tailwindcss'],
    demoUrl: 'https://game-hub-olive-gamma.vercel.app/',
    githubUrl: 'https://github.com/mami186/GameHub',
    featured: true,
  },
  {
    title: 'Backend of Todo App',
    description: 'Backend of Todo App using fastapi and python.',
    technologies: ['python', 'fastapi', 'postgresql'],
    githubUrl: 'https://github.com/mami186/Tasks-app',
  },
  {
    title: 'Cloud storage and sharing',
    description: 'A cloud storage app that allows users to store and share files.',
    technologies: ['FastAPI', 'Python', 'Docker','PostgreSQL',' AWS S3 ' ,'html','css','js' ,],
    githubUrl: 'https://github.com/mami186/Cloud-Storage',
  },
  {
    title: 'Fronend for todo app',
    description: 'Fronend for todo app using nextjs and typescript.',
    technologies: ['Next.js', 'TypeScript','tailwindcss'],
    githubUrl: 'https://github.com/mami186/Todo_app_Frontend.git',
  },
    {
    title: 'More comming on the way',
    description: '.........',
    technologies: [],
    githubUrl: 'https://github.com/mami186/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--foreground))]">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-[hsl(var(--foreground)/0.7)] max-w-3xl mx-auto">
            A selection of my recent work showcasing full-stack capabilities and modern
            UI development practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
