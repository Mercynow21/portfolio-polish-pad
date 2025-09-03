import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Zap, Users, Target, TrendingUp, Clock } from "lucide-react";

const Achievements = () => {
  const keyMetrics = [
    {
      icon: Zap,
      value: "60%",
      label: "Time Reduction",
      description: "Content creation efficiency improvement through AI optimization",
      color: "text-primary"
    },
    {
      icon: Users,
      value: "1,000+",
      label: "Beta Users",
      description: "Successfully processed requests during beta testing phase",
      color: "text-accent"
    },
    {
      icon: Target,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable system performance with robust error handling",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      value: "3+",
      label: "Live Projects",
      description: "Production applications serving real users",
      color: "text-accent"
    }
  ];

  const achievements = [
    {
      category: "Technical Excellence",
      icon: Trophy,
      items: [
        {
          title: "AI Content Assistant Success",
          description: "Built production-ready AI tool that reduced content creation time by 60%",
          impact: "1,000+ requests processed",
          skills: ["Python", "OpenAI API", "Prompt Engineering"]
        },
        {
          title: "Full-Stack Application Portfolio",
          description: "Developed and deployed multiple applications with modern tech stack",
          impact: "3 live applications",
          skills: ["React", "Next.js", "TypeScript", "Supabase"]
        },
        {
          title: "Robust System Architecture",
          description: "Implemented scalable solutions with 99.9% uptime and error handling",
          impact: "Production reliability",
          skills: ["System Design", "Error Handling", "Performance"]
        }
      ]
    },
    {
      category: "Innovation & Problem Solving",
      icon: Zap,
      items: [
        {
          title: "Prompt Engineering Mastery",
          description: "Developed reusable prompt templates with typed request/response guards",
          impact: "Enhanced AI reliability",
          skills: ["LLM Integration", "API Design", "TypeScript"]
        },
        {
          title: "User-Centered Design",
          description: "Created intuitive interfaces focusing on accessibility and usability",
          impact: "Improved user experience",
          skills: ["UI/UX", "Accessibility", "Responsive Design"]
        },
        {
          title: "Practical AI Applications",
          description: "Built real-world solutions addressing educational and productivity needs",
          impact: "Solving real problems",
          skills: ["Problem Analysis", "Solution Design", "User Research"]
        }
      ]
    }
  ];

  const recognitions = [
    {
      title: "Self-Directed Learning Excellence",
      description: "Demonstrated ability to rapidly acquire new technologies and implement them effectively",
      period: "2024",
      type: "Professional Development"
    },
    {
      title: "Full-Stack Development Proficiency",
      description: "Successfully bridged frontend and backend development with modern best practices",
      period: "2024", 
      type: "Technical Skill"
    },
    {
      title: "AI Integration Expertise",
      description: "Proven track record in implementing LLM-powered features with practical applications",
      period: "2024",
      type: "Specialization"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-4">
            🏆 Achievements & Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Measurable Results & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Demonstrating impact through quantifiable achievements and continuous professional growth.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <Card 
              key={metric.label}
              className="p-6 gradient-card border-border/50 hover:shadow-card transition-all duration-300 animate-slide-up text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 ${metric.color} mb-4 group-hover:scale-110 transition-transform`}>
                <metric.icon className="h-6 w-6" />
              </div>
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="font-semibold text-foreground mb-2">
                {metric.label}
              </div>
              <p className="text-muted-foreground text-sm">
                {metric.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {achievements.map((category, categoryIndex) => (
            <Card 
              key={category.category}
              className="p-8 gradient-card border-border/50 shadow-card animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.items.map((item, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-6">
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-accent font-medium text-sm">{item.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Professional Recognition */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Professional Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <Card 
                key={recognition.title}
                className="p-6 gradient-card border-border/50 hover:shadow-card transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                    {recognition.type}
                  </Badge>
                  <span className="text-primary font-medium text-sm">{recognition.period}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-3">{recognition.title}</h4>
                <p className="text-muted-foreground text-sm">{recognition.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;