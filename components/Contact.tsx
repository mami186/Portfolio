'use client'

import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'mamielias188@gmail.com',
      link: 'mailto:mamielias188@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+251989796229',
      link: 'tel:+251989796229',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Ethiopia , A.A',
      link: '#',
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 w-full bg-[hsl(var(--background))]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-full mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--foreground))]">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-[hsl(var(--foreground))]/70 max-w-3xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--foreground))]">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="
                        flex items-start gap-4 p-4 rounded-lg
                        transition-colors group
                        hover:bg-[hsl(var(--accent))]
                      "
                    >
                      <div
                        className="
                          w-12 h-12 rounded-lg
                          bg-[hsl(var(--accent))]
                          flex items-center justify-center
                          text-[hsl(var(--foreground))]
                          transition-colors
                          group-hover:bg-[hsl(var(--accent))]/80
                        "
                      >
                        {info.icon}
                      </div>

                      <div>
                        <h4 className="font-semibold mb-1 text-[hsl(var(--foreground))]">
                          {info.title}
                        </h4>
                        <p className="text-[hsl(var(--foreground))]/70">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--foreground))]">
                  Let&apos;s Connect
                </h3>
                <p className="text-[hsl(var(--foreground))]/70 mb-6">
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>

                <div className="flex gap-4">
                  {[
                    { href: 'https://github.com/mami186', label: 'GitHub', icon: GitHubIcon },
                    { href: 'https://www.linkedin.com/in/mohammed-elias-877169365', label: 'LinkedIn', icon: LinkedInIcon },
                    { href: 'https://x.com/gmt186', label: 'Twitter', icon: TwitterIcon },
                    { href: 'https://t.me/mindyourownbizness186', label: 'Telegram', icon: Send },
                    { href: 'https://instagram.com/mami.e_186', label: 'Instagram', icon: Instagram },
                  ].map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="
                        w-12 h-12 rounded-lg
                        bg-[hsl(var(--accent))]
                        flex items-center justify-center
                        text-[hsl(var(--foreground))]
                        transition-colors
                        hover:bg-[hsl(var(--accent))]/80
                      "
                    >
                      <Icon className="w-6 h-6" />
                    </a>
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

/* Icons */

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
      <path d="M5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452z" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )
}
