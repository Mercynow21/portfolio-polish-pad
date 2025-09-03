import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 bg-muted/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Mehiret Abdissa. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Crafted with passion for AI development and user-centered design.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
