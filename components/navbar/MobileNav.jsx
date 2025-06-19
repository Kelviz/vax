"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

const MobileNav = ({ logoUrl, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-none flex  justify-between items-center lg:hidden md:hidden ">
      <div className="w-full  flex justify-between  items-center py-2 relative">
        <Link href="/" className="flex items-center  ">
          <Image
            src={logoUrl}
            alt="logo"
            width={500}
            height={500}
            className="w-[60px] h-[40px] object-cover"
          />
        </Link>

        <div className="w-[50px] h-[50px] flex justify-end">
          <RiMenu3Line
            className={`text-4xl cursor-pointer ${textColor}`}
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {isOpen && (
        <div className="w-full h-auto mobile-nav flex flex-col absolute top-0 left-0 z-50 py-2 px-4 transition-all duration-300 ease-in-out bg-white shadow-lg">
          <div className="w-full flex justify-end rounded-md">
            <IoMdClose
              className="text-[40px] rounded-md cursor-pointer bg-[#D9D9D9] p-2 font-bolder text-[#148782]"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="w-full flex flex-col mt-4 gap-4">
            <Link
              href="/features"
              className="text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/provisions"
              className="text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              Provisions
            </Link>
            <Link
              href="/record-keeping"
              className="text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              Record Keeping
            </Link>
            <Link
              href="/community"
              className="text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>

            <Link
              href="/our-team"
              className="text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </Link>

            <div className="w-full flex justify-center items-center mt-8">
              <button className="bg-[#FF981E] text-white w-full h-[50px] rounded-full flex justify-center items-center">
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
