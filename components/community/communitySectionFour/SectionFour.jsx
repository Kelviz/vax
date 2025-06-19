"use client";
import Image from "next/image";
import "./SectionFour.css";
import "../animations.css";
import { withScrollAnimation } from "../withScrollAnimation";

const SectionFour = () => {
  return (
    <div className="community-section-four-container">
      <h1 className="font-bold md:text-3xl text-xl text-center animate-from-bottom">
        Recent Events and Campaigns
      </h1>

      <div className="w-full flex flex-wrap justify-center items-center mt-10 gap-4">
        <div className="md:w-[300px] md:h-[300px] w-[90%] h-[300px] rounded-2xl relative flex-shrink-0 animate-from-bottom delay-200">
          <Image
            src="/images/community-sec-four-1.png"
            alt="Community Section Four Image 1"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/50 rounded-2xl" />
          <div className="absolute bottom-0 left-0 w-full text-white p-2">
            <h2 className="text-lg font-bold">Outreach against malaria</h2>
            <p className="mt-3">20/7/2023</p>
          </div>
        </div>

        <div className="md:w-[300px] md:h-[300px] w-[90%] h-[300px] rounded-2xl relative flex-shrink-0 animate-from-bottom delay-400">
          <Image
            src="/images/community-sec-four-2.png"
            alt="Community Section Four Image 1"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/50 rounded-2xl" />
          <div className="absolute bottom-0 left-0 w-full text-white p-2">
            <h2 className="text-lg font-bold">Polio immunization in Zambia</h2>
            <p className="mt-3">30/8/2024</p>
          </div>
        </div>

        <div className="md:w-[300px] md:h-[300px] w-[90%] h-[300px] rounded-2xl relative flex-shrink-0 animate-from-bottom delay-600">
          <Image
            src="/images/community-sec-four-3.png"
            alt="Community Section Four Image 1"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/50 rounded-2xl" />
          <div className="absolute bottom-0 left-0 w-full text-white p-2">
            <h2 className="text-lg font-bold">Covid 19 vaccines in Africa</h2>
            <p className="mt-3">11/9/2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withScrollAnimation(SectionFour);
