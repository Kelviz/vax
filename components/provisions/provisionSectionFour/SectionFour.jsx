"use client";
import { useState } from "react";
import Image from "next/image";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import "./SectionFour.css";

const SectionFour = () => {
  const questions = [
    {
      question: "Are vaccines safe during pregnancy?",
      answer:
        "Yes, They not only protect you but also help protect your baby in the early months of life.",
    },
    {
      question: "When should I get vaccinated during pregnancy?",
      answer:
        "It is recommended to get vaccinated during the second or third trimester.",
    },
    {
      question: "Do I need to get vaccinated again if I’ve been vaccinated?",
      answer:
        "Yes, it is important to stay updated with vaccinations as recommended by your healthcare provider.",
    },
    {
      question: "When should I get vaccinated during pregnancy?",
      answer:
        "It is recommended to get vaccinated during the second or third trimester.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="provision-section-four-container  relative">
      <div className="provision-section-four-top-shape"></div>
      <div className="provision-section-four-bottom-shape"></div>
      <div className="w-full flex flex-col lg:flex-row md:flex-row justify-between items-end">
        <div className="lg:w-[50%] md:w-[38%] w-full p-0 relative ">
          <div className="w-full h-[630px] lg:h-[520px] md:h-[520px] bg-[#FF981E] rounded-tl-[8rem]"></div>
          <Image
            src="/images/provision-sec-four.png"
            alt="provision image"
            width={500}
            height={500}
            className="w-[90%] h-[670px] lg:h-[650px] md:h-[600px] absolute object-cover object-top  bottom-0 left-1/2 -translate-x-1/2"
          />
        </div>
        <div className="lg:w-[48%] w-full md:w-[66%] mt-[3rem] lg:mt-0 md:mt-0 z-50 flex flex-col justify-between lg:px-4 md:px-4 px-0">
          <p className="text-white lg:text-left md:text-left text-center font-bold">
            Most Common Questions?
          </p>
          <div className="w-full flex flex-col gap-4 mt-4 ">
            {questions.map((item, index) => (
              <div className="w-full flex flex-col" key={index}>
                <div
                  className={` w-full flex justify-between items-center py-6 ${
                    activeIndex === index ? "rounded-t-lg" : "rounded-lg"
                  } bg-[#FF981E] text-white px-2 text-left cursor-pointer transition-all duration-300 ease-in-out`}
                  onClick={() => toggleActive(index)}
                >
                  <p>{item.question}</p>
                  <div className="transition-transform duration-300 ease-in-out">
                    {activeIndex === index ? (
                      <AiFillMinusCircle className="text-2xl" />
                    ) : (
                      <AiFillPlusCircle className="text-2xl" />
                    )}
                  </div>
                </div>
                <div
                  className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-[#FFF] text-black px-2 py-12 rounded-b-lg">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
