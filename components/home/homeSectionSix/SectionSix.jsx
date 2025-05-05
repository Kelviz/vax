import React from "react";
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
  return (
    <div className="section-six-container ">
      <div className="w-full flex flex-col-reverse lg:flex-row md:flex-row gap-4 justify-center   lg:mt-8 md:mt-8 flex-reverse">
        <div className="circle-container lg:w-[50%] md:w-[50%] w-full">
          {circleLines(300)}
          {circleLines(320)}
          {circleLines(340)}
          {circleLines(360)}
          {circleLines(380)}

          <Image
            src="/images/section-6.png"
            alt="Section six 1 Image"
            width={500}
            height={500}
            className="relative z-10 w-[370px] h-auto circle-image"
          />
        </div>

        <div className="circle-container-small-mobile lg:w-[60%] md:w-[60%] w-full">
          {circleLines(250)}
          {circleLines(270)}
          {circleLines(290)}
          {circleLines(320)}
          {circleLines(340)}

          <Image
            src="/images/section-6.png"
            alt="Section six 1 Image"
            width={500}
            height={500}
            className="relative z-10 w-[370px] h-auto circle-image"
          />
        </div>

        <div className="lg:w-[40%] md:w-[50%] w-full md:justify-center flex flex-col lg:mt-[5rem] md:mt-[5rem] mt-[2rem] justify-center items-center">
          <h1 className="font-bold text-wrap sm:text-3xl text-2xl w-full md:text-left md:text-left text-center">
            Find our vaccine center nearest to you
          </h1>
          <p className="mt-5 w-full md:text-left md:text-left text-center text-wrap">
            Visit their website for the most up-to-date information on
            availability and locations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
