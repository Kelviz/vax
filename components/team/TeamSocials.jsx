import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const TeamSocials = () => {
  return (
    <div className="w-full bg-[#148782] h-[200px]  p-2 flex gap-3 justify-center items-end">
      <a
        href=""
        className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <FaFacebook size={24} color="#4267B2" />
      </a>

      <a
        href=""
        className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <FaYoutube size={24} color="#FF0000" />
      </a>

      <a
        href=""
        className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <FaTwitter size={24} color="#1DA1F2" />
      </a>

      <a
        href=""
        className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <FaWhatsapp size={24} color="#25D366" />
      </a>

      <a
        href=""
        className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <FaLinkedinIn size={24} color="#0077B5" />
      </a>
    </div>
  );
};

export default TeamSocials;
