"use client";
import Image from "next/image";
import { useState } from "react";
import "./SectionThree.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SectionThree = () => {
  const [activeIndex, setActiveIndex] = useState(1); // For desktop
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0); // For mobile

  const bigScreenItems = [
    {
      image: "/images/feature-sec-three-1.png",
      title: "Live Support",
      subtext: "24/7 available to respond to you",
    },
    {
      image: "/images/feature-sec-three-2.png",
      title: "Video Chat",
      subtext: "24/7 available to respond to you",
    },
    {
      image: "/images/feature-sec-three-3.png",
      title: "Live Chat",
      subtext: "Speak directly to doctors live on video chat",
    },
  ];

  const MobileScreenItems = [
    {
      image: "/images/feature-sec-three-4.png",
      title: "Live Support",
      subtext: "24/7 available to respond to you",
    },
    {
      image: "/images/feature-sec-three-2.png",
      title: "Video Chat",
      subtext: "24/7 available to respond to you",
    },
    {
      image: "/images/feature-sec-three-5.png",
      title: "Live Chat",
      subtext: "Speak directly to doctors live on video chat",
    },
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const handleMobilePrevious = () => {
    setMobileActiveIndex((prev) =>
      prev === 0 ? MobileScreenItems.length - 1 : prev - 1
    );
  };

  const handleMobileNext = () => {
    setMobileActiveIndex((prev) =>
      prev === MobileScreenItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="feature-section-three-container">
      <h1 className="text-lg lg:text-4xl md:text-3xl text-center mb-12">
        Get issues resolved from the comfort of your home
      </h1>

      {/* Desktop and Tablet View */}
      <div className="feature-section-three-contents">
        <div className="hidden md:flex w-full justify-center items-start gap-8 relative">
          {/* Left Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-[15%] lg:top-[450px] md:top-[400px] -translate-y-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
          >
            <MdChevronLeft size={24} />
          </button>

          {/* Items */}
          {bigScreenItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:w-[300px] md:w-[250px]"
            >
              <div className="lg:w-[250px] md:w-[200px] lg:h-[400px] md:h-[350px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Only show text for middle item */}
              {index === 1 && (
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {bigScreenItems[activeIndex].title}
                  </h3>
                  <p className="text-white">
                    {bigScreenItems[activeIndex].subtext}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute right-[15%] lg:top-[450px] md:top-[400px] -translate-y-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
          >
            <MdChevronRight size={24} />
          </button>
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden w-full flex-col items-center relative">
          {/* Left Button */}
          <button
            onClick={handleMobilePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center z-10"
          >
            <MdChevronLeft size={24} />
          </button>

          {/* Current Item */}
          <div className="flex flex-col items-center w-full px-12">
            <div className="w-[350px] h-[550px] rounded-lg overflow-hidden mb-4">
              <Image
                src={MobileScreenItems[mobileActiveIndex].image}
                alt={MobileScreenItems[mobileActiveIndex].title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {MobileScreenItems[mobileActiveIndex].title}
            </h3>
            <p className="text-white text-center">
              {MobileScreenItems[mobileActiveIndex].subtext}
            </p>
          </div>

          {/* Right Button */}
          <button
            onClick={handleMobileNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center z-10"
          >
            <MdChevronRight size={24} />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {MobileScreenItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setMobileActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === mobileActiveIndex
                    ? "bg-[#FF981E]  w-4"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
