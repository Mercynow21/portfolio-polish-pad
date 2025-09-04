import ProjectCard from "./ProjectCard";
import partyPlannerImg from "@/assets/party-planner.jpg";
import chatpalImg from "@/assets/chatpal.jpg";
import homeworkHelperImg from "@/assets/homework-helper.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Party Planner Pro",
      description: "Smart party planning application with budget tracking, item management, and allergy-aware suggestions for seamless event organization.",
      longDescription: "A comprehensive party planning tool that helps users organize events efficiently. Features include budget management with real-time calculations, item tracking with allergy filters, minute-by-minute scheduling, and intelligent suggestions based on remaining budget.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
      liveUrl: "https://party-planner-ten.vercel.app/",
      githubUrl: "",
      image: partyPlannerImg,
      status: "Live",
      duration: "3 weeks",
      role: "Solo Developer"
    },
    {
      title: "ChatPal School Buddy",
      description: "Educational AI chat companion designed to assist students with learning, homework help, and interactive study sessions.",
      longDescription: "An intelligent educational platform that provides personalized learning assistance. Features include AI-powered tutoring, homework help, progress tracking, and adaptive learning paths tailored to individual student needs.",
      techStack: ["Next.js", "OpenAI API", "Supabase", "TypeScript", "Authentication"],
      liveUrl: "https://chatpal-school-buddy.vercel.app/",
      githubUrl: "",
      image: chatpalImg,
      status: "In Development",
      duration: "4 weeks",
      role: "Solo Developer"
    },
    {
      title: "Homework Plan Helper",
      description: "Intelligent homework management system that helps students organize assignments, track deadlines, and optimize study schedules.",
      longDescription: "A smart academic planning tool that uses AI to help students manage their workload effectively. Includes deadline tracking, priority scheduling, progress monitoring, and study time optimization algorithms.",
      techStack: ["React", "Python", "AI Planning", "User Authentication", "Data Analytics"],
      liveUrl: "https://homework-plan-helper-89sli1cs6-mercys-projects-968f0695.vercel.app/",
      githubUrl: "",
      image: homeworkHelperImg,
      status: "Beta",
      duration: "5 weeks",
      role: "Solo Developer"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium mb-4">
            🚀 Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Project Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications built with modern technologies, focusing on user experience and practical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard 
                {...project} 
                image={project.title === "Party Planner Pro" ? partyPlannerImg : 
                       project.title === "ChatPal School Buddy" ? chatpalImg : 
                       homeworkHelperImg} 
              />
            </div>
          ))}
        </div>

        {/* Additional Work Section */}
        <div className="mt-16 text-center">
          <div className="gradient-card p-8 rounded-2xl shadow-card border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              AI Content Assistant
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Built an AI-powered content generation tool that reduced creation time by 60% and processed 1,000+ requests during beta testing. 
              Features intelligent prompt templates, content optimization, and seamless API integration.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["Python", "OpenAI API", "Next.js", "TypeScript", "Supabase"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium">
              Featured in Portfolio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;