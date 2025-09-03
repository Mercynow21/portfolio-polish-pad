import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Developer Workspace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-4 animate-slide-up">
            🤖 Junior AI Developer & Prompt Engineer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-slide-up">
          Mehiret Abdissa
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          Bridging Human Intelligence & AI Innovation through accessible, 
          human-centered solutions with large language models and practical prompt engineering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
          <Button variant="hero" size="lg" className="group">
            <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Contact Me
          </Button>
          <Button variant="glass" size="lg" className="group">
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View GitHub
          </Button>
          <Button variant="outline" size="lg" className="group">
            <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            LinkedIn
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary animate-float" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-accent/20 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-primary/30 blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;