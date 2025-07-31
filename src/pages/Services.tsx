import { useState, useEffect } from "react";
import { Code, Palette, Search, Smartphone, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "Performance Optimization", "Cross-browser Compatibility", "Clean Code Architecture"],
      color: "neon-cyan"
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces that provide exceptional user experiences and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "neon-purple"
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your website's visibility and ranking in search engines.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Audits"],
      color: "neon-green"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile Development",
      description: "Progressive web apps and mobile-optimized experiences that work seamlessly across all devices.",
      features: ["PWA Development", "Mobile-first Design", "Touch Optimization", "Offline Functionality"],
      color: "neon-cyan"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Performance Optimization",
      description: "Speed up your website with advanced optimization techniques for better user experience and SEO.",
      features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "Caching Strategies"],
      color: "neon-purple"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Website Maintenance",
      description: "Ongoing support and maintenance to keep your website secure, updated, and performing at its best.",
      features: ["Security Updates", "Content Updates", "Performance Monitoring", "Backup Management"],
      color: "neon-green"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your goals, target audience, and requirements to create a comprehensive project plan."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and high-fidelity designs that align with your brand and user needs."
    },
    {
      step: "03",
      title: "Development",
      description: "Building your website or application using modern technologies and best practices."
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Thorough testing across devices and browsers, plus performance optimization for the best user experience."
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Deploying your project to production and providing ongoing support and maintenance."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional{" "}
              <span className="hero-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive web development services designed to elevate your digital presence 
              and drive business growth through cutting-edge technology and exceptional design.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="glass-card p-8 hover-glow cursor-pointer group animate-scale-in"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className={`text-${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 webgenyx-gradient-surface">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in-up">
            My{" "}
            <span className="hero-text">Process</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div 
                key={index}
                className="flex items-start mb-12 animate-slide-in-left"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mr-8">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in-up">
            Transparent{" "}
            <span className="hero-text">Pricing</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: '200ms'}}>
              Every project is unique, and I believe in providing custom solutions that fit your 
              specific needs and budget. I offer competitive rates with transparent pricing—no 
              hidden fees, no surprises.
            </p>
            
            <Card className="glass-card p-8 max-w-2xl mx-auto animate-scale-in" style={{animationDelay: '400ms'}}>
              <h3 className="text-2xl font-semibold mb-4">Get a Custom Quote</h3>
              <p className="text-muted-foreground mb-6">
                Ready to discuss your project? I'd love to hear about your ideas and provide 
                you with a detailed proposal tailored to your requirements.
              </p>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 webgenyx-gradient-surface">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 animate-fade-in-up">
            Technology{" "}
            <span className="hero-text">Stack</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {[
              "React", "Next.js", "TypeScript", "Tailwind CSS", 
              "Node.js", "Python", "PostgreSQL", "MongoDB", 
              "Vercel", "AWS", "Docker", "Git"
            ].map((tech, index) => (
              <div 
                key={index}
                className="glass-card p-4 hover-glow cursor-pointer animate-bounce-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;