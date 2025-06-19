"use client";
import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

import "./SectionTwo.css";
import "../animations.css";
import { withScrollAnimation } from "../withScrollAnimation";

const SectionTwo = () => {
  return (
    <div className="community-section-two-container">
      <h1 className="md:text-3xl text-xl font-bold text-center animate-from-bottom">
        Explore our community forums
      </h1>
      <p className="mt-2 animate-from-bottom delay-200">You get to</p>

      <div className="w-full flex justify-between gap-8 items-center flex-col md:flex-row mt-12">
        <div className="flex flex-col md:w-[50%] w-full relative animate-from-bottom delay-400">
          <div className="absolute w-8 h-8 bg-[#FF981E] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-full flex justify-between">
            <Image
              src="/images/community-sec-two-1.png"
              alt="Community Section Two Image 1"
              width={500}
              height={500}
              className="w-[50%] object-cover animate-from-left"
            />

            <Image
              src="/images/community-sec-two-2.png"
              alt="Community Section Two Image 1"
              width={500}
              height={500}
              className="w-[50%] object-cover animate-from-right"
            />
          </div>

          <div className="w-full flex justify-between">
            <Image
              src="/images/community-sec-two-3.png"
              alt="Community Section Two Image 1"
              width={500}
              height={500}
              className="w-[50%] object-cover animate-from-left delay-200"
            />

            <Image
              src="/images/community-sec-two-4.png"
              alt="Community Section Two Image 1"
              width={500}
              height={500}
              className="w-[50%] object-cover animate-from-right delay-200"
            />
          </div>
        </div>

        <div className="md:w-[50%] w-full flex flex-col gap-4 animate-from-bottom">
          <p className="flex items-center gap-4">
            <BsCheckCircleFill className="text-[#4B4B4B] text-2xl" /> Organize
            discussions
          </p>
          <p className="flex items-center gap-4">
            <BsCheckCircleFill className="text-[#4B4B4B] text-2xl" /> Post
            questions and comments on posts
          </p>
          <p className="flex items-center gap-4">
            <BsCheckCircleFill className="text-[#4B4B4B] text-2xl" /> Upvote
            helpful answers
          </p>
          <p className="flex items-center gap-4">
            <BsCheckCircleFill className="text-[#4B4B4B] text-2xl" /> Engage in
            interactive polls and surveys
          </p>
          <p className="flex items-center gap-4">
            <BsCheckCircleFill className="text-[#4B4B4B] text-2xl" /> Get points
            for participating in community incentives .
          </p>
        </div>
      </div>
    </div>
  );
};

export default withScrollAnimation(SectionTwo);
