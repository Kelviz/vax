import Image from "next/image";
import Link from "next/link";
import "./SectionNine.css";

const SectionNine = ({ text, imgUrl }) => {
  return (
    <div className="section-nine-container">
      <div className="flex justify-between items-center relative w-full bg-[#148782] lg:p-[3rem] md:p-[1.5rem] p-[1rem] mt-[4rem]">
        <div className="flex sec-nine-left w-[50%] justify-center flex-col gap-8">
          <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-3xl">
            {text}
          </h1>

          <div className="flex lg:mt-8 md:mt-8 mt-2 gap-4 ">
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
        </div>

        <div className="w-[50%] sec-nine-img h-[400px] relative">
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
