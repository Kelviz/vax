import Image from "next/image";
import TeamSocials from "../TeamSocials";
import TeamDetails from "../TeamDetails";
import "./SectionThree.css";

const SectionThree = () => {
  const data = [
    {
      name: "Friday Nuke",
      role: "Team leader",
      imgurl: "/images/team-sec-three-1.png",
    },
    {
      name: "Joyce Stone",
      role: "Team codrdinator",
      imgurl: "/images/team-sec-three-2.png",
    },
    {
      name: "Donald Travis",
      role: "Medical director",
      imgurl: "/images/team-sec-three-3.png",
    },
    {
      name: "Ruth Anderson",
      role: "Data Analyst",
      imgurl: "/images/team-sec-three-4.png",
    },
    {
      name: "Freya Roman",
      role: "Vaccine Organizer",
      imgurl: "/images/team-sec-three-5.png",
    },
    {
      name: "Owen Gador",
      role: "Vaccine Organizer",
      imgurl: "/images/team-sec-three-6.png",
    },
    {
      name: "Stella Daniels",
      role: "Scientist",
      imgurl: "/images/team-sec-three-7.png",
    },
    {
      name: "Neomi Jeffery",
      role: "Researcher",
      imgurl: "/images/team-sec-three-8.png",
    },
    {
      name: "Jefferson Nate",
      role: "Research cordinator",
      imgurl: "/images/team-sec-three-9.png",
    },
  ];

  return (
    <div className="team-section-three-container">
      <h1 className="font-bold md:text-3xl text-xl text-center">
        Medical network
      </h1>

      <div className="w-full mt-12 flex flex-wrap justify-center items-center gap-4">
        {data.map((member, index) => (
          <div
            className="w-[100%] md:w-[350px] flex flex-col items-center gap-4 justify-center relative"
            key={index}
          >
            <TeamDetails name={member.name} role={member.role} />
            <Image
              src={member.imgurl}
              alt={`Team Section Three Image ${index + 1}`}
              width={200}
              height={200}
              className="w-[70px] h-[70px] object-cover rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <TeamSocials />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
