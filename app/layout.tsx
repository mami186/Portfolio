import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/ThemeToggle'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Morgan | Full-Stack Developer',
  description: 'Modern full-stack developer specializing in React, Next.js, FastAPI, and PHP. Building scalable web applications with clean code.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'FastAPI', 'PHP', 'TypeScript'],
  authors: [{ name: 'Alex Morgan' }],
  creator: 'Alex Morgan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexmorgan.dev',
    title: 'Alex Morgan | Full-Stack Developer',
    description: 'Modern full-stack developer building scalable web applications',
    siteName: 'Alex Morgan Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen bg-[hsl(var(--background))]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}