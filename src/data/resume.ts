// Resume Data - Mehiret Abdissa
// This file contains all resume information in a structured format

export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website?: string;
}

export interface Experience {
  title: string;
  company: string;
  type: string;
  location: string;
  duration: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  gpa: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: string;
  duration: string;
  role: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  level?: number;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  period: string;
  type: string;
}

export const resumeData = {
  contact: {
    name: "Mehiret Abdissa",
    role: "Junior AI Developer & Prompt Engineer",
    email: "mercyabdi7@gmail.com",
    phone: "(571) 626-9273",
    location: "Available Anywhere in USA",
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/Mercynow21",
    website: "https://mehiret-portfolio.vercel.app"
  } as ContactInfo,

  summary: "Entry-level AI developer passionate about bridging the gap between human intelligence and artificial intelligence. Specialized in LLM integration and prompt engineering with expertise in building practical, accessible AI solutions that solve real-world problems. Successfully built applications that reduced content creation time by 60% and processed 1,000+ beta requests.",

  experience: [
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
      technologies: ["Python", "OpenAI API", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"]
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
      technologies: ["React", "Next.js", "TypeScript", "Python", "Supabase", "Authentication", "REST APIs"]
    }
  ] as Experience[],

  education: [
    {
      degree: "Bachelor's Degree in Marketing and Management",
      institution: "University/College",
      location: "Location",
      period: "2012 - 2015",
      status: "Graduate",
      gpa: "Strong Academic Performance",
      description: "Comprehensive business education covering marketing strategies, management principles, and business operations with focus on digital transformation and modern business practices."
    }
  ] as Education[],

  projects: [
    {
      title: "Party Planner Pro",
      description: "Smart party planning application with budget tracking, item management, and allergy-aware suggestions for seamless event organization.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
      liveUrl: "https://party-planner-ten.vercel.app/",
      githubUrl: "",
      status: "Live",
      duration: "3 weeks",
      role: "Solo Developer",
      achievements: ["Budget management with real-time calculations", "Allergy-aware filtering system", "Minute-by-minute event scheduling"]
    },
    {
      title: "ChatPal School Buddy",
      description: "Educational AI chat companion designed to assist students with learning, homework help, and interactive study sessions.",
      techStack: ["Next.js", "OpenAI API", "Supabase", "TypeScript", "Authentication"],
      liveUrl: "https://chatpal-school-buddy.vercel.app/",
      githubUrl: "",
      status: "In Development",
      duration: "4 weeks",
      role: "Solo Developer",
      achievements: ["AI-powered tutoring system", "Progress tracking implementation", "Adaptive learning paths"]
    },
    {
      title: "Homework Plan Helper",
      description: "Intelligent homework management system that helps students organize assignments, track deadlines, and optimize study schedules.",
      techStack: ["React", "Python", "AI Planning", "User Authentication", "Data Analytics"],
      liveUrl: "https://homework-plan-helper-89sli1cs6-mercys-projects-968f0695.vercel.app/",
      githubUrl: "",
      status: "Beta",
      duration: "5 weeks",
      role: "Solo Developer",
      achievements: ["Intelligent deadline tracking", "Priority-based scheduling", "Study time optimization algorithms"]
    }
  ] as Project[],

  skillCategories: [
    {
      title: "AI & Machine Learning",
      skills: ["Prompt Engineering", "LLM Integration", "OpenAI APIs", "LangChain", "Basic ML", "Evaluation Loops"]
    },
    {
      title: "Development",
      skills: ["Python", "TypeScript", "React", "Next.js", "REST APIs", "Git/GitHub"]
    },
    {
      title: "Backend & Data",
      skills: ["Supabase", "PostgreSQL", "RLS", "Data Processing", "API Design", "Authentication"]
    },
    {
      title: "Frontend & Design",
      skills: ["Tailwind CSS", "Responsive Design", "UI/UX", "Component Libraries", "Modern CSS", "Accessibility"]
    }
  ] as SkillCategory[],

  technicalSkills: [
    { name: "Prompt Engineering", level: 95, description: "Reusable prompt templates for content assistant" },
    { name: "LLM Integration", level: 90, description: "OpenAI API with typed request/response guards" },
    { name: "Python Development", level: 85, description: "Backend scripts, data prep, evaluation" },
    { name: "React/Next.js", level: 88, description: "Server + client components, full-stack apps" },
    { name: "TypeScript", level: 82, description: "Type-safe development and API integration" },
    { name: "AI Application Development", level: 90, description: "End-to-end AI solution development" }
  ] as Skill[],

  achievements: [
    {
      title: "AI Content Assistant Success",
      description: "Built production-ready AI tool that reduced content creation time by 60%",
      period: "2024",
      type: "Technical Excellence"
    },
    {
      title: "Full-Stack Application Portfolio", 
      description: "Developed and deployed multiple applications with modern tech stack",
      period: "2024",
      type: "Technical Excellence"
    },
    {
      title: "Self-Directed Learning Excellence",
      description: "Demonstrated ability to rapidly acquire new technologies and implement them effectively",
      period: "2024",
      type: "Professional Development"
    }
  ] as Achievement[],

  keyMetrics: {
    timeReduction: "60%",
    betaUsers: "1,000+",
    uptime: "99.9%",
    liveProjects: "3+"
  }
};