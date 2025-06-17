import React from "react";

const TeamDetails = ({ name, role }) => {
  return (
    <div className="w-full h-[200px] flex items-center bg-[#148782] rounded-t-4xl p-2 flex-col">
      <h2 className="text-white font-bold md:text-xl text-lg">{name}</h2>
      <p className="text-white mt-2">{role}</p>
    </div>
  );
};

export default TeamDetails;
