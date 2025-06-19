"use client";
import { useEffect, useRef } from "react";

export const withScrollAnimation = (WrappedComponent) => {
  return function WithScrollAnimation(props) {
    const componentRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      );

      const animationClasses = [
        'animate-from-bottom',
        'animate-from-left',
        'animate-from-right'
      ];

      animationClasses.forEach(className => {
        const elements = componentRef.current.getElementsByClassName(className);
        Array.from(elements).forEach(element => {
          observer.observe(element);
        });
      });

      return () => observer.disconnect();
    }, []);

    return (
      <div ref={componentRef}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
