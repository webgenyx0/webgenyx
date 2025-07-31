import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [loaded, setLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "webgenyx0@gmail.com",
      link: "mailto:webgenyx0@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+234 (0) 123 456 789",
      link: "tel:+2340123456789"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Lagos, Nigeria",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/webgenyx"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/webgenyx"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "https://twitter.com/webgenyx"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's{" "}
              <span className="hero-text">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Have a project in mind? Want to collaborate? Or just want to say hello? 
              I'd love to hear from you. Let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card p-8 animate-fade-in-left">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium mb-2 block">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium mb-2 block">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm font-medium mb-2 block">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                  placeholder="Let's discuss your project"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project, goals, and how I can help you achieve them..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="animate-fade-in-right" style={{animationDelay: '300ms'}}>
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            
            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="glass-card p-6 hover-glow cursor-pointer group animate-scale-in"
                  style={{animationDelay: `${(index + 1) * 200}ms`}}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{info.value}</span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="animate-scale-in" style={{animationDelay: '800ms'}}>
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="glass-card p-6 mt-8 animate-fade-in-up" style={{animationDelay: '1000ms'}}>
              <h3 className="text-lg font-semibold mb-3">Availability</h3>
              <p className="text-muted-foreground mb-4">
                I'm currently available for new projects and collaborations. 
                I typically respond to messages within 24 hours.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                <span className="text-sm text-neon-green font-medium">Available for work</span>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 px-4 webgenyx-gradient-surface">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in-up">
            Frequently Asked{" "}
            <span className="hero-text">Questions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most websites take 2-6 weeks from start to finish. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide and am comfortable with remote collaboration across different time zones."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in modern web technologies including React, Next.js, TypeScript, Tailwind CSS, and various backend technologies."
              },
              {
                question: "Do you provide ongoing maintenance?",
                answer: "Yes, I offer ongoing maintenance and support packages to keep your website secure, updated, and performing optimally."
              }
            ].map((faq, index) => (
              <Card 
                key={index}
                className="glass-card p-6 hover-glow animate-scale-in"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;