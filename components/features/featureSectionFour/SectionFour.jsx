"use client";
import Image from "next/image";
import "./SectionFour.css";
import "../animations.css";
import { withScrollAnimation } from "../withScrollAnimation";

const SectionFour = () => {
  return (
    <div className="feature-section-four-container lg:mt-[5rem] md:mt-[5rem] mt-[2rem]">
      <div className="w-full flex lg:flex-row md:flex-row flex-col lg:gap-4 md:gap-2 gap-8 justify-center items-center">
        <div className="lg:w-[45%] md:w-[50%] w-full shadow-lg border-l-12 bg-[#148782] text-white border-[#FF981E] flex flex-col justify-center items-center animate-from-bottom">
          <Image
            src="/images/feature-sec-four-1.png"
            alt="feature-sec-four-image"
            width={500}
            height={500}
            className="w-full h-[200px] object-cover"
          />

          <div className="p-4 min-h-[230px]">
            <h1 className="text-lg lg:text-2xl md:text-2xl font-bold text-center">
              Government Hospital Incoropration
            </h1>

            <p className="text-center mt-2">
              Through incorporation, government hospitals can better adapt to
              community health needs, attract skilled professionals, and
              implement modern technologies, all while upholding equity and
              affordability in healthcare delivery.
            </p>
          </div>
        </div>

        <div className="lg:w-[45%] md:w-[50%] w-full shadow-lg lg:border-r-12 md:border-r-12 lg:border-l-0 md:border-l-0 border-l-12 border-[#FF981E] bg-[#148782] text-white flex flex-col justify-center items-center animate-from-bottom">
          <Image
            src="/images/feature-sec-four-2.png"
            alt="feature-sec-four-image"
            width={500}
            height={500}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-4  min-h-[230px]">
            <h1 className="text-lg lg:text-2xl md:text-2xl font-bold text-center">
              Hospital Database
            </h1>

            <p className="text-center mt-2">
              With features like role-based access, data encryption, and
              analytics integration, hospital databases enhance clinical
              decision-making, improve patient outcomes, streamline workflows,
              and support regulatory compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withScrollAnimation(SectionFour);
