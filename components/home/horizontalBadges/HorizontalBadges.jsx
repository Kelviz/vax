import Image from "next/image";
import "./HorizontalBadges.css";

const HorizontalBadges = () => {
  const badges = [
    "/images/horizontal-1.png",
    "/images/horizontal-2.png",
    "/images/horizontal-3.png",
    "/images/horizontal-4.png",
    "/images/horizontal-5.png",
    "/images/horizontal-6.png",
    "/images/horizontal-7.png",
    "/images/horizontal-8.png",
  ];

  return (
    <div className="horizontal-badges-container">
      <div className="scroll-wrapper">
        {/* First set of images */}
        <div className="scroll-content">
          {badges.map((badge, index) => (
            <Image
              key={`badge-${index}`}
              src={badge}
              alt={`horizontal Badge ${index + 1}`}
              width={200}
              height={200}
              className="badge-image"
            />
          ))}
        </div>
        {/* Duplicate set for seamless scrolling */}
        <div className="scroll-content duplicate-content">
          {badges.map((badge, index) => (
            <Image
              key={`badge-duplicate-${index}`}
              src={badge}
              alt={`horizontal Badge ${index + 1}`}
              width={200}
              height={200}
              className="badge-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBadges;
