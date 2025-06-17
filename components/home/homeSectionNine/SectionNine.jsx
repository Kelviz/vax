"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "./SectionNine.css";

const SectionNine = ({ text, imgUrl }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            containerRef.current?.classList.add("animate");
            textRef.current?.classList.add("animate");
            buttonsRef.current?.classList.add("animate");
            imageRef.current?.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="section-nine-container">
      <div
        ref={containerRef}
        className="flex justify-between items-center relative w-full bg-[#148782] lg:p-[3rem] md:p-[1.5rem] p-[1rem] mt-[4rem] animate-from-bottom"
      >
        <div className="flex sec-nine-left w-[50%] justify-center flex-col gap-8">
          <h1
            ref={textRef}
            className="text-white font-bold text-2xl md:text-3xl lg:text-3xl animate-from-bottom delay-100"
          >
            {text}
          </h1>

          <div
            ref={buttonsRef}
            className="flex lg:mt-8 md:mt-8 mt-2 gap-4 animate-from-bottom delay-200"
          >
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
                className="w-[70%] h-[70%] object-cover"
              />
            </Link>
          </div>
        </div>{" "}
        <div
          ref={imageRef}
          className="w-[50%] sec-nine-img h-[400px] relative animate-from-bottom delay-300"
        >
          <Image
            src={imgUrl}
            alt="hero"
            width={500}
            height={500}
            className="lg:w-[300px] md:w-[300px] w-[300px] h-auto absolute lg:top-[-90px] md:top-[-90px] top-[-125px] lg:right-[50px] md:right-[50px]  z-50 rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionNine;
