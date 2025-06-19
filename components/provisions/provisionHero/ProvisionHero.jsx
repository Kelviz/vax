"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../../navbar/Navbar";
import MobileNav from "../../navbar/MobileNav";
import "./ProvisionHero.css";
import "../animations.css";
import { withScrollAnimation } from "../withScrollAnimation";

const ProvisionHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/images/mb-provision-hero-1.png",
    "/images/mb-provision-hero-2.png",
    "/images/mb-provision-hero-3.png",
    "/images/mb-provision-hero-4.png",
    "/images/mb-provision-hero-5.png",
    "/images/provision-hero-6.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="provision-hero-container md:h-auto h-[80vh] relative">
      {/* Mobile Background Image */}
      <div className="md:hidden absolute inset-0 w-full h-full">
        <Image
          src={backgroundImages[currentImageIndex]}
          alt="background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="provision-navbar relative z-20">
        <Navbar imgUrl={`/images/logo-white.png`} textColor={`text-white`} />
        <MobileNav
          logoUrl={`/images/logo-white.png`}
          textColor={`text-white`}
        />
      </div>

      <div className="lg:w-[40%] md:w-[50%]  px-8 flex flex-col lg:justify-start md:justify-start justify-center items-center lg:mt-[3rem] md:mt-[3rem] mt-17 relative z-10">
        <h1
          className="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center lg:mt-4 md:mt-4 mt-0 animate-from-bottom"
          style={{ animationDelay: "0.6s" }}
        >
          Your Health is always Our Priority
        </h1>

        <p
          className="mt-2 lg:text-lg md:text-md text-[14px] text-white text-center animate-from-bottom"
          style={{ animationDelay: "0.8s" }}
        >
          There is no delay when it comes to your wellbeing Let the
          professtionals take care of you
        </p>

        <button
          className="lg:w-[50%] md:w-[60%] w-auto mt-3 text-white rounded-full bg-[#FF981E] border border-gray-300 px-4 lg:py-4 md:py-4 py-3 font-bold text-center animate-from-bottom"
          style={{ animationDelay: "1s" }}
        >
          Book Consultation
        </button>
      </div>

      <div className="w-[80%] lg:flex md:flex hidden  justify-between mt-8">
        <Image
          src="/images/provision-hero-5.png"
          alt="hero"
          width={500}
          height={500}
          className="lg:left-[13%] md:left-[17%] bottom-0 lg:w-[180px] md:w-[150px] h-[180px] animate-from-left z-10"
          style={{ animationDelay: "0.6s" }}
          priority
        />

        <Image
          src="/images/provision-hero-6.png"
          alt="hero"
          width={500}
          height={500}
          className="lg:right-[13%] md:right-[17%] bottom-0 lg:w-[180px] md:w-[150px] h-[180px] animate-from-right z-10"
          style={{ animationDelay: "0.6s" }}
          priority
        />
      </div>

      {/* Desktop/Tablet Images */}
      <div className="w-full lg:block md:block hidden absolute top-0 left-0 pointer-events-none">
        <Image
          src="/images/provision-hero-1.png"
          alt="hero"
          width={500}
          height={500}
          className="absolute lg:left-[10%] md:left-[6%] top-[130px] lg:w-[170px] md:w-[150px] lg:h-[200px] md:h-[170px] animate-from-left z-10"
          style={{ animationDelay: "0.2s" }}
          priority
        />

        <Image
          src="/images/provision-hero-2.png"
          alt="hero"
          width={500}
          height={500}
          className="absolute lg:right-[10%] md:right-[6%] top-[130px] lg:w-[170px] md:w-[150px] lg:h-[200px] md:h-[170px] animate-from-right z-10"
          style={{ animationDelay: "0.2s" }}
          priority
        />

        <Image
          src="/images/provision-hero-3.png"
          alt="hero"
          width={500}
          height={500}
          className="absolute left-0 top-[260px] lg:w-[150px] md:w-[130px] h-[200px] animate-from-left z-10"
          style={{ animationDelay: "0.4s" }}
          priority
        />

        <Image
          src="/images/provision-hero-4.png"
          alt="hero"
          width={500}
          height={500}
          className="absolute right-0 top-[260px] lg:w-[150px] md:w-[130px] h-[200px] animate-from-right z-10"
          style={{ animationDelay: "0.4s" }}
          priority
        />
      </div>

      {/* Mobile Navigation Dots */}
      <div className="md:hidden flex justify-center gap-2 absolute bottom-8 left-0 right-0 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex ? "bg-[#FF981E] w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default withScrollAnimation(ProvisionHero);
