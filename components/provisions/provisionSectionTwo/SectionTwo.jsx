"use client";
import Image from "next/image";
import "./SectionTwo.css";
import "../animations.css";
import { withScrollAnimation } from "../withScrollAnimation";

const SectionTwo = () => {
  return (
    <div className="provision-sec-two-container">
      <h1 className="text-center text-xl  md:text-3xl font-bold animate-from-bottom">
        Need a Specialist? <br /> We are the trusted Experts!
      </h1>

      <div
        className="w-full flex justify-between bg-[#148782] text-white mt-8 animate-from-bottom"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="w-[50%]  relative">
          <Image
            src="/images/provision-sec-1.png"
            alt="provision image"
            width={500}
            height={500}
            className="w-full h-[280px] md:h-[400px] object-cover  lg:h-[500px]  m-0 p-0"
          />
          <Image
            src="/images/provision-sec-2.png"
            alt="provision image"
            width={500}
            height={500}
            className="lg:w-[180px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] absolute right-0 bottom-0"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center px-3 lg:px-8 md:px-8 ">
          <span className="font-bold text-[14px] lg:text-[16px] md:text-[16px]">
            Gynecologist
          </span>
          <h2 className="font-bold text-[14px] lg:text-[16px] md:text-[16px] lg:mt-4 md:mt-4 mt-2">
            Lets take care of your antenatal vaccination
          </h2>
          <p className="text-[12px] lg:text-[14px] md:text-[14px] lg:mt-4 md:mt-4 mt-2">
            These vaccines not only protect you during pregnancy, but also
            provide your baby with early immunity before they’re even born.
          </p>
        </div>
      </div>

      <div
        className="w-full flex bg-[#148782] text-white animate-from-bottom"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="w-[50%] flex flex-col  justify-center px-3 lg:px-8 md:px-8 ">
          <span className="font-bold text-[14px] lg:text-[16px] md:text-[16px]">
            Pediatrician
          </span>
          <h2 className="font-bold text-[14px] lg:text-[16px] md:text-[16px] lg:mt-4 md:mt-4 mt-2">
            We care for your Baby’s wellbeing
          </h2>
          <p className="text-[12px] lg:text-[14px] md:text-[14px] lg:mt-4 md:mt-4 mt-2">
            Your baby’s health is our top priority. At every step of your
            journey, we're here to support you with trusted care, guidance, and
            compassion.
          </p>
        </div>
        <div className="w-[50%] relative">
          <Image
            src="/images/provision-sec-3.png"
            alt="provision image"
            width={500}
            height={500}
            className="w-full h-[280px] md:h-[400px] object-cover lg:h-[500px]"
          />
          <Image
            src="/images/provision-sec-4.png"
            alt="provision image"
            width={500}
            height={500}
            className="lg:w-[180px] object-cover lg:h-[150px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] absolute left-0 top-0"
          />
        </div>
      </div>
    </div>
  );
};

export default withScrollAnimation(SectionTwo);
