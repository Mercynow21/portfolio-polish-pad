import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 bg-muted/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Mehiret Abdissa. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Junior AI Developer & Prompt Engineer - Ready for new opportunities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
