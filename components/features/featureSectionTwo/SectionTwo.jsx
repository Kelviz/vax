"use client";
import Image from "next/image";
import { MdChevronRight } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import "./SectionTwo.css";
import "../animations.css";
import { withScrollAnimation } from "../withScrollAnimation";

const SectionTwo = () => {
  return (
    <div className="feature-section-two-container">
      {" "}
      <div className="w-full flex justify-center items-center flex-col">
        <p className="lg:text-[16px] md:text-[16px] text-[14px] text-center mt-3 animate-from-bottom">
          What you get?
        </p>
        <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl text-center mt-3 px-4 animate-from-bottom delay-100">
          We offer you a wild range of services
        </h1>
        <p className="lg:text-[16px] md:text-[16px] text-[14px] text-center mt-3 px-4 animate-from-bottom delay-200">
          Relax, stay home and get all the medical attention that you need.
        </p>
      </div>
      <div className="w-full min-h-[30vh]  flex justify-center items-center lg:mt-[8rem] md:mt-[8rem] mt-8 flex-col animate-from-bottom delay-200">
        <div className="w-full  flex lg:flex-row md:flex-row flex-col-reverse  justify-center items-center lg:gap-[5rem] md:gap[2rem] gap-[2rem]">
          <div className="lg:w-[300px]  md:w-[300px] w-[300px] lg:mt-0 md:mt-0 mt-[12rem]  flex lg:justify-start md:justify-start justify-center items-center relative">
            <div className="w-full lg:h-[300px] md:h-[300px] h-[300px] rounded-full bg-[#FF981E] absolute left-0 top-1/2 -translate-y-1/2 flex  justify-center items-center">
              <Image
                src="/images/feature-sec-two-1.png"
                alt="phone"
                width={500}
                height={500}
                className="w-[200px] h-[390px] lg:w-[200px] lg:h-[390px] md:w-[200px] md:h-[390px]"
              />
            </div>
            <div className="w-[120px] h-[150px] shadow-lg bg-[#148782] rounded-3xl flex flex-col  items-center  absolute left-[57%] top-[-75px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-2xl mt-2 bg-[#fff]">
                <FiBell className="text-black text-[18px]" />
              </div>
              <p className="text-[12px] text-center p-1 text-white">
                You have a vaccine appointment tomorrow at 8am
              </p>
            </div>

            <div className="w-[150px] h-[110px] shadow-lg bg-[#148782] rounded-3xl flex items-center absolute left-[-6%] top-[10%]">
              <p className="text-[12px] text-center p-1 text-white">
                Our tool provides accurate and timely data to help individuals,
                healthcare providers
              </p>
            </div>
          </div>

          <div className="lg:w-[50%] md:w-[40%] w-[100%] flex flex-col ">
            <h1 className="font-bold lg:text-3xl md:text-2xl text-lg text-center lg:text-left md:text-left">
              Vaccine Tracker
            </h1>
            <p className="mt-4 text-center lg:text-left md:text-left">
              Download our app to track your vaccination, know your next
              vaccination, vaccine dosage, age eligibility and everything you
              need to know about your vaccine.
            </p>
            <a
              href=""
              className="flex lg:justify-start md:justify-start justify-center items-center gap-2 mt-4 text-center lg:text-left md:text-left"
            >
              <span>Read More</span>

              <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#D9D9D9]">
                <MdChevronRight className=" BsArrowRight" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[30vh]  flex justify-center items-center lg:mt-[15rem] md:mt-[15rem] mt-[15rem] flex-col animate-from-bottom delay-400">
        <div className="w-full flex lg:flex-row md:flex-row flex-col justify-center items-center gap-8">
          <div className="lg:w-[50%] md:w-[40%] w-[100%] flex flex-col">
            <h1 className="font-bold lg:text-3xl md:text-2xl text-lg text-center lg:text-left md:text-left">
              Vaccine Tracker
            </h1>
            <p className="mt-4  text-center lg:text-left md:text-left">
              Download our app to track your vaccination, know your next
              vaccination, vaccine dosage, age eligibility and everything you
              need to know about your vaccine.
            </p>
            <a
              href=""
              className="flex lg:justify-start md:justify-start justify-center items-center gap-2 mt-4 text-center lg:text-left md:text-left"
            >
              <span>Read More</span>

              <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#D9D9D9]">
                <MdChevronRight className=" BsArrowRight" />
              </div>
            </a>
          </div>
          <div className="lg:w-[300px] md:w-[300px] w-[300px] lg:mt-0 md:mt-0 mt-[12rem]  flex lg:justify-end md:justify-end justify-center items-center relative">
            <div className="w-full h-[300px] rounded-full bg-[#FF981E] absolute flex right-0 top-1/2 -translate-y-1/2 justify-center items-center">
              <Image
                src="/images/feature-sec-two-2.png"
                alt="phone"
                width={500}
                height={500}
                className="w-[200px] h-[390px]"
              />
            </div>
            <div className="w-[120px] h-[150px] shadow-lg bg-[#148782] rounded-3xl flex flex-col items-center  absolute left-[3%] top-[-75px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-2xl mt-2 bg-white">
                <FiBell className="text-black text-[18px]" />
              </div>
              <p className="text-[12px] text-center p-1 text-white">
                Its time to take your afternoon medication
              </p>
            </div>

            <div className="w-[150px] h-[110px] shadow-lg bg-[#148782] rounded-3xl flex justify-center items-center absolute left-[55%] top-[20%]">
              <p className="text-[12px] text-center p-1 text-white">
                This tool ensures you avoid missed doses, and maintain a clear
                medication history
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withScrollAnimation(SectionTwo);
