'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-[hsl(var(--foreground))]" />
            <span className="text-sm font-medium text-[hsl(var(--foreground))]">Full-Stack Developer</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[hsl(var(--foreground))]">
            <span className="block">Mohammed Elias</span>
            <span className="gradient-text">TitenDev</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-[hsl(var(--foreground)/0.7)] mb-8 max-w-2xl mx-auto">
            Full-Stack Developer Web Developer with expertise in {' '}
            <span className="font-semibold text-[hsl(var(--foreground))]">React</span>,{' '}
            <span className="font-semibold text-[hsl(var(--foreground))]">Next.js</span>,{' '}
            <span className="font-semibold text-[hsl(var(--foreground))]">FastAPI</span>, and{' '}
            <span className="font-semibold text-[hsl(var(--foreground))]">PHP</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--foreground))] dark:bg-[hsl(var(--background))] text-[hsl(var(--background))] dark:text-[hsl(var(--foreground))] rounded-full font-semibold hover:opacity-80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-effect rounded-full font-semibold hover:scale-105 transition-all duration-300 text-[hsl(var(--foreground))]"
            >
              Contact Me
            </a>
          </div>

          {/* Animated Background Elements */}
          {mounted && (
            <>
              <div className="absolute top-1/4 left-10 w-72 h-72 bg-[hsl(var(--accent)/0.3)] rounded-full blur-3xl opacity-50" style={{ willChange: 'opacity' }} />
              <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[hsl(var(--accent)/0.3)] rounded-full blur-3xl opacity-50" style={{ willChange: 'opacity' }} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
