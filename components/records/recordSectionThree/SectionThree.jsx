"use client";
import Image from "next/image";
import "./SectionThree.css";
import "../animations.css";
import { withScrollAnimation } from "../withScrollAnimation";
import { useState } from "react";

const SectionThree = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      title: "Membership Electronic Records",
      description:
        "Membership Electronic Records are secure, digitized systems used to store, and access information about individuals",
      image: "/images/record-sec-three-1.png",
    },
    {
      title: "Vaccine Cards",
      description:
        "Vaccine Cards serve as official documentation of the vaccines you’ve received.",
      image: "/images/record-sec-three-2.png",
    },
    {
      title: "State Immunization Registeries",
      description:
        "These registries support healthcare providers, and public health officials by ensuring accurate immunization tracking.",
      image: "/images/record-sec-three-3.png",
    },
    {
      title: "Electronic Medical Records",
      description:
        "Electronic Medical Records (EMRs) are digital versions of the paper charts found in a clinician’s office or hospital.",
      image: "/images/record-sec-three-4.png",
    },
    {
      title: "Paper Records",
      description:
        "Paper Records is a standard method for documenting patient health information in clinics, hospitals, and healthcare offices.",
      image: "/images/record-sec-three-5.png",
    },
    {
      title: "Local Servers and Databases",
      description:
        "Local servers and databases are physical systems housed within an organization’s premises.",
      image: "/images/record-sec-three-6.png",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="record-section-three-container md:mt-[3rem] mt-[3rem]">
      <h1 className="text-center text-xl md:text-3xl font-bold animate-from-bottom">
        Ways to keep track of your Information
      </h1>{" "}
      <div className="record-section-three-contents mt-8">
        {/* Desktop View */}
        <div className="hidden lg:flex md:flex w-full flex-wrap justify-center gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="lg:w-[30%] md:w-[45%] flex flex-col items-center animate-from-bottom"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-white p-2 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="w-[90%] h-[90%] object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-white text-center">
                {item.title}
              </h3>
              <p className="text-gray-200 text-center mt-2 px-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div
          className="lg:hidden md:hidden flex flex-col items-center animate-from-bottom"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex flex-col items-center">
            <div className="w-[80%] min-h-[200px] flex flex-col items-center">
              <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-white p-2">
                <Image
                  src={data[currentSlide].image}
                  alt="record image"
                  width={50}
                  height={50}
                  className="w-[90%] h-[90%] object-cover"
                />
              </div>
              <h2 className="font-semibold text-white text-lg mt-3 text-center">
                {data[currentSlide].title}
              </h2>
              <p className="text-gray-200 text-[16px] mt-2 text-center px-4">
                {data[currentSlide].description}
              </p>
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-5 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-[#FF981E] scale-125"
                      : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withScrollAnimation(SectionThree);
