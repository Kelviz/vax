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

      const elements = componentRef.current.getElementsByClassName(
        "animate-from-bottom"
      );
      Array.from(elements).forEach((element) => {
        observer.observe(element);
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
