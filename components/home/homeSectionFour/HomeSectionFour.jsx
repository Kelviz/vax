import React from "react";
import Image from "next/image";
import "./HomeSectionFour.css";

const HomeSectionFour = () => {
  return (
    <div className="section-four-container">
      <div className="w-full flex items-center justify-center flex-col">
        <h1 className="font-bold lg:text-3xl md:text-3xl text-2xl text-center">
          Premuim features for you and your family
        </h1>
        <p className="mt-2 text-center text-wrap lg:text-[18px] md:text-[18px] text-[16px]">
          We bring you access to modern medical science from the comfort of your
          home
        </p>
      </div>

      <div className="relative w-full flex items-center justify-center">
        <Image
          src="/images/section-four-1.png"
          alt="Section four 1 Image"
          width={500}
          height={500}
          className=" w-[300px] mt-8 img-orange "
        />
        <Image
          src="/images/section-four-2.png"
          alt="Section four 2 Image"
          width={500}
          height={500}
          className=" w-[250px] absolute mt-8 img-wc "
        />

        <p className="absolute text-[14px] font-bold top-[150px] ml-[-370px] text-right first-text-one">
          Vaccine Tracker
        </p>
        <p className="absolute text-[14px] font-bold top-[150px] mr-[-400px] text-left first-text-two">
          Medication Tracker
        </p>

        <p className="absolute text-[14px] font-bold top-[300px] ml-[-430px] text-right second-text-one">
          Hospital Database
        </p>
        <p className="absolute text-[14px] font-bold top-[300px] mr-[-390px] text-left second-text-two">
          Health Blog
        </p>

        <p className="absolute  text-[14px] font-bold top-[450px] ml-[-480px] text-right third-text-one">
          Unstructured Supplementary
          <br /> Service Data (USSD)
        </p>
        <p className="absolute  text-[14px] font-bold top-[450px] mr-[-415px] text-left third-text-two">
          Government Hospital
          <br /> Incoropration
        </p>
      </div>
    </div>
  );
};

export default HomeSectionFour;
