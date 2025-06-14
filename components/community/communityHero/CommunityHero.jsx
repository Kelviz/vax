import Image from "next/image";
import Link from "next/link";
import Navbar from "../../navbar/Navbar";
import MobileNav from "../../navbar/MobileNav";
import "./CommunityHero.css";

//community-hero-1
const CommunityHero = () => {
  return (
    <div className="community-hero-container">
      <Navbar imgUrl={`/images/logo-white.png`} textColor={`text-white`} />
      <MobileNav logoUrl={`/images/logo-white.png`} textColor={`text-white`} />

      <div className="w-full md:mt-14 mt-8 flex flex-col md:flex-row justify-between">
        {/* left side */}
        <div className="md:w-[50%] w-full flex flex-col text-white">
          <h1 className="lg:text-3xl md:text-2xl text-2xl font-bold">
            Protect Your <span className="p-2 bg-[#FF981E]">Health</span>{" "}
            Protect Your Future
          </h1>

          <p className="mt-4">
            Vaccination the key to a safer community. We are here to make
            immunization safer, accessible simple and reliable
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
                className="w-[70%] h-[70%] object-cover"
              />
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className="md:w-[50%] w-full flex justify-center md:justify-end mt-8 md:mt-0  gap-2">
          <div className="w-auto flex flex-col items-end gap-2">
            <div className="w-[150px] h-[150px] relative rounded-2xl">
              <Image
                src="/images/community-hero-1.png"
                alt="Community Hero Image 1"
                width={500}
                height={500}
                className="community-hero-image w-full h-full rounded-2xl object-cover"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/images/community-hero-9.png"
                  alt="Community Hero Image 1"
                  width={500}
                  height={500}
                  className="community-hero-image w-[50%]"
                />
              </div>
            </div>

            <Image
              src="/images/community-hero-2.png"
              alt="Community Hero Image 1"
              width={500}
              height={500}
              className="community-hero-image w-[100px] h-[100px] rounded-2xl object-cover"
            />
          </div>

          <div className="w-auto flex flex-col items-end gap-2">
            <Image
              src="/images/community-hero-3.png"
              alt="Community Hero Image 1"
              width={500}
              height={500}
              className="community-hero-image w-[100px] h-[100px] rounded-2xl object-cover"
            />
            <Image
              src="/images/community-hero-4.png"
              alt="Community Hero Image 1"
              width={500}
              height={500}
              className="community-hero-image w-[100px] h-[100px] rounded-2xl object-cover"
            />
            <Image
              src="/images/community-hero-5.png"
              alt="Community Hero Image 1"
              width={500}
              height={500}
              className="community-hero-image w-[100px] h-[100px] rounded-2xl object-cover"
            />
            <Image
              src="/images/community-hero-6.png"
              alt="Community Hero Image 1"
              width={500}
              height={500}
              className="community-hero-image w-[100px] h-[100px] rounded-2xl object-cover"
            />
          </div>

          <div className="w-auto flex flex-col items-center justify-center gap-2">
            <Image
              src="/images/community-hero-7.png"
              alt="Community Hero Image 1"
              width={500}
              height={500}
              className="community-hero-image w-[100px] h-[100px] rounded-2xl object-cover"
            />
            <Image
              src="/images/community-hero-8.png"
              alt="Community Hero Image 1"
              width={500}
              height={500}
              className="community-hero-image w-[100px] h-[100px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHero;
