"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./SectionThree.css";

const SectionThree = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    <div className="section-three-container">
      <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl text-center">
        The New Future of Health is Here
      </h1>
      <p className="lg:text-[16px] md:text-[16px] text-[14px] text-center mt-3">
        Get vaccinated and never worry about living.
      </p>

      <div className="flex w-[100%] justify-center items-center gap-3 lg:mt-[8rem] mt-[6rem] relative">
        {/* Desktop View */}
        <div className="hidden sm:flex w-full  justify-center items-center gap-3">
          {secThreePosts.map((post, index) => (
            <div
              key={index}
              className="lg:w-[30%] md:w-[30%] w-[25%]  flex flex-col justify-center items-center"
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
                <p className="text-[14px] h-[170px] text-center mt-8">
                  {post.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="sm:hidden  w-full justify-center items-center flex flex-col mt-8">
          <div className="w-[50%] mobile-card flex flex-col justify-center items-center">
            <div className=" w-[60px] h-[60px] bg-[#D9D9D9] rounded-full flex justify-center items-center">
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

          {/* Dots Navigation */}
          <div className="flex absolute z-20 top-[250px] justify-center items-center gap-2 mt-8">
            {secThreePosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-[#FF981E]" : "bg-gray-300"
                }`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-line top-[180px] left-[20px] lg:left-[100px] md:left-[30px]">
        <div className="w-[150px] h-[10px]  bg-[#148782] rounded-br-full rounded-tr-full"></div>
        <div className="w-[10px] h-[150px]  bg-[#148782] rounded-b-full"></div>
      </div>

      <div className="absolute bottom-[-45px]  flex justify-end items-end flex-row-reverse right-[20px]  lg:right-[100px] md:right-[30px]">
        <div className="w-[10px] h-[150px]  bg-[#148782] rounded-t-full"></div>
        <div className="w-[150px] h-[10px]  bg-[#148782] rounded-bl-full rounded-tl-full"></div>
      </div>
    </div>
  );
};

export default SectionThree;
