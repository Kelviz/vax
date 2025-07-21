"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import "./SectionEight.css";

const SectionEight = () => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current?.classList.add("animate");
            cardsRef.current.forEach((card, index) => {
              setTimeout(() => {
                card?.classList.add("animate");
              }, 100 * (index + 1));
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

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "right" ? 1250 : -1250;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const patients = [
    {
      image: "/images/patient1.png",
      feedback:
        " I was hesitant at first, but after hearing about how vaccines protect not only me but also the people around me, I decided to get vaccinated.",
    },
    {
      image: "/images/patient2.png",
      feedback:
        " I feel safer now, knowing I’m doing my part to keep myself, my family, and my community healthy.",
    },
    {
      image: "/images/patient3.png",
      feedback:
        "It has survived not only five centuries, but also the leapinto electronic types etting, remaining essentially unchanged.",
    },
    {
      image: "/images/patient4.png",
      feedback:
        "It has survived not only five centuries, but also the leapinto electronic type setting, remaining essentially unchanged.",
    },
  ];

  return (
    <div ref={sectionRef} className="section-eight-container">
      <h1
        ref={titleRef}
        className="font-bold md:text-3xl text-xl text-center animate-from-bottom"
      >
        Transformative Patients' Experiences
      </h1>
      <div className="section-eight-wrapper mt-8">
        <button
          className="scroll-button left-button"
          onClick={() => handleScroll("left")}
          aria-label="Previous"
        >
          <HiChevronLeft size={24} />
        </button>

        <div className="section-eight-content" ref={scrollContainerRef}>
          {patients.map((patient, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="patient-card"
            >
              <Image
                src={patient.image}
                alt={`Patient ${index + 1}`}
                width={500}
                height={500}
                className="w-[50%] h-[300px] object-cover patient-image"
              />
              <div className="w-[50%] flex flex-col items-center justify-center bg-[#148782] lg:px-8 lg:py-4 p-2 text-wrap">
                <div className="w-full flex lg:mt-8 md:mt-8 mt-4">
                  <ImQuotesLeft className="text-white lg:text-2xl text-lg mb-2" />
                </div>

                <p className="mt-3 feedback-text text-white">
                  {patient.feedback}
                </p>
                <div className="w-full flex justify-end lg:mt-8 md:mt-8 mt-4">
                  <ImQuotesRight className="text-white lg:text-2xl text-lg mb-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="scroll-button right-button"
          onClick={() => handleScroll("right")}
          aria-label="Next"
        >
          <HiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SectionEight;
