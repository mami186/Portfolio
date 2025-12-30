export default function Footer() {
  return (
    <footer
      className="
        py-6 text-center
        bg-[hsl(var(--background))]
        border-t border-[hsl(var(--foreground))]/10
      "
    >
      <div className="space-x-4 mb-2">
        <a
          href="https://github.com/yourname"
          className="
            text-[hsl(var(--foreground))]
            hover:underline
          "
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourname"
          className="
            text-[hsl(var(--foreground))]
            hover:underline
          "
        >
          LinkedIn
        </a>
      </div>

      <p className="text-[hsl(var(--foreground))]/70">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  )
}
