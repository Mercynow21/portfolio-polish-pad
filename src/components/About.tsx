import { Card } from "@/components/ui/card";
import { Code, Brain, Zap, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI-Focused Development",
      description: "Specialized in LLM integration and prompt engineering with practical applications in content generation and user assistance."
    },
    {
      icon: Code,
      title: "Full-Stack Capabilities",
      description: "Proficient in modern web technologies including Next.js, TypeScript, Python, and cloud services like Supabase."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Built systems that reduced content creation time by 60% and successfully handled 1,000+ beta requests."
    },
    {
      icon: Target,
      title: "User-Centric Approach",
      description: "Focus on creating accessible, human-centered AI solutions with clear documentation and measurable outcomes."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-4">
            👨‍💻 About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Building the Future with AI
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an entry-level AI developer passionate about bridging the gap between human intelligence and artificial intelligence. 
              My journey focuses on creating practical, accessible AI solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in <span className="text-primary font-semibold">large language models</span> and 
              <span className="text-accent font-semibold"> prompt engineering</span>, I've successfully built and deployed 
              applications that streamline workflows and enhance user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center gradient-card p-4 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">60%</div>
                <div className="text-sm text-muted-foreground">Time Reduction</div>
              </div>
              <div className="text-center gradient-card p-4 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-accent mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Beta Requests</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Core Strengths</h3>
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <Card key={item.title} className="p-4 gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Python", "Next.js", "TypeScript", "React", "Tailwind CSS",
              "OpenAI API", "Supabase", "PostgreSQL", "Git/GitHub", 
              "LangChain", "Jupyter", "Prompt Engineering", "REST APIs"
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 rounded-full bg-muted/50 text-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;