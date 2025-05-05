"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./TopBar.css";

const TopBar = () => {
  const [isReadMood, setIsReadMood] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = ["English", "Spanish", "French", "German"];

  const toggleReadMood = () => {
    setIsReadMood(!isReadMood);
    // Apply dark/light theme logic here
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="topbar-container">
      <div
        className="topbar-language"
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
      >
        <span>{selectedLanguage}</span>
        <div className="language-icon">
          <MdKeyboardArrowDown size={20} />
        </div>
        {isLanguageOpen && (
          <div className="language-dropdown">
            {languages.map((lang) => (
              <div
                key={lang}
                className="language-option"
                onClick={() => {
                  setSelectedLanguage(lang);
                  setIsLanguageOpen(false);
                }}
              >
                {lang}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="toggle-container">
        <span>Read mood</span>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={isReadMood}
            onChange={toggleReadMood}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </div>
  );
};

export default TopBar;
