"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./SectionSix.css";

const circleLines = (size) => {
  return (
    <div
      className="border-circle border-4 border-[#ff981e] rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        zIndex: Math.floor(size / 100), // Larger circles go to the back
      }}
    ></div>
  );
};

const SectionSix = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const circleContainerRef = useRef(null);
  const mobileCircleContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current?.classList.add("animate");
            descriptionRef.current?.classList.add("animate");
            circleContainerRef.current?.classList.add("animate");
            mobileCircleContainerRef.current?.classList.add("animate");
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
    <div ref={sectionRef} className="section-six-container">
      <div className="w-full flex flex-col-reverse lg:flex-row md:flex-row gap-4 justify-between lg:mt-8 md:mt-8 flex-reverse">
        <div
          ref={circleContainerRef}
          className="circle-container lg:w-[40%] md:w-[60%] w-full animate-from-bottom delay-200"
        >
          {circleLines(300)}
          {circleLines(320)}
          {circleLines(340)}
          {circleLines(360)}
          {circleLines(380)}

          <Image
            src="/images/home-section-six-1.png"
            alt="Section six 1 Image"
            width={500}
            height={500}
            className="relative z-10 w-[370px] h-auto circle-image"
          />
        </div>

        <div
          ref={mobileCircleContainerRef}
          className="circle-container-small-mobile lg:w-[60%] md:w-[60%] w-full animate-from-bottom delay-200"
        >
          {circleLines(250)}
          {circleLines(270)}
          {circleLines(290)}
          {circleLines(320)}
          {circleLines(340)}

          <Image
            src="/images/home-section-six-1.png"
            alt="Section six 1 Image"
            width={500}
            height={500}
            className="relative z-10 w-[370px] h-auto circle-image"
          />
        </div>

        <div className="lg:w-[60%] md:w-[40%] md:mt-0  w-full flex flex-col items-center">
          {" "}
          <h1
            ref={titleRef}
            className="font-bold md:mt-[7rem] text-wrap sm:text-3xl text-2xl w-full md:text-left md:text-left text-center animate-from-bottom"
          >
            Find our vaccine center nearest to you
          </h1>
          <p
            ref={descriptionRef}
            className="mt-5 w-full md:text-left md:text-left text-center text-wrap animate-from-bottom delay-100"
          >
            Visit their website for the most up-to-date information on
            availability and locations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
