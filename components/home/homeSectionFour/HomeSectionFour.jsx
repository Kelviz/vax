"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./HomeSectionFour.css";

const HomeSectionFour = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const leftItemsRef = useRef(null);
  const centerImageRef = useRef(null);
  const rightItemsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current?.classList.add("animate");
            subtitleRef.current?.classList.add("animate");
            leftItemsRef.current?.classList.add("animate");
            centerImageRef.current?.classList.add("animate");
            rightItemsRef.current?.classList.add("animate");
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
    <div
      ref={sectionRef}
      className="home-section-four-container md:mt-[1rem] mt-[3rem]"
    >
      <div className="w-full flex items-center justify-center flex-col">
        <h1
          ref={titleRef}
          className="font-bold md:text-3xl text-xl text-center animate-from-bottom"
        >
          Premuim features for you and your family
        </h1>
        <p
          ref={subtitleRef}
          className="mt-2 text-center text-wrap animate-from-bottom delay-100"
        >
          We bring you access to modern medical science
          <br /> from the comfort of your home
        </p>
      </div>

      <div className="w-full flex gap-0 mt-12">
        <div
          ref={leftItemsRef}
          className="md:w-[35%] w-[20%] flex flex-col md:gap-[9rem] gap-[6rem] justify-center items-end animate-from-bottom delay-200"
        >
          <p className="md:text-lg text-[10px] font-bold top-[150px]  text-right ">
            Vaccine Tracker
          </p>

          <p className="md:text-lg text-[10px] font-bold text-right">
            Hospital Database
          </p>

          <p className="md:text-lg text-[10px] text-wrap font-bold  text-right">
            Unstructured Supplementary Service Data (USSD)
          </p>
        </div>{" "}
        <div
          ref={centerImageRef}
          className="md:w-[30%] w-[60%] flex justify-center items-center relative animate-from-bottom delay-300"
        >
          <Image
            src="/images/section-four-1.png"
            alt="Section four 1 Image"
            width={500}
            height={500}
            className=" w-[100%]"
          />

          <Image
            src="/images/section-four-2.png"
            alt="Section four 2 Image"
            width={500}
            height={500}
            className=" w-[80%] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
          />
        </div>
        <div
          ref={rightItemsRef}
          className="md:w-[35%] w-[20%] md:gap-[9rem] gap-[6rem] flex flex-col justify-center items-start animate-from-bottom delay-400"
        >
          <p className="md:text-lg text-[10px] font-bold text-left">
            Medication Tracker
          </p>

          <p className="md:text-lg text-[10px] font-bold text-left">
            Health Blog
          </p>

          <p className="md:text-lg text-wrap text-[10px] font-bold text-left">
            Government Hospital Incoropration
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFour;
