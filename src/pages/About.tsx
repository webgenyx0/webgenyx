import { useState, useEffect } from "react";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started my journey in web development, focusing on modern frameworks and user experience design."
    },
    {
      year: "2021",
      title: "Skill Development",
      description: "Mastered React, TypeScript, and modern web development practices while building various projects."
    },
    {
      year: "2022",
      title: "Professional Growth",
      description: "Began working with clients, delivering high-quality web solutions and building my reputation."
    },
    {
      year: "2023",
      title: "WebGenyx Founded",
      description: "Officially launched WebGenyx, establishing a brand focused on cutting-edge web development."
    },
    {
      year: "2024",
      title: "Expanding Horizons",
      description: "Growing the business with new services, technologies, and a focus on delivering exceptional results."
    }
  ];

  const skills = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "Database Design",
    "API Development",
    "UI/UX Design",
    "SEO Optimization",
    "Performance Optimization"
  ];

  const stats = [
    { icon: <Award className="h-8 w-8" />, value: "50+", label: "Projects Completed" },
    { icon: <Users className="h-8 w-8" />, value: "30+", label: "Happy Clients" },
    { icon: <Clock className="h-8 w-8" />, value: "4+", label: "Years Experience" },
    { icon: <CheckCircle className="h-8 w-8" />, value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet{" "}
                <span className="hero-text">Boluwatife Omobuwajo</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                I'm the founder of WebGenyx, a passionate web developer dedicated to creating 
                exceptional digital experiences. With a keen eye for design and a deep understanding 
                of modern web technologies, I help businesses transform their online presence.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My journey in web development began with a simple curiosity about how websites work. 
                Today, I specialize in building fast, responsive, and user-friendly applications 
                that not only look great but perform exceptionally well.
              </p>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Let's Work Together
                </Button>
              </Link>
            </div>
            
            <div className="animate-fade-in-right" style={{animationDelay: '300ms'}}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-background p-2">
                    <img 
                      src="/lovable-uploads/d7f7be86-4090-4413-a1fe-e6d9990f6a6a.png" 
                      alt="Boluwatife Omobuwajo - Web Developer" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-cyan/20 rounded-full blur-xl animate-floating" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-purple/20 rounded-full blur-xl animate-floating" style={{animationDelay: '1s'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 webgenyx-gradient-surface">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="text-primary mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in-up">
            My{" "}
            <span className="hero-text">Journey</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="flex mb-12 animate-slide-in-left"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                  <div className="w-1 h-16 bg-gradient-primary mx-auto rounded-full" />
                </div>
                <Card className="flex-1 ml-8 glass-card p-6 hover-glow">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 webgenyx-gradient-surface">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in-up">
            Skills &{" "}
            <span className="hero-text">Expertise</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="glass-card p-4 text-center hover-glow cursor-pointer animate-bounce-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why WebGenyx Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in-up">
            Why{" "}
            <span className="hero-text">WebGenyx</span>?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6 animate-fade-in-up" style={{animationDelay: '200ms'}}>
              WebGenyx represents the genesis of exceptional web experiences. I believe that every 
              website should be more than just functional—it should be memorable, engaging, and 
              performance-driven.
            </p>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: '400ms'}}>
              My mission is to help businesses and individuals establish a powerful online presence 
              through innovative web solutions that combine cutting-edge technology with thoughtful design.
            </p>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline"
                className="neon-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-scale-in"
                style={{animationDelay: '600ms'}}
              >
                Explore My Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;