"use client";
import Image from "next/image";
import "../animations.css";
import withScrollAnimation from "../withScrollAnimation";
import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <div className="team-section-two-container">
      <h1 className="font-bold md:text-3xl text-xl text-center animate-from-bottom">
        Meet our specialists
      </h1>
      <div className="w-full flex flex-col mt-8 gap-4">
        <div className="w-full flex md:flex-row flex-col justify-between gap-4">
          <div className="md:w-[50%] w-full h-[300px] flex animate-from-bottom delay-200">
            <Image
              src="/images/team-sec-two-1.png"
              alt="Team Section Two Image 1"
              width={500}
              height={500}
              className="w-[50%] h-full object-cover"
            />

            <div className="w-[50%] h-[100px] bg-[#148782] flex flex-col items-center justify-center text-white p-2">
              <h2 className="font-bold">Carole Jackson</h2>
              <p className="text-sm">Pediatrician</p>
            </div>
          </div>

          <div className="md:w-[50%] w-full h-[300px] flex animate-from-bottom delay-400">
            <Image
              src="/images/team-sec-two-2.png"
              alt="Team Section Two Image 2"
              width={500}
              height={500}
              className="w-[50%] h-full object-cover"
            />

            <div className="w-[50%] h-[100px] bg-[#148782] flex flex-col items-center justify-center text-white p-2">
              <h2 className="font-bold">James Philis</h2>
              <p className="text-sm">Gynaecologist</p>
            </div>
          </div>
        </div>

        <div className="w-full flex md:flex-row flex-col justify-between gap-4">
          <div className="md:w-[50%] w-full h-[300px] flex animate-from-bottom delay-500">
            <Image
              src="/images/team-sec-two-3.png"
              alt="Team Section Two Image 3"
              width={500}
              height={500}
              className="w-[50%] h-full object-cover"
            />

            <div className="w-[50%] h-[100px] bg-[#148782] flex flex-col items-center justify-center text-white p-2">
              <h2 className="font-bold">David J. David</h2>
              <p className="text-sm">Endotrinologist</p>
            </div>
          </div>

          <div className="md:w-[50%] w-full h-[300px] flex animate-from-bottom delay-600">
            <Image
              src="/images/team-sec-two-4.png"
              alt="Team Section Two Image 4"
              width={500}
              height={500}
              className="w-[50%] h-full object-cover"
            />

            <div className="w-[50%] h-[100px] bg-[#148782] flex flex-col items-center justify-center text-white p-2">
              <h2 className="font-bold">Olivia cole</h2>
              <p className="text-sm">Nurse Practitioner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withScrollAnimation(SectionTwo);
