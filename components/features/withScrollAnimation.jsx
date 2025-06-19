"use client";
import { useEffect, useRef } from "react";

export const withScrollAnimation = (WrappedComponent) => {
  return function WithScrollAnimation(props) {
    const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const animatedElements = sectionRef.current.querySelectorAll(
                ".animate-from-bottom"
              );
              animatedElements.forEach((element) => {
                element.classList.add("animate");
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div ref={sectionRef}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
