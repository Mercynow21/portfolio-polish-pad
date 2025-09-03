import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Award, Target } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "University/College",
      location: "Location",
      period: "2020 - 2024",
      status: "Recent Graduate",
      gpa: "Strong Academic Performance",
      description: "Focused on software engineering, data structures, algorithms, and emerging technologies with particular interest in artificial intelligence and machine learning.",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Database Systems", 
        "Web Development",
        "Machine Learning Fundamentals"
      ],
      projects: [
        {
          name: "Senior Capstone Project",
          description: "AI-powered application demonstrating practical machine learning implementation",
          tech: ["Python", "Machine Learning", "Web APIs"]
        }
      ]
    }
  ];

  const continuousLearning = [
    {
      category: "AI & Machine Learning",
      icon: Target,
      items: [
        "OpenAI API Documentation & Best Practices",
        "Prompt Engineering Techniques",
        "LangChain Framework",
        "Machine Learning Model Evaluation",
        "AI Ethics & Responsible Development"
      ]
    },
    {
      category: "Web Development",
      icon: BookOpen,
      items: [
        "React & Next.js Advanced Patterns",
        "TypeScript Best Practices",
        "Modern CSS & Tailwind",
        "Backend Development with Supabase",
        "RESTful API Design"
      ]
    },
    {
      category: "Professional Skills",
      icon: Award,
      items: [
        "Technical Writing & Documentation",
        "Agile Development Methodologies",
        "Version Control with Git",
        "Testing & Quality Assurance",
        "User Experience Design"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium mb-4">
            🎓 Education & Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Academic Foundation & Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong educational background combined with continuous learning in cutting-edge technologies.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          {education.map((edu, index) => (
            <Card 
              key={edu.degree}
              className="p-8 gradient-card border-border/50 shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                      <div className="text-muted-foreground mb-2">
                        <span className="font-medium text-primary">{edu.institution}</span>
                        {edu.location && <span> • {edu.location}</span>}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>{edu.period}</span>
                        <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                          {edu.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-6">{edu.description}</p>
                    </div>
                  </div>

                  {/* Relevant Coursework */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-4">Relevant Coursework</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {edu.relevantCourses.map((course) => (
                        <Badge key={course} variant="outline" className="justify-center py-2">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Academic Projects */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Notable Academic Projects</h4>
                    {edu.projects.map((project, i) => (
                      <div key={i} className="border-l-2 border-primary/30 pl-4 mb-4 last:mb-0">
                        <h5 className="font-medium text-foreground mb-1">{project.name}</h5>
                        <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="lg:col-span-1">
                  <div className="gradient-card p-6 rounded-xl border border-border/50 h-fit">
                    <h4 className="font-semibold text-foreground mb-4">Academic Highlights</h4>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-accent mb-1">{edu.gpa}</div>
                        <div className="text-sm text-muted-foreground">Academic Standing</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary mb-1">CS Focus</div>
                        <div className="text-sm text-muted-foreground">Software Engineering</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-accent mb-1">AI Interest</div>
                        <div className="text-sm text-muted-foreground">Emerging Tech</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Continuous Learning */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Continuous Learning & Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {continuousLearning.map((category, index) => (
              <Card 
                key={category.category}
                className="p-6 gradient-card border-border/50 hover:shadow-card transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-3">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-foreground">{category.category}</h4>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;