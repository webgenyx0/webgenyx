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
    }, 360000); // Change template every 6 minutes

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
            <p className="text-2xl text-muted-foreground mb-12 font-light max-w-3xl mx-auto">
              Web Developer & Digital Craftsman specializing in clean, purposeful design that prioritizes user experience above all else. 
              I believe in the power of simplicity, where every element serves a purpose and every interaction feels natural and intuitive.
            </p>
          </div>
          
          {/* Core Philosophy */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-8">The Art of Simplicity</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                In a world overwhelmed by digital noise, I create spaces of clarity. My work is guided by the belief that 
                the best interfaces are the ones you don't notice—they simply work, elegantly and efficiently.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              {[
                { 
                  icon: <Code className="h-8 w-8" />, 
                  title: "Clean Development", 
                  desc: "Writing maintainable, semantic code that stands the test of time. Every line has purpose, every function has clarity. I believe in crafting code that reads like poetry—beautiful, meaningful, and enduring.",
                  approach: "Less is more",
                  details: ["Semantic HTML", "Modern CSS", "Clean Architecture", "Minimal Dependencies"]
                },
                { 
                  icon: <Zap className="h-8 w-8" />, 
                  title: "Peak Performance", 
                  desc: "Optimized for speed and efficiency. Sites that load instantly and feel responsive. Performance isn't just a metric—it's a user experience philosophy that respects people's time and attention.",
                  approach: "Speed matters",
                  details: ["Sub-second loads", "Optimized assets", "Lazy loading", "Efficient caching"]
                },
                { 
                  icon: <Globe className="h-8 w-8" />, 
                  title: "Universal Access", 
                  desc: "Accessible, inclusive design that works for everyone, everywhere, on any device. Good design should never exclude—it should welcome and embrace all users with equal grace.",
                  approach: "Design for all",
                  details: ["WCAG compliance", "Mobile-first", "Cross-browser", "Keyboard navigation"]
                }
              ].map((item, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-500 border-none bg-muted/20 group">
                  <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.desc}</p>
                  <div className="text-sm font-medium text-primary italic mb-4">{item.approach}</div>
                  <div className="space-y-1">
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-xs text-muted-foreground bg-muted/50 rounded px-2 py-1">
                        {detail}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Methodology Section */}
          <section className="py-20 border-t border-muted">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-light text-center mb-16">Design Methodology</h2>
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-2xl font-light mb-8">Philosophy</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Great design is invisible. It serves the user without drawing attention to itself. 
                    My approach focuses on clarity, functionality, and the seamless integration of form and purpose.
                    Every pixel is intentional, every interaction is meaningful.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Core Principles</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Simplicity over complexity—remove until you can't remove anymore</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Function drives form—every visual decision serves a purpose</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>User needs first—empathy guides every design choice</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Performance is paramount—speed is a feature, not a bonus</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-8">Process</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Every project begins with deep understanding. I don't just build what you ask for—I explore 
                    what you actually need. Through research, iteration, and refinement, we discover the essence 
                    of your vision.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Workflow</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Research and understand—deep dive into user needs and business goals</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Prototype and test—rapid iteration with real user feedback</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Iterate and refine—continuous improvement until perfection</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Launch and optimize—ongoing refinement based on real data</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Minimal Stats */}
          <section className="py-20 border-t border-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light text-center mb-16">By the Numbers</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "50+", label: "Projects", sublabel: "Crafted with care" },
                  { number: "25+", label: "Clients", sublabel: "Trusted partnerships" },
                  { number: "95%", label: "Satisfaction", sublabel: "Proven results" },
                  { number: "3+", label: "Years", sublabel: "Focused expertise" }
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-5xl font-light text-primary mb-2">{stat.number}</div>
                    <div className="font-medium mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Work Preview */}
          <section className="py-20 border-t border-muted">
            <h2 className="text-3xl font-light text-center mb-8">Selected Work</h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Each project is a study in restraint and purpose. These examples showcase how minimalist 
              principles can create maximum impact.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/15 group-hover:to-primary/10 transition-all duration-500"></div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">E-commerce Platform</h3>
                  <p className="text-sm text-muted-foreground mb-4">Clean, conversion-focused design with 40% increase in sales</p>
                  <div className="text-xs text-muted-foreground">Minimalist • E-commerce • Conversion</div>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50 group-hover:from-muted/80 group-hover:to-muted/30 transition-all duration-500"></div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">SaaS Dashboard</h3>
                  <p className="text-sm text-muted-foreground mb-4">Intuitive interface design that reduced user onboarding time by 60%</p>
                  <div className="text-xs text-muted-foreground">Dashboard • SaaS • UX/UI</div>
                </div>
              </Card>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
                <div className="h-48 bg-gradient-to-br from-primary/5 to-muted/20 group-hover:from-primary/10 group-hover:to-muted/40 transition-all duration-500"></div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Portfolio Website</h3>
                  <p className="text-sm text-muted-foreground mb-4">Elegant showcase that increased client inquiries by 80%</p>
                  <div className="text-xs text-muted-foreground">Portfolio • Creative • Minimal</div>
                </div>
              </Card>
            </div>
          </section>

          {/* Testimonial */}
          <section className="py-20 border-t border-muted">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl font-light text-muted-foreground italic mb-8 leading-relaxed">
                "Boluwatife's minimalist approach transformed our complex product into something beautifully simple. 
                Our users finally understand what we do, and our conversion rates have tripled."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">E</span>
                </div>
                <div className="text-left">
                  <div className="font-medium">Elena Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Head of Product, TechFlow</div>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center border-t border-muted pt-20">
            <h2 className="text-3xl font-light mb-8">Ready to simplify?</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's strip away the unnecessary and focus on what truly matters—creating experiences 
              that serve your users and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button size="lg" className="font-light">
                  View Complete Portfolio
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="font-light">
                  Start a Conversation
                </Button>
              </Link>
            </div>
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
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 animate-pulse">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Available for Projects</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Creative{" "}
                <span className="hero-text bg-gradient-to-r from-primary via-neon-cyan to-neon-purple bg-clip-text text-transparent animate-gradient">
                  Web Solutions
                </span>{" "}
                That Convert
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transforming bold ideas into powerful digital experiences that captivate, engage, and convert. 
                I specialize in creating modern web applications that don't just look stunning—they drive real business growth, 
                exceed performance expectations, and set new standards in your industry.
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
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-semibold">95% Success Rate</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/portfolio">
                  <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
                    See My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Start a Project
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-card border rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Latest Achievement</h3>
                <p className="text-muted-foreground mb-4">
                  "Delivered a 300% increase in conversion rates for our latest client project—exceeding industry benchmarks 
                  and setting new performance standards."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">B</span>
                  </div>
                  <div>
                    <p className="font-semibold">Boluwatife Omobuwajo</p>
                    <p className="text-sm text-muted-foreground">Founder, WebGenyx</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-cyan/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 via-background to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Driving Real Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every project I undertake is designed to deliver measurable results. Here's how my work creates value for businesses:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "300%",
                label: "Average Conversion Increase",
                description: "Strategic design and optimization that turns visitors into customers",
                icon: "📈"
              },
              {
                metric: "95+",
                label: "PageSpeed Score",
                description: "Lightning-fast performance that Google and users love",
                icon: "⚡"
              },
              {
                metric: "40%",
                label: "Bounce Rate Reduction",
                description: "Engaging experiences that keep users on your site longer",
                icon: "🎯"
              }
            ].map((impact, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50">
                <div className="text-4xl mb-4">{impact.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">{impact.metric}</div>
                <h3 className="text-lg font-semibold mb-3">{impact.label}</h3>
                <p className="text-muted-foreground text-sm">{impact.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">My Expertise</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            I offer comprehensive digital solutions that cover every aspect of your online presence. 
            From strategy to implementation, I ensure your project succeeds at every level.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Custom web applications built with cutting-edge technologies for maximum performance and scalability. I create robust solutions that grow with your business and adapt to changing needs.",
                features: ["React & Next.js", "TypeScript", "API Integration", "Database Design", "Cloud Deployment", "Performance Optimization"],
                highlight: "Full-Stack Excellence"
              },
              {
                title: "UI/UX Design",
                desc: "User-centered design that converts visitors into customers through intuitive interfaces and seamless experiences. Every interaction is carefully crafted to guide users toward your goals.",
                features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing", "Conversion Optimization"],
                highlight: "Design That Converts"
              },
              {
                title: "Digital Strategy",
                desc: "Strategic digital marketing solutions that increase visibility, engagement, and drive measurable business results. I combine technical expertise with marketing know-how for maximum impact.",
                features: ["SEO Optimization", "Analytics Setup", "Conversion Tracking", "Performance Marketing", "Growth Hacking", "A/B Testing"],
                highlight: "Results-Driven Growth"
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card border-primary/10 group">
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-primary/80 transition-colors">{service.title}</h3>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block">
                  {service.highlight}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3">
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

      {/* Technology Showcase */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Cutting-Edge Technology Stack</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            I work with the latest and most powerful technologies to ensure your project is built for the future, 
            not just today's requirements.
          </p>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              {
                category: "Frontend",
                icon: "🎨",
                technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                category: "Backend",
                icon: "⚙️",
                technologies: ["Node.js", "Express", "Python", "FastAPI", "GraphQL", "REST APIs"],
                color: "from-green-500 to-emerald-500"
              },
              {
                category: "Database",
                icon: "💾",
                technologies: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma", "Firebase"],
                color: "from-purple-500 to-pink-500"
              },
              {
                category: "DevOps",
                icon: "🚀",
                technologies: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx", "CI/CD"],
                color: "from-orange-500 to-red-500"
              }
            ].map((stack, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stack.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{stack.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-center mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="text-sm text-muted-foreground text-center py-1 px-2 bg-muted/50 rounded hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tech}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Success Stories</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Real projects, real results. Here's how I've helped businesses transform their digital presence:
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                project: "E-commerce Revolution",
                client: "Fashion Retailer",
                result: "300% increase in sales",
                description: "Complete redesign and optimization of online store resulted in dramatic sales growth",
                metrics: ["95% PageSpeed Score", "60% Bounce Rate Reduction", "2.5x Session Duration"],
                technology: "React, Node.js, PostgreSQL"
              },
              {
                project: "SaaS Dashboard Transformation",
                client: "Tech Startup",
                result: "40% user engagement boost",
                description: "Intuitive dashboard design that simplified complex data and improved user experience",
                metrics: ["50% Faster Onboarding", "95% User Satisfaction", "30% Feature Adoption"],
                technology: "Next.js, TypeScript, Supabase"
              }
            ].map((caseStudy, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-primary">{caseStudy.client}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{caseStudy.project}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{caseStudy.result}</div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{caseStudy.description}</p>
                <div className="space-y-2 mb-4">
                  {caseStudy.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground bg-muted/50 rounded px-3 py-2">
                  Tech Stack: {caseStudy.technology}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">How I Work</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            My process is designed for maximum efficiency and collaboration. Every step is transparent, 
            measurable, and focused on delivering results that exceed your expectations.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Discovery", 
                desc: "Understanding your vision, goals, and target audience through detailed consultation and market research.",
                duration: "1 week",
                deliverables: "Strategy document, wireframes, project timeline"
              },
              { 
                step: "02", 
                title: "Strategy", 
                desc: "Creating a comprehensive plan that aligns technology with your business objectives and user needs.",
                duration: "1-2 weeks",
                deliverables: "Technical specification, design mockups, development roadmap"
              },
              { 
                step: "03", 
                title: "Development", 
                desc: "Building your solution with clean code, best practices, and regular progress updates.",
                duration: "2-6 weeks",
                deliverables: "Working application, documentation, testing reports"
              },
              { 
                step: "04", 
                title: "Launch", 
                desc: "Deploying your project with thorough testing, optimization, and ongoing support.",
                duration: "Ongoing",
                deliverables: "Live website, analytics setup, maintenance plan"
              }
            ].map((phase, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{phase.desc}</p>
                <div className="space-y-2">
                  <div className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Duration: {phase.duration}
                  </div>
                  <div className="text-xs text-muted-foreground bg-primary/10 rounded px-2 py-1">
                    {phase.deliverables}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Boluwatife didn't just build us a website—he transformed our entire digital strategy. Our online sales increased by 400% in just three months.",
                author: "Jessica Martinez",
                role: "CEO, StyleHub Fashion",
                avatar: "J"
              },
              {
                quote: "The level of attention to detail and technical expertise is unmatched. Our app now performs flawlessly and our users love the new interface.",
                author: "David Thompson",
                role: "CTO, DataFlow Solutions",
                avatar: "D"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's discuss how we can bring your boldest vision to life with innovative web solutions that drive real business results. 
            Your success story starts with a single conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                View Case Studies
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Free Strategy Call</div>
              <div className="text-sm text-muted-foreground">45-minute consultation to discuss your project</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Fast Delivery</div>
              <div className="text-sm text-muted-foreground">Most projects launch within 2-6 weeks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Full Support</div>
              <div className="text-sm text-muted-foreground">Ongoing maintenance and optimization included</div>
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