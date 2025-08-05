import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Code, Zap, Globe, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HomeTemplateCarousel = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);

  const nextTemplate = () => {
    setCurrentTemplate((prev) => (prev + 1) % 3);
  };

  const prevTemplate = () => {
    setCurrentTemplate((prev) => (prev - 1 + 3) % 3);
  };

  const goToTemplate = (index: number) => {
    setCurrentTemplate(index);
  };

  // Template 1: Original Design
  const Template1 = () => (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden pt-24 pb-16 px-4">
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
      </section>
    </div>
  );

  // Template 2: Minimalist Design
  const Template2 = () => (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight">
              <span className="block text-muted-foreground">Hello, I'm</span>
              <span className="hero-text font-bold">Boluwatife</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-12 font-light">
              Web Developer & Digital Craftsman
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Code className="h-6 w-6" />, title: "Development", desc: "Clean, modern code" },
              { icon: <Zap className="h-6 w-6" />, title: "Performance", desc: "Lightning fast" },
              { icon: <Globe className="h-6 w-6" />, title: "Global", desc: "Worldwide reach" }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button size="lg" className="mr-4">
                View Portfolio
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );

  // Template 3: Bold & Dynamic
  const Template3 = () => (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Available for Projects</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Creative{" "}
                <span className="hero-text bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Web Solutions
                </span>{" "}
                That Convert
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transforming ideas into powerful digital experiences. 
                Specializing in modern web applications that drive business growth.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-semibold">25+ Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-semibold">50+ Projects</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio">
                  <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                    See My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Start a Project
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-card border rounded-lg p-8 shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Latest Achievement</h3>
                <p className="text-muted-foreground mb-4">
                  "Delivered a 300% increase in conversion rates for our latest client project."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">B</span>
                  </div>
                  <div>
                    <p className="font-semibold">Boluwatife Omobuwajo</p>
                    <p className="text-sm text-muted-foreground">Founder, WebGenyx</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-cyan/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const templates = [Template1, Template2, Template3];
  const CurrentTemplate = templates[currentTemplate];

  return (
    <div className="relative">
      {/* Template Content */}
      <div className="transition-all duration-500 ease-in-out">
        <CurrentTemplate />
      </div>

      {/* Navigation Controls */}
      <div className="fixed top-1/2 left-4 z-50 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTemplate}
          className="bg-background/80 backdrop-blur-sm"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="fixed top-1/2 right-4 z-50 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          onClick={nextTemplate}
          className="bg-background/80 backdrop-blur-sm"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Template Indicators */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2 bg-background/80 backdrop-blur-sm rounded-full p-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => goToTemplate(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTemplate === index
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Template Labels */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-background/80 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-sm font-medium">
            Template {currentTemplate + 1}: {
              ["Original", "Minimalist", "Bold & Dynamic"][currentTemplate]
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeTemplateCarousel;