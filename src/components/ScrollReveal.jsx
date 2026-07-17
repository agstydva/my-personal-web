import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
  children,
  animation = 'fade-up',
  duration = 1000,
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animated, we don't need to observe anymore
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
      case 'fade-down':
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12';
      case 'fade-left':
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12';
      case 'fade-right':
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12';
      case 'zoom-in':
        return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
      case 'zoom-out':
        return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105';
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
  };

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${getAnimationClass()} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
