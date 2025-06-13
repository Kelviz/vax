import Image from "next/image";
import Navbar from "../../navbar/Navbar";
import MobileNav from "../../navbar/MobileNav";
import "./RecordHero.css";

const RecordHero = () => {
  return (
    <div className="record-hero-section  h-auto">
      <Navbar imgUrl={`/images/logo-white.png`} textColor={`text-white`} />
      <MobileNav logoUrl={`/images/logo-white.png`} textColor={`text-white`} />

      <div className="w-full mt-8 flex justify-center items-center flex-col">
        <h1 className="text-white lg:text-4xl md:text-4xl text-2xl  font-bold">
          Be Knowledgable <br /> Be Well-informed
        </h1>
        <p className="lg:mt-4 mt-2 mb-4 md:mb-0 text-white h-text">
          Know your vaccine history and data
        </p>
      </div>

      <div className="w-full h-[370px]  flex justify-center ">
        <div className="w-[50%] flex items-center justify-center relative ">
          <Image
            src="/images/record-hero-1.png"
            alt="Record Hero Image"
            width={500}
            height={500}
            className="record-hero-1 absolute lg:w-[35px] lg:h-[35px] md:w-[35px] md:h-[35px] w-[25px] h-[25px] top-[-110px] left-[5%]"
          />

          <Image
            src="/images/record-hero-2.png"
            alt="Record Hero Image"
            width={500}
            height={500}
            className="record-hero-2 absolute lg:w-[35px] lg:h-[35px] md:w-[35px] md:h-[35px] w-[25px] h-[25px] top-[-110px] right-[5%]"
          />

          <Image
            src="/images/record-hero-3.png"
            alt="Record Hero Image"
            width={500}
            height={500}
            className="record-hero-3  absolute w-[55px] h-[55px] top-[-30px] left-[-8%]"
          />

          <Image
            src="/images/record-hero-4.png"
            alt="Record Hero Image"
            width={500}
            height={500}
            className="record-hero-4 absolute w-[55px] h-[55px] top-[-30px] right-[-8%]"
          />

          <Image
            src="/images/record-hero-5.png"
            alt="Record Hero Image"
            width={500}
            height={500}
            className="record-hero-5 absolute w-[75px] h-[75px] top-[70px] left-[-5%]"
          />

          <Image
            src="/images/record-hero-6.png"
            alt="Record Hero Image"
            width={500}
            height={500}
            className="record-hero-6 absolute w-[75px] h-[75px] top-[70px] right-[-5%]"
          />

          <Image
            src="/images/record-hero-7.png"
            alt="Record Hero Image"
            width={500}
            height={500}
            className="record-hero-7 md:absolute lg:z-50 md:z-50 z-0 md:w-[250px] w-[200px] md:h-[450px]  h-[370px]  md:top-[30px] top-[30px] md:left-1/2 md:-translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default RecordHero;
