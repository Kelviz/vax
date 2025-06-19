"use client";
import Image from "next/image";
import "./SectionThree.css";
import "../animations.css";
import { withScrollAnimation } from "../withScrollAnimation";

const SectionThree = () => {
  return (
    <div className="provision-sec-three-container">
      <div className="w-full relative">
        <div className="w-full flex flex-col-reverse lg:flex-row md:flex-row lg:justify-between md:justify-between justify-center">
          <div
            className="lg:w-[50%] md:w-[50%] w-full mt-8 lg:mt-0 md:mt-0 animate-from-bottom"
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="/images/provision-sec-three-1.png"
              alt="provision image"
              width={500}
              height={500}
              className="w-full h-[400px] object-cover lg:h-[600px] md:h-[680px] m-0 p-0"
            />
          </div>
          <div
            className="lg:w-[50%] md:w-[50%] w-full flex flex-col justify-center lg:justify-start md:justify-start px-3 lg:px-8 md:px-8 animate-from-bottom"
            style={{ animationDelay: "0s" }}
          >
            <h2 className="font-bold text-center lg:text-left md:text-left md:text-2xl text-xl ">
              Embark on a health journey with no regret
            </h2>

            <p className="mt-6 text-center lg:text-left md:text-left ">
              Start your health journey with small steps You don’t have to be
              perfect just keep going. One day, you’ll be glad you started.
            </p>
          </div>
        </div>

        <div className="lg:w-[50%] md:w-[50%] w-full flex flex-col lg:flex-row lg:justify-between md:flex-row md:justify-between justify-center items-center gap-[8rem] lg:gap-0 md:gap-0 lg:absolute md:absolute bottom-0 right-0 px-3 lg:px-8 md:px-8 mt-[9rem] lg:mt-0 md:mt-0">
          <div
            className="lg:w-[50%] md:w-[50%] w-[90%] h-[350px] md:h-[380px] p-3 flex flex-col items-center relative bg-[#148782] text-white animate-from-bottom"
            style={{ animationDelay: "0.4s" }}
          >
            <Image
              src="/images/polygon.svg"
              alt="polygon"
              width={500}
              height={500}
              className="w-[150px] h-[150px] md:w-[120px] md:h-[120px] absolute left-1/2 -translate-x-1/2 top-[-60px]"
            />

            <h2 className="font-bold text-lg md:text-[18px] text-center mt-[6rem] md:mt-[3rem]">
              Vaccine eligibility
            </h2>
            <p className="mt-4 md:mt-2 md:text-[16px] text-center p-4">
              Always consult your healthcare provider to ensure you're receiving
              the right protection at the right time.
            </p>
          </div>

          <div
            className="lg:w-[50%] md:w-[50%] w-[90%] h-[350px] md:h-[380px] p-3 flex flex-col items-center relative bg-[#148782] text-white animate-from-bottom"
            style={{ animationDelay: "0.6s" }}
          >
            <Image
              src="/images/polygon.svg"
              alt="polygon"
              width={500}
              height={500}
              className="w-[150px] h-[150px] md:w-[120px] md:h-[120px] absolute left-1/2 -translate-x-1/2 top-[-60px]"
            />

            <h2 className="font-bold text-lg md:text-[18px]  text-center mt-[6rem] md:mt-[3rem]">
              Vaccine availability
            </h2>
            <p className="mt-4 md:mt-2 md:text-[16px] text-center p-3">
              These vaccines are typically offered at no cost or are covered by
              insurance and national immunization programs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withScrollAnimation(SectionThree);
