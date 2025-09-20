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
    }, 15000); // Auto-rotate every 15 seconds

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

  // Template 1: Original Design with Video Banner
  const Template1 = () => (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <section className="relative overflow-hidden pt-24 pb-16 px-4">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            src="/lovable-uploads/template2-banner.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/80 to-background/60"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Building the{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
              future
            </span>{" "}
            of the web
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            One pixel at a time. I'm{" "}
            <span className="text-cyan-400 font-semibold">Boluwatife Omobuwajo</span>, 
            founder of WebGenyx, crafting exceptional digital experiences that drive results and inspire innovation. 
            With a passion for cutting-edge technology and an eye for stunning design, I transform complex business 
            challenges into elegant, user-friendly solutions that captivate audiences and deliver measurable results.
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

      {/* Journey Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">My Digital Journey</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From writing my first line of code to building enterprise-level applications, my journey has been 
              driven by an insatiable curiosity for technology and a commitment to excellence. Every project 
              teaches me something new, and every challenge becomes an opportunity to innovate and grow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">The Beginning</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My fascination with web development began during my university years when I discovered the power 
                of creating something from nothing—just code, creativity, and determination. What started as a 
                hobby quickly evolved into a passion project, then into freelance work, and eventually into 
                founding WebGenyx.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The early days were filled with late nights, countless tutorials, and the thrill of seeing 
                ideas come to life in the browser. Each successful deployment was a victory, each bug fixed 
                was a lesson learned, and each satisfied client was validation that I was on the right path.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">2020</div>
                  <div className="text-sm text-muted-foreground">Started Coding</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">2021</div>
                  <div className="text-sm text-muted-foreground">First Client</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">2022</div>
                  <div className="text-sm text-muted-foreground">Founded WebGenyx</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">2024</div>
                  <div className="text-sm text-muted-foreground">50+ Projects</div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <h3 className="text-xl font-semibold mb-4">Core Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium mb-1">Innovation First</h4>
                      <p className="text-sm text-muted-foreground">Always exploring new technologies and methodologies to stay ahead of the curve.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium mb-1">Quality Excellence</h4>
                      <p className="text-sm text-muted-foreground">Every line of code is crafted with precision and attention to detail.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium mb-1">Client Success</h4>
                      <p className="text-sm text-muted-foreground">Your success is my success. Every project is a partnership toward your goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium mb-1">Continuous Learning</h4>
                      <p className="text-sm text-muted-foreground">The tech landscape evolves rapidly, and so do I.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">What I Do Best</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            My expertise spans the entire development stack, from pixel-perfect frontend interfaces to robust 
            backend architectures. Here's what I bring to every project:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Code className="h-8 w-8" />, 
                title: "Full-Stack Development", 
                desc: "Building robust web applications with modern technologies like React, Node.js, and cloud platforms. From concept to deployment, I handle every aspect of development with meticulous attention to detail and best practices.",
                skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS", "Vercel"],
                highlight: "End-to-end solutions"
              },
              { 
                icon: <Zap className="h-8 w-8" />, 
                title: "Performance Optimization", 
                desc: "Creating lightning-fast websites that score 95+ on Google PageSpeed. Every millisecond matters in user experience and conversion rates. I optimize everything from code splitting to image delivery.",
                skills: ["Core Web Vitals", "Lazy Loading", "CDN", "Caching", "Bundle Optimization", "Image Optimization"],
                highlight: "Sub-second load times"
              },
              { 
                icon: <Globe className="h-8 w-8" />, 
                title: "Digital Strategy", 
                desc: "Combining technical expertise with business acumen to create solutions that not only look great but drive measurable business growth. Strategy meets execution for maximum impact.",
                skills: ["UX Design", "Analytics", "SEO", "Conversion", "A/B Testing", "Growth Hacking"],
                highlight: "Business-driven results"
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium text-center mb-4">
                  {item.highlight}
                </div>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Technology Arsenal</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            I work with cutting-edge technologies to build scalable, maintainable, and future-proof applications. 
            My tech stack is carefully curated for maximum efficiency and reliability.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                category: "Backend",
                technologies: ["Node.js", "Express", "Python", "FastAPI", "GraphQL", "REST APIs"],
                color: "from-green-500 to-emerald-500"
              },
              {
                category: "Database",
                technologies: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma", "Firebase"],
                color: "from-purple-500 to-pink-500"
              },
              {
                category: "DevOps",
                technologies: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx", "CI/CD"],
                color: "from-orange-500 to-red-500"
              }
            ].map((stack, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stack.color} flex items-center justify-center mb-4 mx-auto`}>
                  <span className="text-white font-bold text-lg">{stack.category[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-center mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="text-sm text-muted-foreground text-center py-1 px-2 bg-muted/50 rounded">
                      {tech}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Proven Track Record</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed", desc: "From startups to enterprises" },
              { number: "25+", label: "Happy Clients", desc: "Across diverse industries" },
              { number: "3+", label: "Years Experience", desc: "Of focused web development" },
              { number: "95%", label: "Client Satisfaction", desc: "Long-term partnerships" }
            ].map((stat, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="mb-6">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "Boluwatife transformed our online presence completely. Our website now converts 3x better and loads incredibly fast. 
                  His attention to detail and technical expertise is unmatched. The project was delivered on time and exceeded all expectations."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">S</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">CEO, TechStart Inc.</div>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <div className="mb-6">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "Working with Boluwatife was a game-changer for our business. He didn't just build a website; 
                  he created a digital experience that our customers love. Sales increased by 200% in the first quarter after launch."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">M</span>
                </div>
                <div>
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">Founder, EcoStore</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">My Development Process</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Every great project starts with understanding. My process is designed to ensure we're aligned 
            from day one and that every milestone brings us closer to your vision.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Discovery & Strategy", 
                desc: "Deep dive into your business goals, target audience, and competitive landscape. We define success metrics and create a comprehensive project roadmap.",
                duration: "1-2 weeks"
              },
              { 
                step: "02", 
                title: "Design & Prototyping", 
                desc: "Creating wireframes, mockups, and interactive prototypes. We iterate on design until every detail aligns with your vision and user needs.",
                duration: "2-3 weeks"
              },
              { 
                step: "03", 
                title: "Development & Testing", 
                desc: "Building your solution with clean, scalable code. Regular updates, code reviews, and testing ensure quality at every step of the process.",
                duration: "3-6 weeks"
              },
              { 
                step: "04", 
                title: "Launch & Optimization", 
                desc: "Deployment with thorough testing, performance optimization, and ongoing support. We monitor metrics and continuously improve based on real user data.",
                duration: "Ongoing"
              }
            ].map((phase, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{phase.desc}</p>
                <div className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {phase.duration}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you're a startup looking to make your mark or an established business ready to level up 
            your digital presence, I'm here to bring your vision to life. Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/portfolio">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
                View My Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Start a Conversation
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Free Consultation</div>
              <div className="text-sm text-muted-foreground">30-minute strategy session</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Quick Turnaround</div>
              <div className="text-sm text-muted-foreground">Most projects start within a week</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Ongoing Support</div>
              <div className="text-sm text-muted-foreground">Post-launch maintenance included</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Template 2: Dark Tech Design
  const Template2 = () => (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-20">
        <video 
          src="/lovable-uploads/template2-custom-banner.mp4" 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-purple-900/60"></div>
      </div>
      
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            Building the{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
              future
            </span>{" "}
            of the web
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            One pixel at a time. I'm{" "}
            <span className="text-cyan-400 font-semibold">Boluwatife Omobuwajo</span>, 
            founder of WebGenyx, crafting exceptional digital experiences that drive 
            results and inspire innovation. With a passion for cutting-edge 
            technology and an eye for stunning design, I transform complex business 
            challenges into elegant, user-friendly solutions that captivate audiences 
            and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/portfolio">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white border-0 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 shadow-2xl hover:shadow-cyan-500/25"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg px-8 py-6"
              >
                Let's Connect
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Features */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Code className="h-8 w-8" />, 
                title: "Modern Development", 
                desc: "Clean, scalable code built with the latest technologies and best practices.",
                tech: ["React", "TypeScript", "Node.js", "Next.js"]
              },
              { 
                icon: <Zap className="h-8 w-8" />, 
                title: "Lightning Fast", 
                desc: "Optimized for performance with sub-second load times and smooth interactions.",
                tech: ["Performance", "Optimization", "Caching", "CDN"]
              },
              { 
                icon: <Globe className="h-8 w-8" />, 
                title: "Global Reach", 
                desc: "Accessible, responsive designs that work perfectly on any device, anywhere.",
                tech: ["Responsive", "PWA", "SEO", "A11y"]
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
                <div className="text-cyan-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white text-center">{item.title}</h3>
                <p className="text-slate-300 mb-6 text-center leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-700/50 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-cyan-400/20 transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Let's collaborate and bring your digital vision to life with cutting-edge technology and stunning design.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white border-0 hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 text-lg px-8 py-6"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Digital Journey Section from Template 1 */}
      <section className="py-20 px-4 bg-slate-800/50 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">My Digital Journey</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              From writing my first line of code to building enterprise-level applications, my journey has been 
              driven by an insatiable curiosity for technology and a commitment to excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">The Beginning</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                My fascination with web development began during my university years when I discovered the power 
                of creating something from nothing—just code, creativity, and determination.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-700/80 backdrop-blur-sm rounded-lg border border-slate-600">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">2020</div>
                  <div className="text-sm text-slate-300">Started Coding</div>
                </div>
                <div className="text-center p-4 bg-slate-700/80 backdrop-blur-sm rounded-lg border border-slate-600">
                  <div className="text-2xl font-bold text-purple-400 mb-2">2021</div>
                  <div className="text-sm text-slate-300">First Client</div>
                </div>
                <div className="text-center p-4 bg-slate-700/80 backdrop-blur-sm rounded-lg border border-slate-600">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">2022</div>
                  <div className="text-sm text-slate-300">Founded WebGenyx</div>
                </div>
                <div className="text-center p-4 bg-slate-700/80 backdrop-blur-sm rounded-lg border border-slate-600">
                  <div className="text-2xl font-bold text-purple-400 mb-2">2024</div>
                  <div className="text-sm text-slate-300">50+ Projects</div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-8 bg-slate-700/80 backdrop-blur-sm border border-slate-600">
                <h3 className="text-xl font-semibold mb-4 text-white">Core Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium mb-1 text-white">Innovation First</h4>
                      <p className="text-sm text-slate-300">Always exploring new technologies and methodologies to stay ahead of the curve.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium mb-1 text-white">Quality Excellence</h4>
                      <p className="text-sm text-slate-300">Delivering exceptional results that exceed expectations and drive business growth.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium mb-1 text-white">Client Partnership</h4>
                      <p className="text-sm text-slate-300">Building lasting relationships through collaboration and transparent communication.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Template 3: Original Design with Video Banner (Like Template 1)
  const Template3 = () => (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <section className="relative overflow-hidden pt-24 pb-16 px-4">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            src="/lovable-uploads/template2-banner.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/80 to-background/60"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Building the{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
              future
            </span>{" "}
            of the web
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            One pixel at a time. I'm{" "}
            <span className="text-cyan-400 font-semibold">Boluwatife Omobuwajo</span>, 
            founder of WebGenyx, crafting exceptional digital experiences that drive results and inspire innovation. 
            With a passion for cutting-edge technology and an eye for stunning design, I transform complex business 
            challenges into elegant, user-friendly solutions that captivate audiences and deliver measurable results.
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

      {/* Journey Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">My Digital Journey</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From writing my first line of code to building enterprise-level applications, my journey has been 
              driven by an insatiable curiosity for technology and a commitment to excellence. Every project 
              teaches me something new, and every challenge becomes an opportunity to innovate and grow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">The Beginning</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My fascination with web development began during my university years when I discovered the power 
                of creating something from nothing—just code, creativity, and determination. What started as a 
                hobby quickly evolved into a passion project, then into freelance work, and eventually into 
                founding WebGenyx.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The early days were filled with late nights, countless tutorials, and the thrill of seeing 
                ideas come to life in the browser. Each successful deployment was a victory, each bug fixed 
                was a lesson learned, and each satisfied client was validation that I was on the right path.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">2020</div>
                  <div className="text-sm text-muted-foreground">Started Coding</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">2021</div>
                  <div className="text-sm text-muted-foreground">First Client</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">2022</div>
                  <div className="text-sm text-muted-foreground">Founded WebGenyx</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">2024</div>
                  <div className="text-sm text-muted-foreground">50+ Projects</div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <h3 className="text-xl font-semibold mb-4">Core Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium mb-1">Innovation First</h4>
                      <p className="text-sm text-muted-foreground">Always exploring new technologies and methodologies to stay ahead of the curve.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium mb-1">Quality Excellence</h4>
                      <p className="text-sm text-muted-foreground">Every line of code is crafted with precision and attention to detail.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium mb-1">Client Success</h4>
                      <p className="text-sm text-muted-foreground">Your success is my success. Every project is a partnership toward your goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium mb-1">Continuous Learning</h4>
                      <p className="text-sm text-muted-foreground">The tech landscape evolves rapidly, and so do I.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">What I Do Best</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            My expertise spans the entire development stack, from pixel-perfect frontend interfaces to robust 
            backend architectures. Here's what I bring to every project:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Code className="h-8 w-8" />, 
                title: "Full-Stack Development", 
                desc: "Building robust web applications with modern technologies like React, Node.js, and cloud platforms. From concept to deployment, I handle every aspect of development with meticulous attention to detail and best practices.",
                skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS", "Vercel"],
                highlight: "End-to-end solutions"
              },
              { 
                icon: <Zap className="h-8 w-8" />, 
                title: "Performance Optimization", 
                desc: "Creating lightning-fast websites that score 95+ on Google PageSpeed. Every millisecond matters in user experience and conversion rates. I optimize everything from code splitting to image delivery.",
                skills: ["Core Web Vitals", "Lazy Loading", "CDN", "Caching", "Bundle Optimization", "Image Optimization"],
                highlight: "Sub-second load times"
              },
              { 
                icon: <Globe className="h-8 w-8" />, 
                title: "Digital Strategy", 
                desc: "Combining technical expertise with business acumen to create solutions that not only look great but drive measurable business growth. Strategy meets execution for maximum impact.",
                skills: ["UX Design", "Analytics", "SEO", "Conversion", "A/B Testing", "Growth Hacking"],
                highlight: "Business-driven results"
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium text-center mb-4">
                  {item.highlight}
                </div>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Technology Arsenal</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            I work with cutting-edge technologies to build scalable, maintainable, and future-proof applications. 
            My tech stack is carefully curated for maximum efficiency and reliability.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                category: "Backend",
                technologies: ["Node.js", "Express", "Python", "FastAPI", "GraphQL", "REST APIs"],
                color: "from-green-500 to-emerald-500"
              },
              {
                category: "Database",
                technologies: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma", "Firebase"],
                color: "from-purple-500 to-pink-500"
              },
              {
                category: "DevOps",
                technologies: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx", "CI/CD"],
                color: "from-orange-500 to-red-500"
              }
            ].map((stack, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stack.color} flex items-center justify-center mb-4 mx-auto`}>
                  <span className="text-white font-bold text-lg">{stack.category[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-center mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="text-sm text-muted-foreground text-center py-1 px-2 bg-muted/50 rounded">
                      {tech}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Proven Track Record</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed", desc: "From startups to enterprises" },
              { number: "25+", label: "Happy Clients", desc: "Across diverse industries" },
              { number: "3+", label: "Years Experience", desc: "Of focused web development" },
              { number: "95%", label: "Client Satisfaction", desc: "Long-term partnerships" }
            ].map((stat, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="mb-6">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "Boluwatife transformed our online presence completely. Our website now converts 3x better and loads incredibly fast. 
                  His attention to detail and technical expertise is unmatched. The project was delivered on time and exceeded all expectations."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">S</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">CEO, TechStart Inc.</div>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <div className="mb-6">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "Working with Boluwatife was a game-changer for our business. He didn't just build a website; 
                  he created a digital experience that our customers love. Sales increased by 200% in the first quarter after launch."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">M</span>
                </div>
                <div>
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">Founder, EcoStore</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">My Development Process</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Every great project starts with understanding. My process is designed to ensure we're aligned 
            from day one and that every milestone brings us closer to your vision.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Discovery & Strategy", 
                desc: "We start by understanding your business goals, target audience, and technical requirements. This foundation ensures everything we build serves a purpose.",
                icon: <Globe className="h-6 w-6" />
              },
              { 
                step: "02", 
                title: "Design & Planning", 
                desc: "Creating wireframes, mockups, and technical architecture. Every detail is planned before a single line of code is written.",
                icon: <Code className="h-6 w-6" />
              },
              { 
                step: "03", 
                title: "Development & Testing", 
                desc: "Building your solution with clean, maintainable code. Rigorous testing ensures everything works perfectly across all devices and browsers.",
                icon: <Zap className="h-6 w-6" />
              },
              { 
                step: "04", 
                title: "Launch & Optimization", 
                desc: "Deploying your project with monitoring and analytics in place. Post-launch optimization ensures peak performance and continuous improvement.",
                icon: <Star className="h-6 w-6" />
              }
            ].map((step, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-4">{step.step}</div>
                <div className="text-primary mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's turn your vision into reality. Whether you need a complete web application, 
            performance optimization, or strategic digital guidance, I'm here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                View My Work
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
              className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                currentTemplate === index
                  ? "bg-gradient-primary scale-125 shadow-glow"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
              }`}
            >
              {currentTemplate === index && (
                <div className="absolute inset-0 rounded-full bg-gradient-primary animate-pulse opacity-50" />
              )}
              <span className="sr-only">Template {index + 1}</span>
            </button>
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