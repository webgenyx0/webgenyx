import { useEffect, useRef, useState } from "react";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollAnimationWrapper = ({ 
  children, 
  className = "", 
  delay = 0 
}: ScrollAnimationWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`scroll-fade-in ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;