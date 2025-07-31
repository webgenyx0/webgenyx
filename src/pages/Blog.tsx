import { useState, useEffect } from "react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Blog = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Exploring the latest trends and technologies that are shaping the future of web development, from AI integration to advanced web frameworks.",
      content: "Full article content here...",
      author: "Boluwatife Omobuwajo",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      tags: ["React", "AI", "Trends", "Future"],
      featured: true,
      image: "/blog-future-web-dev.jpg"
    },
    {
      id: 2,
      title: "Building Performant React Applications: Best Practices",
      excerpt: "A comprehensive guide to optimizing React applications for maximum performance, covering code splitting, lazy loading, and more.",
      content: "Full article content here...",
      author: "Boluwatife Omobuwajo",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "React",
      tags: ["React", "Performance", "Optimization"],
      featured: true,
      image: "/blog-react-performance.jpg"
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Which?",
      excerpt: "Understanding the differences between CSS Grid and Flexbox, and knowing when to use each layout method for optimal results.",
      content: "Full article content here...",
      author: "Boluwatife Omobuwajo",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "CSS",
      tags: ["CSS", "Grid", "Flexbox", "Layout"],
      featured: false,
      image: "/blog-css-grid-flexbox.jpg"
    },
    {
      id: 4,
      title: "TypeScript for Beginners: A Comprehensive Guide",
      excerpt: "Getting started with TypeScript and understanding how it can improve your JavaScript development workflow.",
      content: "Full article content here...",
      author: "Boluwatife Omobuwajo",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Beginner"],
      featured: false,
      image: "/blog-typescript-guide.jpg"
    },
    {
      id: 5,
      title: "The Art of Responsive Web Design",
      excerpt: "Mastering responsive design principles to create websites that look great on any device.",
      content: "Full article content here...",
      author: "Boluwatife Omobuwajo",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Design",
      tags: ["Responsive", "Design", "Mobile", "UX"],
      featured: false,
      image: "/blog-responsive-design.jpg"
    },
    {
      id: 6,
      title: "SEO Best Practices for Modern Websites",
      excerpt: "Essential SEO strategies to improve your website's visibility and ranking in search engines.",
      content: "Full article content here...",
      author: "Boluwatife Omobuwajo",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "SEO",
      tags: ["SEO", "Marketing", "Optimization"],
      featured: false,
      image: "/blog-seo-practices.jpg"
    }
  ];

  const categories = ["All", "Web Development", "React", "CSS", "TypeScript", "Design", "SEO"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WebGenyx{" "}
              <span className="hero-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Insights, tutorials, and thoughts on web development, design, and technology. 
              Stay updated with the latest trends and best practices in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-up">
            Featured{" "}
            <span className="hero-text">Articles</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="glass-card overflow-hidden hover-glow group cursor-pointer animate-scale-in"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="relative h-64 bg-gradient-surface overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-3xl font-bold text-primary/50">Featured Article</div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <Button 
                      variant="outline" 
                      className="w-full neon-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 px-4 webgenyx-gradient-surface">
        <div className="container mx-auto">
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap items-center gap-2 bg-background/50 backdrop-blur-sm rounded-lg p-2">
              <Tag className="h-5 w-5 text-muted-foreground mr-2" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={`transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "hover:bg-primary/10"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* All Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="glass-card overflow-hidden hover-glow group cursor-pointer animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative h-48 bg-gradient-surface overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xl font-bold text-primary/50">Article Image</div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  {post.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full neon-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                    >
                      Read More
                      <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="glass-card p-8 max-w-2xl mx-auto animate-scale-in">
            <h2 className="text-3xl font-bold mb-4">
              Stay{" "}
              <span className="hero-text">Updated</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to get notified about new articles, tutorials, and insights 
              on web development and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8"
              >
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;