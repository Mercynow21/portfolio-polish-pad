import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Users, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Content Assistant Developer",
      company: "Independent Project",
      type: "Solo Developer",
      location: "Remote",
      duration: "6 weeks",
      period: "2024",
      description: "Built a comprehensive AI-powered content generation and optimization tool that revolutionized content creation workflows.",
      achievements: [
        "Reduced content creation time by 60% through intelligent prompt engineering",
        "Successfully processed 1,000+ requests during beta testing phase",
        "Implemented reusable prompt templates with typed request/response guards",
        "Integrated OpenAI API with robust error handling and retry mechanisms",
        "Designed user-friendly interface with real-time content optimization"
      ],
      technologies: ["Python", "OpenAI API", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
      metrics: {
        timeReduction: "60%",
        requests: "1,000+",
        uptime: "99.9%"
      }
    },
    {
      title: "Full-Stack Developer",
      company: "Personal Projects",
      type: "Solo Developer", 
      location: "Remote",
      duration: "Ongoing",
      period: "2024",
      description: "Developed multiple web applications focusing on practical solutions for education, event planning, and productivity.",
      achievements: [
        "Built Party Planner Pro with budget tracking and allergy-aware suggestions",
        "Created ChatPal School Buddy for educational AI assistance",
        "Developed Homework Plan Helper with intelligent scheduling algorithms",
        "Implemented responsive designs with modern UI/UX principles",
        "Deployed applications with high availability and performance optimization"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Python", "Supabase", "Authentication", "REST APIs"],
      metrics: {
        projects: "3+",
        users: "Beta",
        performance: "A+"
      }
    }
  ];

  const certifications = [
    {
      title: "AI & Machine Learning Fundamentals",
      issuer: "Self-Directed Learning",
      date: "2024",
      skills: ["LLM Integration", "Prompt Engineering", "API Development"]
    },
    {
      title: "Modern Web Development",
      issuer: "Industry Practice",
      date: "2024", 
      skills: ["React", "TypeScript", "Full-Stack Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-4">
            💼 Professional Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Work Experience & Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical experience building AI-powered solutions and modern web applications with measurable impact.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.title}
              className="p-8 gradient-card border-border/50 hover:shadow-card transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <span className="font-medium text-primary">{exp.company}</span>
                        <span className="text-border">•</span>
                        <span>{exp.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period} ({exp.duration})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Metrics Sidebar */}
                <div className="lg:col-span-1">
                  <div className="gradient-card p-6 rounded-xl border border-border/50 h-fit">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Code className="h-4 w-4 text-accent" />
                      Impact Metrics
                    </h4>
                    <div className="space-y-4">
                      {Object.entries(exp.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications & Learning */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Continuous Learning & Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className="p-6 gradient-card border-border/50 hover:shadow-card transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </div>
                  <span className="text-primary font-medium text-sm">{cert.date}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;