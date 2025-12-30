import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[hsl(var(--background))]">
      <Hero />
      <About />
      <Projects />
      <div className="flex flex-col lg:flex-row lg:items-stretch bg-[hsl(var(--background))]">
        <div className="flex-1">
          <TechStack />
        </div>
        <div className="flex-1">
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}