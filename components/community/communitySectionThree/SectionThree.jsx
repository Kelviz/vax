"use client";
import Image from "next/image";
import "./SectionThree.css";
import "../animations.css";
import { withScrollAnimation } from "../withScrollAnimation";

const SectionThree = () => {
  return (
    <div className="community-section-three-container">
      <h1 className="font-bold md:text-3xl text-xl text-center animate-from-bottom">
        Chat with community members{" "}
      </h1>

      <div className="mt-10 w-full flex justify-center items-center relative">
        <Image
          src="/images/community-sec-three-1.png"
          alt="Community Section Three Image"
          width={500}
          height={500}
          className="community-sec-three-1 w-[260px] h-[500px] md:w-[300px] md:h-[600px] w-[] object-cover animate-from-bottom delay-200"
        />

        <div className="md:py-5 md:px-8 px-2 py-3 first-org absolute bg-[#FF981E] rounded-tl-4xl rounded-br-4xl lg:left-[21%] md:left-[14%] left-[18%] top-[20%] flex gap-2 items-center animate-from-left delay-400">
          <Image
            src="/images/community-sec-three-2.png"
            alt="Community Section Three Image 2"
            width={500}
            height={500}
            className="w-[20%] h-[20%] rounded-full object-cover"
          />
          <p className="text-white md:text-[13px] text-[9px] font-bold">
            Hello everyone
          </p>
        </div>

        <div className=" md:py-4 md:px-8 px-3 py-4 second-org absolute bg-[#FF981E] rounded-4xl lg:right-[26%] md:right-[20%] right-[20%] top-[27%] flex flex-col gap-2 items-center animate-from-right delay-600">
          <Image
            src="/images/community-sec-three-3.png"
            alt="Community Section Three Image 2"
            width={500}
            height={500}
            className="w-[50%] h-[50%] rounded-full object-cover"
          />
          <div className="relative w-full">
            <span className="absolute w-3 h-3 top-[-24px] right-[28%] rounded-full bg-green-400"></span>
          </div>
          <p className="text-white md:text-[13px] text-[9px] mt-2 font-bold">
            Esther Daniel
          </p>
        </div>

        <div className=" md:py-4 md:px-8 px-3 py-4 third-org absolute bg-[#FF981E] rounded-4xl lg:left-[26%] md:left-[21%] left-[20%] top-[45%] flex flex-col gap-2 items-center animate-from-bottom">
          <Image
            src="/images/community-sec-three-4.png"
            alt="Community Section Three Image 2"
            width={500}
            height={500}
            className="w-[50%] h-[50%] rounded-full object-cover"
          />
          <div className="relative w-full">
            <span className="absolute w-3 h-3 top-[-24px] right-[28%] rounded-full bg-green-400"></span>
          </div>
          <p className="text-white md:text-[13px] text-[9px] mt-2 font-bold">
            Mariam
          </p>
        </div>
      </div>
    </div>
  );
};

export default withScrollAnimation(SectionThree);
