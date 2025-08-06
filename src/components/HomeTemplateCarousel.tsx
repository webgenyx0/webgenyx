import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Code, Zap, Globe, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HomeTemplateCarousel = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemplate((prev) => (prev + 1) % 3);
    }, 4000); // Change template every 4 seconds

    return () => clearInterval(interval);
  }, []);

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
            founder of WebGenyx, crafting exceptional digital experiences that drive results and inspire innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
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

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What I Do Best</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Code className="h-8 w-8" />, 
                title: "Full-Stack Development", 
                desc: "Building robust web applications with modern technologies like React, Node.js, and cloud platforms. From concept to deployment, I handle every aspect of development.",
                skills: ["React", "TypeScript", "Node.js", "PostgreSQL"]
              },
              { 
                icon: <Zap className="h-8 w-8" />, 
                title: "Performance Optimization", 
                desc: "Creating lightning-fast websites that score 95+ on Google PageSpeed. Every millisecond matters in user experience and conversion rates.",
                skills: ["Core Web Vitals", "Lazy Loading", "CDN", "Caching"]
              },
              { 
                icon: <Globe className="h-8 w-8" />, 
                title: "Digital Strategy", 
                desc: "Combining technical expertise with business acumen to create solutions that not only look great but drive measurable business growth.",
                skills: ["UX Design", "Analytics", "SEO", "Conversion"]
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-primary mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
                <p className="text-muted-foreground mb-6 text-center">{item.desc}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "25+", label: "Happy Clients" },
              { number: "3+", label: "Years Experience" },
              { number: "95%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-16">What Clients Say</h2>
          <Card className="p-12">
            <div className="mb-8">
              <p className="text-2xl text-muted-foreground italic leading-relaxed">
                "Boluwatife transformed our online presence completely. Our website now converts 3x better and loads incredibly fast. His attention to detail and technical expertise is unmatched."
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">Sarah Johnson</div>
                <div className="text-muted-foreground">CEO, TechStart Inc.</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );

  // Template 2: Minimalist Design
  const Template2 = () => (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight">
              <span className="block text-muted-foreground">Hello, I'm</span>
              <span className="hero-text font-bold">Boluwatife</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
              Web Developer & Digital Craftsman specializing in clean, purposeful design that prioritizes user experience above all else.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              { 
                icon: <Code className="h-8 w-8" />, 
                title: "Clean Development", 
                desc: "Writing maintainable, semantic code that stands the test of time. Every line has purpose.",
                approach: "Less is more"
              },
              { 
                icon: <Zap className="h-8 w-8" />, 
                title: "Peak Performance", 
                desc: "Optimized for speed and efficiency. Sites that load instantly and feel responsive.",
                approach: "Speed matters"
              },
              { 
                icon: <Globe className="h-8 w-8" />, 
                title: "Universal Access", 
                desc: "Accessible, inclusive design that works for everyone, everywhere, on any device.",
                approach: "Design for all"
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-500 border-none bg-muted/20">
                <div className="text-primary mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{item.desc}</p>
                <div className="text-sm font-medium text-primary italic">{item.approach}</div>
              </Card>
            ))}
          </div>

          {/* Philosophy Section */}
          <section className="py-16 border-t border-muted">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-light mb-8">Design Philosophy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Great design is invisible. It serves the user without drawing attention to itself. 
                My approach focuses on clarity, functionality, and the seamless integration of form and purpose.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-semibold mb-3">Principles</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Simplicity over complexity</li>
                    <li>• Function drives form</li>
                    <li>• User needs first</li>
                    <li>• Performance is paramount</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Process</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Research and understand</li>
                    <li>• Prototype and test</li>
                    <li>• Iterate and refine</li>
                    <li>• Launch and optimize</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Work Preview */}
          <section className="py-16">
            <h2 className="text-3xl font-light text-center mb-12">Selected Work</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5"></div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">E-commerce Platform</h3>
                  <p className="text-sm text-muted-foreground">Clean, conversion-focused design with 40% increase in sales</p>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50"></div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">SaaS Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Intuitive interface design that reduced user onboarding time by 60%</p>
                </div>
              </Card>
            </div>
          </section>

          <div className="text-center border-t border-muted pt-16">
            <Link to="/portfolio">
              <Button size="lg" className="mr-4">
                View Complete Portfolio
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Start a Conversation
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
                Specializing in modern web applications that drive business growth and exceed expectations.
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

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
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

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">My Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Custom web applications built with cutting-edge technologies for maximum performance and scalability.",
                features: ["React & Next.js", "TypeScript", "API Integration", "Database Design"]
              },
              {
                title: "UI/UX Design",
                desc: "User-centered design that converts visitors into customers through intuitive interfaces and seamless experiences.",
                features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
              },
              {
                title: "Digital Marketing",
                desc: "Strategic digital marketing solutions that increase visibility, engagement, and drive measurable business results.",
                features: ["SEO Optimization", "Analytics Setup", "Conversion Tracking", "Performance Marketing"]
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How I Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision, goals, and target audience through detailed consultation." },
              { step: "02", title: "Strategy", desc: "Creating a comprehensive plan that aligns technology with your business objectives." },
              { step: "03", title: "Development", desc: "Building your solution with clean code, best practices, and regular progress updates." },
              { step: "04", title: "Launch", desc: "Deploying your project with thorough testing, optimization, and ongoing support." }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with innovative web solutions that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow px-8 py-6 text-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                View Case Studies
              </Button>
            </Link>
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