"use client";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import "./SectionSix.css";
import "../animations.css";
import { withScrollAnimation } from "../withScrollAnimation";

const SectionSix = () => {
  return (
    <div className="record-section-six-container">
      <div
        className="lg:w-[50%] md:w-[65%] w-[90%] relative font-bold py-14 bg-white rounded-4xl flex flex-col justify-center items-center animate-from-bottom"
        style={{ animationDelay: "0.2s" }}
      >
        <ImQuotesLeft className="absolute left-5 top-5" />
        <p className="px-12 ">
          We comply to every country’s regulatory and legal immunization policy
        </p>
        <ImQuotesRight className="absolute right-5 bottom-9" />
      </div>
    </div>
  );
};

export default withScrollAnimation(SectionSix);
