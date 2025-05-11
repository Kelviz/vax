import Image from "next/image";
import "./SectionFive.css";

const SectionFive = () => {
  return (
    <div className="feature-section-five-container lg:mt-[2rem] md:mt-[2rem] mt-[2rem] lg:mb-0 md:mb-0 mb-[8rem]">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center px-2">
        Health tips for a healthier living
      </h1>
      <div className="w-full flex flex-col lg:flex-row md:flex-row justify-center lg:gap-2 md:gap-2 gap-8 mt-10">
        <div className="lg:w-[27%] md:w-[30%] w-full shadow-lg rounded-t-4xl rounded-bl-4xl  rounded-br-4xl md:rounded-br-none lg:rounded-br-none flex flex-col items-center">
          <Image
            src="/images/feature-sec-five-1.png"
            alt="feature five image"
            width={500}
            height={500}
            className="w-full h-[230px]"
          />

          <div className="p-2 min-h-[230px]">
            <h1 className="font-bold text-center mt-2 text-lg lg:text-2xl md:text-2xl">
              All you need to know about covid 19
            </h1>
            <p className="text-center mt-2">
              COVID-19 is a respiratory illness caused by the SARS-CoV-2 virus,
              first identified in late 2019. It spreads primarily through
              respiratory droplets and can range from mild symptoms to severe
              illness.
            </p>
          </div>
        </div>

        <div className="lg:w-[27%] md:w-[30%] w-full shadow-lg rounded-t-3xl flex flex-col items-center">
          <Image
            src="/images/feature-sec-five-2.png"
            alt="feature five image"
            width={500}
            height={500}
            className="w-full h-[230px]"
          />

          <div className="p-2 min-h-[230px]">
            <h1 className="font-bold text-center mt-2 text-lg lg:text-2xl md:text-2xl">
              New age of vaccine
            </h1>
            <p className="text-center mt-2">
              The new age of vaccines is defined by rapid innovation, precision
              science, and global collaboration. From mRNA technology to
              personalized immunization strategies, vaccines are now faster to
              develop, more effective.
            </p>
          </div>
        </div>

        <div className="lg:w-[27%] md:w-[30%] w-full bg-[#148782] text-white shadow-lg rounded-t-4xl  rounded-br-4xl   rounded-bl-4xl lg:rounded-bl-none md:rounded-bl-none flex flex-col items-center">
          <Image
            src="/images/feature-sec-five-3.png"
            alt="feature five image"
            width={500}
            height={500}
            className="w-full h-[230px]"
          />

          <div className="p-2 min-h-[230px]">
            <h1 className="font-bold text-center mt-2 text-lg lg:text-2xl md:text-2xl">
              WHO recent campaign on drug abuse
            </h1>
            <p className="text-center">
              The World Health Organization (WHO) has recently launched a
              comprehensive initiative to address drug use disorders through a
              new integrated framework and advocacy strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
