import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
  status: string;
  duration: string;
  role: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  longDescription, 
  techStack, 
  liveUrl, 
  githubUrl, 
  image, 
  status, 
  duration, 
  role 
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden gradient-card shadow-card hover:shadow-elevation transition-all duration-500 hover:scale-105 border-border/50">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={`${title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-medium">
            {status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Users className="h-4 w-4" />
          <span>{role}</span>
          <span className="text-border">•</span>
          <Calendar className="h-4 w-4" />
          <span>{duration}</span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="portfolio" size="sm" className="flex-1 group/btn" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform" />
              Live Demo
            </a>
          </Button>
          
          {githubUrl && (
            <Button variant="outline" size="sm" className="group/btn" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;