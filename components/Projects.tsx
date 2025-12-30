import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Stripe'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/ecommerce',
    featured: true,
  },
  {
    title: 'Task Management SaaS',
    description: 'Collaborative project management tool with real-time updates, file sharing, and team analytics.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS'],
    demoUrl: 'https://taskdemo.example.com',
    githubUrl: 'https://github.com/username/taskmanager',
  },
  {
    title: 'API Gateway Service',
    description: 'High-performance API gateway with rate limiting, authentication, and request logging.',
    technologies: ['FastAPI', 'Python', 'Redis', 'Docker', 'JWT'],
    githubUrl: 'https://github.com/username/apigateway',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Dashboard for monitoring application performance with real-time data visualization.',
    technologies: ['Next.js', 'TypeScript', 'D3.js', 'WebSocket', 'PostgreSQL'],
    demoUrl: 'https://analyticsdemo.example.com',
    githubUrl: 'https://github.com/username/analytics',
  },
  {
    title: 'Content Management System',
    description: 'Modern headless CMS with custom content types, role-based access, and API-first design.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'GraphQL', 'Docker'],
    githubUrl: 'https://github.com/username/cms',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and transaction monitoring.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    demoUrl: 'https://bankdemo.example.com',
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
