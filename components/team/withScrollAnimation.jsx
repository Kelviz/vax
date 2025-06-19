"use client";
import { useEffect, useRef } from "react";
import "./animations.css";

const withScrollAnimation = (WrappedComponent) => {
  return function WithScrollAnimationComponent(props) {
    const componentRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const animatedElements = entry.target.querySelectorAll(
                ".animate-from-bottom"
              );
              animatedElements.forEach((element) => {
                element.classList.add("in-view");
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      if (componentRef.current) {
        observer.observe(componentRef.current);
      }

      return () => {
        if (componentRef.current) {
          observer.unobserve(componentRef.current);
        }
      };
    }, []);

    return (
      <div ref={componentRef}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withScrollAnimation;
