import { useState, useEffect } from "react";
import { ArrowRight, Code, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Focused",
      description: "Lightning-fast, optimized experiences that convert visitors"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Scalable solutions that work anywhere in the world"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 px-4">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building the{" "}
              <span className="hero-text animate-text-shimmer bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green bg-[length:200%_auto]">
                future
              </span>{" "}
              of the web
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              One pixel at a time. I'm{" "}
              <span className="text-primary font-semibold">Boluwatife Omobuwajo</span>, 
              founder of WebGenyx, crafting exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/portfolio">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="neon-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
                >
                  Let's Connect
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-cyan/20 rounded-full blur-xl animate-floating" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-neon-purple/20 rounded-full blur-xl animate-floating" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-neon-green/20 rounded-full blur-xl animate-floating" style={{animationDelay: '2s'}} />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Why Choose{" "}
              <span className="hero-text">WebGenyx</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '200ms'}}>
              I combine technical expertise with creative vision to deliver 
              exceptional digital solutions that drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="glass-card p-8 text-center hover-glow cursor-pointer animate-fade-in-up"
                style={{animationDelay: `${(index + 1) * 200}ms`}}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 webgenyx-gradient-surface">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Let's discuss how we can bring your vision to life with cutting-edge web solutions.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8 py-6 animate-bounce-in"
              style={{animationDelay: '400ms'}}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;