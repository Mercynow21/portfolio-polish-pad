import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Globe,
  Copy,
  Check
} from "lucide-react";
import { resumeData } from "@/data/resume";
import { useState } from "react";

const Resume = () => {
  const [copied, setCopied] = useState(false);

  // SEO optimization - Update document head
  useEffect(() => {
    const originalTitle = document.title;
    const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content');
    const originalOGTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
    const originalOGDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content');

    // Update page title and meta tags for resume
    document.title = `${resumeData.contact.name} - Resume | ${resumeData.contact.role}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `Professional resume of ${resumeData.contact.name}, ${resumeData.contact.role}. ${resumeData.summary.substring(0, 120)}...`
      );
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogURL = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', `${resumeData.contact.name} - Resume`);
    if (ogDescription) ogDescription.setAttribute('content', resumeData.summary);
    if (ogURL) ogURL.setAttribute('content', `${window.location.origin}/resume`);

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', `${resumeData.contact.name} - Resume`);
    if (twitterDescription) twitterDescription.setAttribute('content', resumeData.summary.substring(0, 160));

    // Cleanup on unmount
    return () => {
      document.title = originalTitle;
      if (originalDescription && metaDescription) {
        metaDescription.setAttribute('content', originalDescription);
      }
      if (originalOGTitle && ogTitle) {
        ogTitle.setAttribute('content', originalOGTitle);
      }
      if (originalOGDescription && ogDescription) {
        ogDescription.setAttribute('content', originalOGDescription);
      }
    };
  }, []);

  const handlePrint = () => {
    // Add small delay to ensure styles are loaded
    setTimeout(() => {
      // Focus window and trigger print
      window.focus();
      window.print();
    }, 100);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 print:hidden">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold text-lg">{resumeData.contact.name}</h1>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {resumeData.contact.role}
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={handlePrint} variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Print / Save as PDF
              </Button>
              <Button onClick={handleCopyLink} variant="outline" size="sm">
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? 'Copied!' : 'Copy Link'}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-8 print:px-0 print:py-0">
        {/* Header Section */}
        <header className="mb-8 print:mb-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 print:text-3xl">
              {resumeData.contact.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-4 print:text-lg">
              {resumeData.contact.role}
            </h2>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground print:gap-3 print:text-xs">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4 print:h-3 print:w-3" />
                <a href={`mailto:${resumeData.contact.email}`} className="hover:text-primary">
                  {resumeData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4 print:h-3 print:w-3" />
                <a href={`tel:${resumeData.contact.phone}`} className="hover:text-primary">
                  {resumeData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 print:h-3 print:w-3" />
                <span>{resumeData.contact.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Linkedin className="h-4 w-4 print:h-3 print:w-3" />
                <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Github className="h-4 w-4 print:h-3 print:w-3" />
                <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  GitHub
                </a>
              </div>
              {resumeData.contact.website && (
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4 print:h-3 print:w-3" />
                  <a href={resumeData.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    Portfolio
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2 print:text-xl print:mb-3">
            Professional Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed print:text-sm print:leading-normal">
            {resumeData.summary}
          </p>
        </section>

        {/* Key Metrics */}
        <section className="mb-8 print:mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
            <div className="text-center p-4 rounded-lg bg-muted/20 print:p-2 print:bg-gray-50">
              <div className="text-2xl font-bold text-primary print:text-lg">{resumeData.keyMetrics.timeReduction}</div>
              <div className="text-sm text-muted-foreground print:text-xs">Time Reduction</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/20 print:p-2 print:bg-gray-50">
              <div className="text-2xl font-bold text-accent print:text-lg">{resumeData.keyMetrics.betaUsers}</div>
              <div className="text-sm text-muted-foreground print:text-xs">Beta Users</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/20 print:p-2 print:bg-gray-50">
              <div className="text-2xl font-bold text-primary print:text-lg">{resumeData.keyMetrics.uptime}</div>
              <div className="text-sm text-muted-foreground print:text-xs">Uptime</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/20 print:p-2 print:bg-gray-50">
              <div className="text-2xl font-bold text-accent print:text-lg">{resumeData.keyMetrics.liveProjects}</div>
              <div className="text-sm text-muted-foreground print:text-xs">Live Projects</div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8 print:mb-6 print:break-inside-avoid">
          <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2 print:text-xl print:mb-3">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
            {resumeData.skillCategories.map((category, index) => (
              <div key={category.title} className="print:break-inside-avoid">
                <h3 className="font-semibold text-foreground mb-3 print:mb-2 print:text-sm">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 print:gap-1">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 print:text-xs print:px-2 print:py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2 print:text-xl print:mb-3 print:break-before-page">
            Professional Experience
          </h2>
          <div className="space-y-6 print:space-y-4">
            {resumeData.experience.map((exp, index) => (
              <Card key={exp.title} className="p-6 print:p-4 print:shadow-none print:border print:border-gray-300 print:break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 print:mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground print:text-lg">
                      {exp.title}
                    </h3>
                    <div className="text-primary font-medium print:text-sm">
                      {exp.company} • {exp.type}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 sm:mt-0 sm:text-right print:text-xs">
                    <div>{exp.period} ({exp.duration})</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 print:mb-3 print:text-sm">
                  {exp.description}
                </p>

                <div className="mb-4 print:mb-3">
                  <h4 className="font-semibold text-foreground mb-2 print:mb-1 print:text-sm">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1 print:space-y-0">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground print:text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 print:w-1 print:h-1 print:mt-1.5"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 print:gap-1">
                  {exp.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs print:text-xs print:px-1 print:py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2 print:text-xl print:mb-3">
            Education
          </h2>
          <div className="space-y-4 print:space-y-3">
            {resumeData.education.map((edu, index) => (
              <Card key={edu.degree} className="p-6 print:p-4 print:shadow-none print:border print:border-gray-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-foreground print:text-base">
                      {edu.degree}
                    </h3>
                    <div className="text-primary font-medium print:text-sm">
                      {edu.institution}
                      {edu.location && ` • ${edu.location}`}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 sm:mt-0 print:text-xs">
                    <div>{edu.period}</div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent text-xs print:text-xs">
                      {edu.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground print:text-sm">
                  {edu.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2 print:text-xl print:mb-3 print:break-before-page">
            Featured Projects
          </h2>
          <div className="space-y-6 print:space-y-4">
            {resumeData.projects.map((project, index) => (
              <Card key={project.title} className="p-6 print:p-4 print:shadow-none print:border print:border-gray-300 print:break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 print:mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground print:text-base">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="bg-accent/20 text-accent text-xs">
                        {project.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground print:text-xs">
                        {project.duration} • {project.role}
                      </span>
                    </div>
                  </div>
                  {project.liveUrl && (
                    <div className="mt-2 sm:mt-0">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm print:text-xs"
                      >
                        Live Demo
                      </a>
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 print:mb-3 print:text-sm">
                  {project.description}
                </p>

                {project.achievements && (
                  <div className="mb-4 print:mb-3">
                    <ul className="space-y-1 print:space-y-0">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground print:text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 print:w-1 print:h-1 print:mt-1.5"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 print:gap-1">
                  {project.techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs print:text-xs print:px-1 print:py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2 print:text-xl print:mb-3">
            Achievements & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-1 print:gap-3">
            {resumeData.achievements.map((achievement, index) => (
              <Card key={achievement.title} className="p-4 print:p-3 print:shadow-none print:border print:border-gray-300">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary text-xs">
                    {achievement.type}
                  </Badge>
                  <span className="text-accent font-medium text-sm print:text-xs">
                    {achievement.period}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 print:text-sm">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm print:text-xs">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Resume;