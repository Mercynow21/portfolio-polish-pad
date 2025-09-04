import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mercyabdi7@gmail.com",
      href: "mailto:mercyabdi7@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "/in/mehiret-abdissa",
      href: "https://www.linkedin.com/in/mehiret-abdissa",
      description: "Professional network"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "/mehiret-abdissa",
      href: "https://github.com/mehiret-abdissa",
      description: "View my code"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(571) 626-9273",
      href: "tel:5716269273",
      description: "Direct contact"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available Anywhere in USA",
      href: "#",
      description: "Open to opportunities"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-4">
            📞 Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on AI projects or discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title}
                  className="p-4 gradient-card border-border/50 hover:shadow-card transition-all duration-300 group"
                >
                  <a 
                    href={method.href}
                    className="flex items-center gap-4"
                    target={method.href.startsWith('https') ? '_blank' : undefined}
                    rel={method.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <method.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-muted-foreground">{method.value}</p>
                      <p className="text-muted-foreground text-sm">{method.description}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="gradient-card p-6 rounded-2xl shadow-card border border-border/50">
              <h4 className="text-xl font-bold text-foreground mb-3">
                Open to Opportunities
              </h4>
              <p className="text-muted-foreground mb-4">
                I'm actively seeking roles in AI development, prompt engineering, and full-stack development. 
                Let's discuss how I can contribute to your team!
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm border border-primary/30">
                  AI Developer
                </span>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm border border-accent/30">
                  Full-Stack
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm border border-primary/30">
                  Remote
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Card className="p-8 gradient-card border-border/50 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="mt-2 bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="mt-2 bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Project collaboration, job opportunity, etc." 
                    className="mt-2 bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or opportunity..." 
                    rows={5}
                    className="mt-2 bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full group" type="submit">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;