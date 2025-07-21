"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./SectionThree.css";

const SectionThree = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const leftLineRef = useRef(null);
  const rightLineRef = useRef(null);
  const desktopLeftLineRef = useRef(null);
  const desktopRightLineRef = useRef(null);
  const mobileCardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contentRef.current?.classList.add("animate");
            leftLineRef.current?.classList.add("animate");
            rightLineRef.current?.classList.add("animate");
            desktopLeftLineRef.current?.classList.add("animate");
            desktopRightLineRef.current?.classList.add("animate");
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

  const secThreePosts = [
    {
      image: "/images/section-three-1.png",
      title: "Vaccine Education",
      detail:
        "Vaccines have been one of the most effective tools in preventing serious diseases and protecting public health.",
    },
    {
      image: "/images/section-three-2.png",
      title: "Vaccine Accessibility",
      detail:
        "Ensuring that everyone has access to them is crucial for achieving widespread immunity and preventing disease.",
    },
    {
      image: "/images/section-three-3.png",
      title: "General wellbeing",
      detail:
        "General wellbeing encompasses all aspects of your physical, mental, and emotional health.",
    },
  ];

  return (
    <div className="section-three-container" ref={sectionRef}>
      <h1 className="font-bold md:text-3xl text-xl text-center">
        The New Future of Health is Here
      </h1>
      <p className=" md:text-[16px] text-[14px] text-center mt-3">
        Get vaccinated and never worry about living.
      </p>

      <div
        ref={contentRef}
        className="flex w-[100%] justify-center items-center gap-3 md:mt-8 mt-[2rem] content-animate"
      >
        {/* Desktop View */}{" "}
        <div className="hidden sm:flex w-full relative justify-center items-center gap-3">
          <div
            ref={desktopLeftLineRef}
            className="absolute left-line top-[0px] left-[0px] z-10"
          >
            <div className="w-[150px] h-[10px] bg-[#148782] rounded-br-full rounded-tr-full"></div>
            <div className="w-[10px] h-[150px] bg-[#148782] rounded-b-full"></div>
          </div>

          <div
            ref={desktopRightLineRef}
            className="absolute right-line  bottom-[0px] flex justify-end items-end flex-row-reverse right-[0px] z-10"
          >
            <div className="w-[10px] h-[150px] bg-[#148782] rounded-t-full"></div>
            <div className="w-[150px] h-[10px] bg-[#148782] rounded-bl-full rounded-tl-full"></div>
          </div>

          {secThreePosts.map((post, index) => (
            <div
              key={index}
              className="lg:w-[30%] md:w-[30%] w-[25%]  h-[400px]  flex flex-col justify-center items-center cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105"
            >
              <div className="lg:w-[60px] lg:h-[60px]  w-[50px] h-[50px] bg-[#D9D9D9] rounded-full flex justify-center items-center">
                <Image
                  src={post.image}
                  alt="section-three"
                  width={200}
                  height={200}
                  className="w-[60%] h-[60%] object-cover rounded-full"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center mt-4">
                <h1 className="font-bold lg:text-xl md:text-md text-sm mt-4">
                  {post.title}
                </h1>
                <p className="text-[14px] text-center mt-8">{post.detail}</p>
              </div>
            </div>
          ))}

          <div
            ref={leftLineRef}
            className="absolute left-line lg:top-0 md:top-[0px] top-[0px] left-[0px] md:left-[0px]"
          >
            <div className="w-[150px] h-[10px]  bg-[#148782] rounded-br-full rounded-tr-full"></div>
            <div className="w-[10px] h-[150px]  bg-[#148782] rounded-b-full"></div>
          </div>

          <div
            ref={rightLineRef}
            className="absolute right-line lg:bottom-[0px] md:bottom-[0px] bottom-[0px]  flex justify-end items-end flex-row-reverse right-[0px]  lg:right-[0px] md:right-[0px]"
          >
            <div className="w-[10px] h-[150px]  bg-[#148782] rounded-t-full"></div>
            <div className="w-[150px] h-[10px]  bg-[#148782] rounded-bl-full rounded-tl-full"></div>
          </div>
        </div>{" "}
        {/* Mobile View */}
        <div className="sm:hidden w-full justify-center items-center flex flex-col mt-5 relative">
          {/* Navigation Arrows */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full shadow p-2 flex items-center justify-center"
            style={{ left: 0 }}
            aria-label="Previous post"
            onClick={() => {
              if (!isAnimating) {
                const prevIndex =
                  (activeIndex - 1 + secThreePosts.length) % secThreePosts.length;
                if (prevIndex !== activeIndex) {
                  setIsAnimating(true);
                  mobileCardRef.current?.classList.add("slide-exit");
                  leftLineRef.current?.classList.add("slide-out");
                  rightLineRef.current?.classList.add("slide-out");
                  setTimeout(() => {
                    setActiveIndex(prevIndex);
                    mobileCardRef.current?.classList.remove("slide-exit");
                    leftLineRef.current?.classList.remove("slide-out");
                    rightLineRef.current?.classList.remove("slide-out");
                    mobileCardRef.current?.classList.add("slide-enter");
                    leftLineRef.current?.classList.add("slide-in");
                    rightLineRef.current?.classList.add("slide-in");
                    setTimeout(() => {
                      mobileCardRef.current?.classList.remove("slide-enter");
                      leftLineRef.current?.classList.remove("slide-in");
                      rightLineRef.current?.classList.remove("slide-in");
                      setIsAnimating(false);
                    }, 500);
                  }, 500);
                }
              }
            }}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full shadow p-2 flex items-center justify-center"
            style={{ right: 0 }}
            aria-label="Next post"
            onClick={() => {
              if (!isAnimating) {
                const nextIndex = (activeIndex + 1) % secThreePosts.length;
                if (nextIndex !== activeIndex) {
                  setIsAnimating(true);
                  mobileCardRef.current?.classList.add("slide-exit");
                  leftLineRef.current?.classList.add("slide-out");
                  rightLineRef.current?.classList.add("slide-out");
                  setTimeout(() => {
                    setActiveIndex(nextIndex);
                    mobileCardRef.current?.classList.remove("slide-exit");
                    leftLineRef.current?.classList.remove("slide-out");
                    rightLineRef.current?.classList.remove("slide-out");
                    mobileCardRef.current?.classList.add("slide-enter");
                    leftLineRef.current?.classList.add("slide-in");
                    rightLineRef.current?.classList.add("slide-in");
                    setTimeout(() => {
                      mobileCardRef.current?.classList.remove("slide-enter");
                      leftLineRef.current?.classList.remove("slide-in");
                      rightLineRef.current?.classList.remove("slide-in");
                      setIsAnimating(false);
                    }, 500);
                  }, 500);
                }
              }
            }}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div
            ref={mobileCardRef}
            className={`w-[80%] h-[300px] mobile-card flex flex-col justify-center items-center ${
              isAnimating ? "slide-enter" : ""
            }`}
          >
            <div className="w-[60px] h-[60px] bg-[#D9D9D9] rounded-full flex justify-center items-center">
              <Image
                src={secThreePosts[activeIndex].image}
                alt="section-three"
                width={200}
                height={200}
                className="w-[60%] h-[60%] object-cover rounded-full"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-4">
              <h1 className="font-bold text-lg mt-4">
                {secThreePosts[activeIndex].title}
              </h1>
              <p className="text-[14px] text-center mt-8">
                {secThreePosts[activeIndex].detail}
              </p>
            </div>
          </div>

          {/* Lines for mobile */}
          <div
            ref={leftLineRef}
            className="absolute left-line top-[0px] left-[0px] z-10"
          >
            <div className="w-[100px] h-[10px] bg-[#148782] rounded-br-full rounded-tr-full"></div>
            <div className="w-[10px] h-[100px] bg-[#148782] rounded-b-full"></div>
          </div>

          <div
            ref={rightLineRef}
            className="absolute right-line bottom-[0px] flex justify-end items-end flex-row-reverse right-[0px] z-10"
          >
            <div className="w-[10px] h-[100px] bg-[#148782] rounded-t-full"></div>
            <div className="w-[100px] h-[10px] bg-[#148782] rounded-bl-full rounded-tl-full"></div>
          </div>

          {/* Dots Navigation */}
          <div className="flex absolute z-20 top-[300px] justify-center items-center gap-2 mt-8">
            {secThreePosts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== activeIndex) {
                    setIsAnimating(true);

                    // Start exit animations
                    mobileCardRef.current?.classList.add("slide-exit");
                    leftLineRef.current?.classList.add("slide-out");
                    rightLineRef.current?.classList.add("slide-out");

                    setTimeout(() => {
                      setActiveIndex(index);

                      // Remove exit classes
                      mobileCardRef.current?.classList.remove("slide-exit");
                      leftLineRef.current?.classList.remove("slide-out");
                      rightLineRef.current?.classList.remove("slide-out");

                      // Add entrance classes
                      mobileCardRef.current?.classList.add("slide-enter");
                      leftLineRef.current?.classList.add("slide-in");
                      rightLineRef.current?.classList.add("slide-in");

                      setTimeout(() => {
                        // Remove entrance classes
                        mobileCardRef.current?.classList.remove("slide-enter");
                        leftLineRef.current?.classList.remove("slide-in");
                        rightLineRef.current?.classList.remove("slide-in");
                        setIsAnimating(false);
                      }, 500);
                    }, 500);
                  }
                }}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-[#FF981E]" : "bg-gray-300"
                } transition-colors duration-300`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
