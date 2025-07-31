import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const BlogPost = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: `
      <p>Web development is an ever-evolving field, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with web applications. In this comprehensive guide, we'll explore the most significant trends that developers should be aware of.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the way we write code. From GitHub Copilot to ChatGPT, AI tools are becoming essential companions for developers, helping with everything from code generation to debugging and optimization.</p>

      <h3>Key Benefits:</h3>
      <ul>
        <li>Faster code generation and completion</li>
        <li>Intelligent debugging assistance</li>
        <li>Automated code optimization</li>
        <li>Enhanced documentation generation</li>
      </ul>

      <h2>2. Web Components and Micro Frontends</h2>
      <p>The trend toward modularity continues with web components and micro frontend architectures gaining popularity. These approaches allow teams to build more maintainable and scalable applications.</p>

      <blockquote>
        "The future of web development lies in composable, reusable components that can work across different frameworks and technologies."
      </blockquote>

      <h2>3. Performance-First Development</h2>
      <p>With Core Web Vitals becoming increasingly important for SEO, performance-first development is no longer optional. Developers are focusing on:</p>

      <ul>
        <li>Optimizing Largest Contentful Paint (LCP)</li>
        <li>Minimizing Cumulative Layout Shift (CLS)</li>
        <li>Reducing First Input Delay (FID)</li>
      </ul>

      <h2>4. Advanced CSS Features</h2>
      <p>CSS continues to evolve with powerful new features like container queries, cascade layers, and advanced grid capabilities that give developers more control over layouts and responsive design.</p>

      <h2>5. Sustainable Web Development</h2>
      <p>Environmental consciousness is driving the adoption of sustainable web development practices. This includes optimizing for energy efficiency, reducing carbon footprints, and building lighter, faster websites.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is bright, with exciting technologies and methodologies on the horizon. By staying current with these trends, developers can build better, faster, and more sustainable web applications that provide exceptional user experiences.</p>

      <p>What trends are you most excited about? Let me know in the comments or reach out on social media!</p>
    `,
    author: "Boluwatife Omobuwajo",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "AI", "Trends", "Future", "Performance"],
    image: "/blog-future-web-dev.jpg"
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Building Performant React Applications: Best Practices",
      excerpt: "A comprehensive guide to optimizing React applications for maximum performance.",
      category: "React",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Which?",
      excerpt: "Understanding the differences and knowing when to use each layout method.",
      category: "CSS",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/blog">
          <Button 
            variant="ghost" 
            className="hover:bg-primary/10 transition-all duration-300 animate-fade-in"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className={`relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden bg-gradient-surface transition-all duration-1000 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-primary opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold text-primary/70">Article Hero Image</div>
            </div>
          </div>

          {/* Article Meta */}
          <div className="mb-8 animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <Badge variant="outline" className="mb-4">
              {blogPost.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{blogPost.readTime}</span>
              </div>
              <div className="flex items-center">
                <span>By {blogPost.author}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {blogPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm"
              className="neon-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share Article
            </Button>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary animate-fade-in-up"
            style={{animationDelay: '400ms'}}
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Author Bio */}
          <Card className="glass-card p-6 mt-12 animate-fade-in-up" style={{animationDelay: '600ms'}}>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                BO
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Boluwatife Omobuwajo</h3>
                <p className="text-muted-foreground mb-4">
                  Founder of WebGenyx and passionate web developer with 4+ years of experience 
                  creating exceptional digital experiences. Specializing in React, TypeScript, 
                  and modern web technologies.
                </p>
                <div className="flex gap-2">
                  <Link to="/about">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="sm">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 px-4 webgenyx-gradient-surface">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
            Related{" "}
            <span className="hero-text">Articles</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="glass-card p-6 hover-glow cursor-pointer animate-scale-in"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <Badge variant="outline" className="mb-3">
                  {post.category}
                </Badge>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Let's discuss how we can bring your ideas to life with modern web technologies 
            and exceptional design.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 animate-bounce-in"
              style={{animationDelay: '400ms'}}
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;