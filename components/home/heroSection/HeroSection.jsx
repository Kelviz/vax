import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../navbar/Navbar";
import MobileNav from "../../navbar/MobileNav";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Navbar imgUrl={`/images/logo-black.png`} textColor={`text-black`} />
      <MobileNav logoUrl={`/images/logo-black.png`} textColor={`text-black`} />
      <div className="w-full flex items-center flex-col lg:flex-row md:flex-row justify-between md:mt-8 mt-[2rem]">
        <div className="hero-text-container flex flex-col">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-black">
            Evolution of Science
            <br />
            Makes Easier Life
          </h1>
          <p className="mt-4 lg:text-lg md:text-md text-[14px] pr-16 text-black">
            Trust the science for you and your loved ones health
            <br /> and medical wellbeing. For a better, easier
            <br /> and healtheir living.
          </p>

          <div className="flex mt-8 gap-4 ">
            <Link
              href=""
              className="bg-black p-2 flex justify-center items-center w-[130px] h-[50px]"
            >
              <Image
                src="/images/google-icon.png"
                alt="google"
                width={200}
                height={200}
                className="w-[90%]  h-full object-cover"
              />
            </Link>
            <Link
              href=""
              className="bg-black p-2 flex justify-center items-center w-[130px] h-[50px]"
            >
              <Image
                src="/images/ios-icon.png"
                alt="ios"
                width={200}
                height={200}
                className="w-[100%] h-full object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="hero-image-container  h-[400px] relative lg:mt-4 md:mt-2 mt-8 flex justify-center items-center">
          <Image
            src="/images/home-hero-2.png"
            alt="hero"
            width={500}
            height={500}
            className=" hero-image left-hero-image  mt-[-10] lg:ml-[-200px]  absolute ml-[-180px]  z-10 rounded-4xl"
          />

          <Image
            src="/images/home-hero-3.png"
            alt="hero"
            width={500}
            height={500}
            className=" hero-image right-hero-image  mt-[100px]  lg:mr-[-140px]  mr-[-120px] rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
