import { useState, useEffect } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
      image: "/placeholder-project-1.jpg",
      category: "Web Development",
      technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description: "A comprehensive dashboard for SaaS analytics with real-time data visualization and reporting.",
      image: "/placeholder-project-2.jpg",
      category: "Web Development",
      technologies: ["React", "TypeScript", "D3.js", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Restaurant Website",
      description: "A beautiful restaurant website with online ordering system and table reservation functionality.",
      image: "/placeholder-project-3.jpg",
      category: "Web Design",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A creative portfolio website for a digital artist with interactive galleries and animations.",
      image: "/placeholder-project-4.jpg",
      category: "Web Design",
      technologies: ["Next.js", "GSAP", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/placeholder-project-5.jpg",
      category: "Web Development",
      technologies: ["React", "Firebase", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Corporate Website",
      description: "A professional corporate website with content management system and SEO optimization.",
      image: "/placeholder-project-6.jpg",
      category: "Web Design",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "Web Design", "Mobile App"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My{" "}
              <span className="hero-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A showcase of my latest projects, featuring modern web applications, 
              stunning designs, and innovative solutions that deliver real results.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up">
            Featured{" "}
            <span className="hero-text">Projects</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="glass-card overflow-hidden hover-glow group cursor-pointer animate-scale-in"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="relative h-64 bg-gradient-surface overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/50">Project Image</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="neon-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-16 px-4 webgenyx-gradient-surface">
        <div className="container mx-auto">
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-2 bg-background/50 backdrop-blur-sm rounded-lg p-2">
              <Filter className="h-5 w-5 text-muted-foreground mr-2" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={`transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "hover:bg-primary/10"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="glass-card overflow-hidden hover-glow group cursor-pointer animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative h-48 bg-gradient-surface overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-2xl font-bold text-primary/50">Project Image</div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs mb-3">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 neon-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '200ms'}}>
            I'm always excited to work on new projects and bring innovative ideas to life. 
            Let's discuss how we can create something amazing together.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 animate-bounce-in"
            style={{animationDelay: '400ms'}}
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;