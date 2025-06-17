"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./SectionFive.css";

const SectionFive = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const firstItemRef = useRef(null);
  const secondItemRef = useRef(null);
  const thirdItemRef = useRef(null);
  const firstDotsRef = useRef(null);
  const secondDotsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current?.classList.add("animate");
            firstItemRef.current?.classList.add("animate");
            secondItemRef.current?.classList.add("animate");
            thirdItemRef.current?.classList.add("animate");
            firstDotsRef.current?.classList.add("animate");
            secondDotsRef.current?.classList.add("animate");
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
    <div ref={sectionRef} className="section-five-container">
      <h1
        ref={titleRef}
        className="font-bold md:lg:text-3xl text-xl animate-from-bottom"
      >
        How it works
      </h1>
      <div className="section-five-content mt-14">
        <div
          ref={firstItemRef}
          className="w-[30%] section-five-container-image lg:w-[20%] md:w-[37%] flex flex-col items-center justify-center animate-from-bottom delay-100"
        >
          <Image
            src="/images/home-hero-2.png"
            alt="Section five 1 Image"
            width={500}
            height={500}
            className="w-[100%] section-five-image"
          />

          <p className="mt-3 text-white text-center">Download our App</p>
        </div>
        <div className="w-[15%] flex section-five-dots  items-center gap-2 justify-center">
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
        </div>{" "}
        <div
          ref={secondItemRef}
          className="w-[30%] section-five-container-image lg:w-[20%] md:w-[37%] flex flex-col items-center justify-center animate-from-bottom delay-300"
        >
          <Image
            src="/images/home-hero-3.png"
            alt="Section five 1 Image"
            width={500}
            height={500}
            className="w-[100%] section-five-image"
          />

          <p className="mt-3 text-white text-center">Book an appointment</p>
        </div>{" "}
        <div
          ref={secondDotsRef}
          className="w-[15%] flex section-five-dots items-center gap-2 justify-center animate-from-bottom delay-400"
        >
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
        </div>
        <div
          ref={thirdItemRef}
          className="w-[30%] section-five-container-image lg:w-[20%] md:w-[37%] flex flex-col items-center justify-center animate-from-bottom delay-500"
        >
          <Image
            src="/images/home-section-five-1.png"
            alt="Section five 1 Image"
            width={500}
            height={500}
            className="w-[100%] section-five-image"
          />

          <p className="mt-3 text-white text-center">Track next vaccination</p>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
