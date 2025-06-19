"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./FeatureHero.css";
import "../animations.css";
import Navbar from "../../navbar/Navbar";
import MobileNav from "../../navbar/MobileNav";
const FeatureHero = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const circleImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contentRef.current?.classList.add("animate");
            imageRef.current?.classList.add("animate");
            circleImageRef.current?.classList.add("animate");
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
    <div ref={sectionRef} className="feature-hero-container">
      <div className="feature-hero-navbar">
        <Navbar imgUrl={`/images/logo-white.png`} textColor={`text-white`} />
        <MobileNav
          logoUrl={`/images/logo-white.png`}
          textColor={`text-white`}
        />
      </div>

      <div className="w-full flex feature-hero-contents justify-between relative lg:mt-[5rem] md:mt-[3rem] mt-[2rem] lg:flex-row md:flex-row flex-col">
        <div
          ref={contentRef}
          className="lg:w-[40%] md:w-[40%] pr-14 w-full flex flex-col animate-from-bottom"
        >
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white">
            Easy access to Innovations and Solutions for You and your Baby
          </h1>
          <p className="mt-4 lg:text-lg md:text-md text-[14px] text-white">
            Trust the science for you and your loved ones health and medical
            wellbeing. For a better, easier and healtheir living.
          </p>
          <button className="w-[50%] mt-5 text-white rounded-full bg-[#FF981E] border border-gray-300 px-4 lg:py-4 md:py-4 py-3 font-bold text-center">
            Get Started
          </button>
        </div>

        <div className="lg:w-[60%] md:w-[60%] w-[100%] mt-14 lg:mt-0 md:mt-0 h-full flex justify-end relative">
          <Image
            src="/images/featurehero-1.png"
            alt="Feature Hero Image"
            width={500}
            height={500}
            ref={imageRef}
            className="w-[400px] h-[457px] feature-hero-image feature-hero-img1 shadow-lg z-10 animate-from-bottom delay-200"
          />

          <Image
            src="/images/featurehero-2.png"
            alt="Feature Hero Image"
            width={500}
            height={500}
            ref={circleImageRef}
            className="h-[200px] w-[200px] feature-hero-image feature-hero-img2 border-6 border-[#FF981E] right-[320px] top-[130px] absolute shadow-lg z-10 rounded-full animate-from-bottom delay-300"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureHero;
