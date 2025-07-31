import { Facebook, Instagram, Twitter, Video, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?viewas=100000686899395&id=61578920758292",
      icon: <Facebook className="h-5 w-5" />
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/webgenyx/",
      icon: <Instagram className="h-5 w-5" />
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@webgenyx",
      icon: <Video className="h-5 w-5" />
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/WGenyx",
      icon: <Twitter className="h-5 w-5" />
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.com/webgenyx0/",
      icon: <Palette className="h-5 w-5" />
    }
  ];

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-darker-surface border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/c82e3ca3-1621-43d7-804f-3a4ae14125b4.png" 
                alt="WebGenyx Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Building the future of the web, one pixel at a time. Creating exceptional digital experiences that drive results and inspire innovation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 backdrop-blur-md border border-border/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>Ready to start your project?</p>
              <a 
                href="mailto:webgenyx0@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors duration-300"
              >
                webgenyx0@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} WebGenyx. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with ❤️ by <span className="text-primary">Boluwatife Omobuwajo</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;