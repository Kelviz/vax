"use client";
import Image from "next/image";
import "./SectionFive.css";
import "../animations.css";
import { withScrollAnimation } from "../withScrollAnimation";

const SectionFive = () => {
  return (
    <div className="record-section-five-container">
      <h1
        className="font-bold md:text-3xl text-xl text-center animate-from-bottom"
        style={{ animationDelay: "0.2s" }}
      >
        How we store your Vaccine history?
      </h1>
      <div className="w-full flex flex-col items-center md:flex-row md:mt-[5rem] mt-[3rem]">
        <div
          className="md:w-[27%] w-[55%] relative flex justify-center items-center animate-from-bottom"
          style={{ animationDelay: "0.4s" }}
        >
          <Image
            src="/images/record-sec-polygon.png"
            alt="record polygon"
            width={500}
            height={500}
            className="w-full"
          />

          <p className="font-semibold text-[14px] text-white text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            Patient visit
          </p>
        </div>

        <div
          className="flex flex-col md:flex-row gap-2 items-center justify-center animate-from-bottom"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#FF981E]"></span>
          <span className="w-2 h-2 rounded-full bg-[#FF981E]"></span>
          <span className="w-2 h-2 rounded-full bg-[#FF981E]"></span>
        </div>

        <div
          className="md:w-[27%] w-[55%] relative flex justify-center items-center animate-from-bottom"
          style={{ animationDelay: "0.6s" }}
        >
          <Image
            src="/images/record-sec-polygon.png"
            alt="record polygon"
            width={500}
            height={500}
            className="w-full"
          />

          <p className="font-semibold text-[14px] text-white text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            Data entry
          </p>
        </div>

        <div
          className="flex flex-col md:flex-row gap-2 items-center justify-center animate-from-bottom"
          style={{ animationDelay: "0.7s" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#FF981E]"></span>
          <span className="w-2 h-2 rounded-full bg-[#FF981E]"></span>
          <span className="w-2 h-2 rounded-full bg-[#FF981E]"></span>
        </div>

        <div
          className="md:w-[27%] w-[55%] relative flex justify-center items-center animate-from-bottom"
          style={{ animationDelay: "0.8s" }}
        >
          <Image
            src="/images/record-sec-polygon.png"
            alt="record polygon"
            width={500}
            height={500}
            className="w-full"
          />

          <p className="font-semibold text-[14px] text-white text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            Integration
          </p>
        </div>

        <div
          className="flex flex-col md:flex-row gap-2 items-center justify-center animate-from-bottom"
          style={{ animationDelay: "0.9s" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#FF981E]"></span>
          <span className="w-2 h-2 rounded-full bg-[#FF981E]"></span>
          <span className="w-2 h-2 rounded-full bg-[#FF981E]"></span>
        </div>

        <div
          className="md:w-[27%] w-[55%] relative flex justify-center items-center animate-from-bottom"
          style={{ animationDelay: "1s" }}
        >
          <Image
            src="/images/record-sec-polygon.png"
            alt="record polygon"
            width={500}
            height={500}
            className="w-full"
          />

          <p className="font-semibold md:text-[14px] text-white text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            Patient access
          </p>
        </div>
      </div>
    </div>
  );
};

export default withScrollAnimation(SectionFive);
