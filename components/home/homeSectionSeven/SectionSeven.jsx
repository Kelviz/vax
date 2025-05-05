"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "./SectionSeven.css";

const SectionSeven = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRef = useRef(null);

  const handlePlay = (event) => {
    const video = event.target;
    if (video.paused) {
      video.setAttribute("playing", "");
    }
  };

  const handlePause = (event) => {
    const video = event.target;
    video.removeAttribute("playing");
  };

  const handleDotClick = (index) => {
    setActiveVideo(index);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  };

  const videos = [
    {
      src: "/videos/FLU SHOT.mp4",
      title: "Flu Shot",
    },
    {
      src: "/videos/Kids and COVID-19 vaccination_ What to expect.mp4",
      title: "Kids and COVID-19 Vaccination",
    },
    {
      src: "/videos/Painless vaccination with Comfort-in needle free injection system.mp4",
      title: "Painless Vaccination",
    },
  ];

  return (
    <div className="section-seven-container">
      <h1 className="font-bold lg:text-3xl md:text-3xl text-2xl mt-4 text-center">
        See the Videos of Our Vaccination Process{" "}
      </h1>

      {/* Desktop View */}
      <div className="flex section-seven-videos mt-8">
        {videos.map((video, index) => (
          <video
            key={index}
            controls
            className="video-item"
            onPlay={handlePlay}
            onPause={handlePause}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full mt-8">
        <video
          ref={videoRef}
          controls
          className="w-full rounded-lg"
          onPlay={handlePlay}
          onPause={handlePause}
        >
          <source src={videos[activeVideo].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-3 mt-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeVideo === index ? "bg-[#FF981E]" : "bg-gray-300"
              }`}
              aria-label={`Show video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
