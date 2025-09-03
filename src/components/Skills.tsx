import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Code2, 
  Database, 
  Palette, 
  MessageSquare, 
  Lightbulb,
  Users,
  BookOpen
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Prompt Engineering", level: 95, description: "Reusable prompt templates for content assistant" },
    { name: "LLM Integration", level: 90, description: "OpenAI API with typed request/response guards" },
    { name: "Python Development", level: 85, description: "Backend scripts, data prep, evaluation" },
    { name: "React/Next.js", level: 88, description: "Server + client components, full-stack apps" },
    { name: "TypeScript", level: 82, description: "Type-safe development and API integration" },
    { name: "AI Application Development", level: 90, description: "End-to-end AI solution development" }
  ];

  const softSkills = [
    { 
      icon: MessageSquare, 
      name: "Technical Communication", 
      description: "Clear documentation and stakeholder updates" 
    },
    { 
      icon: Lightbulb, 
      name: "Problem-Solving", 
      description: "Analytical approach to complex challenges" 
    },
    { 
      icon: BookOpen, 
      name: "Quick Learning", 
      description: "Rapid adaptation to new technologies" 
    },
    { 
      icon: Users, 
      name: "Team Collaboration", 
      description: "Effective cross-functional teamwork" 
    }
  ];

  const categories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["Prompt Engineering", "LLM Integration", "OpenAI APIs", "LangChain", "Basic ML", "Evaluation Loops"]
    },
    {
      icon: Code2,
      title: "Development",
      skills: ["Python", "TypeScript", "React", "Next.js", "REST APIs", "Git/GitHub"]
    },
    {
      icon: Database,
      title: "Backend & Data",
      skills: ["Supabase", "PostgreSQL", "RLS", "Data Processing", "API Design", "Authentication"]
    },
    {
      icon: Palette,
      title: "Frontend & Design",
      skills: ["Tailwind CSS", "Responsive Design", "UI/UX", "Component Libraries", "Modern CSS", "Accessibility"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium mb-4">
            🛠️ Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Proficiencies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blend of technical skills and soft skills focused on AI development and user-centered solutions.
          </p>
        </div>

        {/* Technical Skills with Progress Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="p-6 gradient-card border-border/50 hover:shadow-card transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-foreground">{skill.name}</h4>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="mb-3" />
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Skill Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={category.title}
                className="p-6 gradient-card border-border/50 hover:shadow-card transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-3 group-hover:bg-primary/30 transition-colors">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-foreground">{category.title}</h4>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="px-3 py-1 rounded-md bg-muted/50 text-center text-sm text-muted-foreground border border-border/30"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Professional Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="p-6 gradient-card border-border/50 hover:shadow-card transition-all duration-300 animate-slide-up text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent mb-4 group-hover:bg-accent/30 transition-colors">
                  <skill.icon className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{skill.name}</h4>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;