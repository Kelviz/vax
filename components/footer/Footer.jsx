import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="w-full flex justify-between footer-first-section">
          <Link href="/" className="lg:w-[30%] md:w-[20%] w-auto ">
            <Image
              src="/images/logo-white.png"
              alt="logo"
              width={500}
              height={500}
              className="lg:w-[100px] lg:h-[60px] md:w-[80px] md:h-[40px] w-[60px] h-[40px] object-cover"
            />
          </Link>

          <div className="lg:w-[65%] md:w-[75%] w-[85%] text-[14px] gap-4 flex justify-between footer-nav-links">
            <div className="flex flex-col gap-4 w-[20%]">
              <Link href="">Home</Link>
              <Link href="">Features</Link>
              <Link href="">Provisions</Link>
              <Link href="">Record Keeping</Link>
              <Link href="">Data</Link>
            </div>
            <div className="flex flex-col gap-4 w-[20%]">
              <Link href="">Services</Link>
              <Link href="">Child care</Link>
              <Link href="">Adult care</Link>
              <Link href="">Special care</Link>
              <Link href="">Emergency </Link>
              <Link href="">Medical advice</Link>
            </div>
            <div className="flex flex-col gap-4 w-[20%]">
              <Link href="">Information</Link>
              <Link href="">Appointment</Link>
              <Link href="">Sign up</Link>
              <Link href="">Join community</Link>
              <Link href="">Newsletter</Link>
              <Link href="">Office locations</Link>
            </div>
            <div className="flex flex-col gap-4 w-[20%]">
              <Link href="">About us</Link>
              <Link href="">About this site</Link>
              <Link href="">About our app</Link>
              <Link href="">News network</Link>
              <Link href="">Blog and articles</Link>
              <Link href="">Price and subscriptions</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-[100px] footer-second-section  flex justify-between py-8 items-center border-t border-[#FFF]">
        <div className="w-[50%] footer-dwnload-app">
          <h1 className="font-bold lg:text-2xl md:text-2xl text-[16px] ">
            Download our Vaccine App
          </h1>

          <div className="flex mt-2 gap-4 ">
            <Link
              href=""
              className="bg-black p-2 flex justify-center items-center lg:w-[130px] lg:h-[50px] md:w-[130px] md:h-[50px] w-[90px] h-[40px]"
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
              className="bg-black p-2 flex justify-center items-center lg:w-[130px] lg:h-[50px] md:w-[130px] md:h-[50px] w-[90px] h-[40px]"
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

        <div className="footer-socials">
          <h1 className="font-bold lg:text-2xl md:text-2xl text-[16px] ">
            Follow our socials
          </h1>
          <div className="flex gap-2 mt-2">
            <div className="bg-[#FF981E] lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-full flex items-center justify-center p-2">
              <Image
                src="/images/Facebook_icon-icons.com_67051 6.png"
                alt="footer-img-socials"
                width={500}
                height={500}
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            <div className="bg-[#FF981E] lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-full flex items-center justify-center p-2">
              <Image
                src="/images/youtube_logo_icon_168737 1.png"
                alt="footer-img-socials"
                width={500}
                height={500}
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            <div className="bg-[#FF981E] lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-full flex items-center justify-center p-2">
              <Image
                src="/images/Twitter_icon-icons.com_66803 5.png"
                alt="footer-img-socials"
                width={500}
                height={500}
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            <div className="bg-[#FF981E] lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-full flex items-center justify-center p-2">
              <Image
                src="/images/whatsapp_icon-icons.com_62756 1.png"
                alt="footer-img-socials"
                width={500}
                height={500}
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            <div className="bg-[#FF981E] lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-full flex items-center justify-center p-2">
              <Image
                src="/images/linked_in_online_social_media_icon-icons.com_71877 2.png"
                alt="footer-img-socials"
                width={500}
                height={500}
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] bg-[#1D4D53]"></div>
    </footer>
  );
};

export default Footer;
