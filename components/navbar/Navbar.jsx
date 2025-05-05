import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

const Navbar = ({ imgUrl, textColor }) => {
  return (
    <header
      className={`lg:flex md:flex hidden  justify-between mt-[40px] ${textColor} `}
    >
      <Link href="/" className="flex items-center">
        <Image
          src={imgUrl}
          alt="logo"
          width={500}
          height={500}
          className="w-[100px] h-[60px] object-cover site-logo"
        />
      </Link>
      <div className="flex w-[87%] justify-between  items-center mr-1">
        <nav className="flex w-[80%] lg:justify-center items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-[18px] font-semibold cursor-pointer">
              <Link href="/features">Features</Link>
            </li>
            <li className="text-[18px] font-semibold cursor-pointer">
              <Link href="/provisions">Provisions</Link>
            </li>
            <li className="text-[18px] font-semibold cursor-pointer">
              <Link href="/record-keeping">Record Keeping</Link>
            </li>
            <li className="text-[18px] font-semibold cursor-pointer">
              <Link href="community">Community</Link>
            </li>
          </ul>
        </nav>
        <button className="nav-button">Download App</button>
      </div>
    </header>
  );
};

export default Navbar;
