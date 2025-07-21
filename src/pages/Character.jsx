import React, { useState } from "react";
import Navbar from "../components/navbar";
import CharacterCard from "../components/charactercard";
import { characters } from "../data/char_data";

function Character() {
  const [hoveredChar, setHoveredChar] = useState(null);
  return (
    <div className="relative scrollbar-hide overflow-x-hidden ">
      
        <div className="absolute w-screen h-full " >
          <video className="" src="https://res.cloudinary.com/dwuljx2zv/video/upload/v1753012316/character_cpnl7z.mp4" autoPlay loop muted />
        </div>
        <div className="grid grid-cols-4 gap-6 p-4">
        {characters.map((char) => (
          <CharacterCard
            key={char.name}
            character={char}
            isHovered={hoveredChar === char.name}
            onClick={() => setHoveredChar(char.name)}
            />
          ))}
        <footer>
          <div className="footer absolute -bottom-38 left-0 w-full bg-gradient-to-r from-red-700 to-black flex justify-center items-center z-50">
            <div className="text-center">
              <p className="text-white text-lg font-bold">
                © 2024 REVEL UNIVERSE
              </p>
              <p className="text-white text-sm">All rights reserved.</p>
            </div>
            <a
              href="https://github.com/himanshi305"
              target="_blank"
              rel="noopener noreferrer"
              >
              <img
                src="./github.png"
                alt="GitHub"
                className="w-10 h-10 hover:opacity-80 transition-opacity duration-200"
                />
            </a>
            <a
              href="https://twitter.com/Himanshiii2005"
              target="_blank"
              rel="noopener noreferrer"
              >
              <img
                src="./twitter.png"
                alt="twitter"
                className="w-6 h-6 hover:opacity-80 transition-opacity duration-200"
                />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshi-gupta3005/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./linkedin.png"
                alt="linkedin"
                className="w-10 h-6 hover:opacity-80 transition-opacity duration-200"
                />
            </a>

            <a
              href="https://discord.gg/1242544103586267228"
              target="_blank"
              rel="noopener noreferrer"
              >
              <img
                src="./discord.png"
                alt="GitHub"
                className="w-8 h-8 hover:opacity-80 transition-opacity duration-200"
                />
            </a>
          </div>
        </footer>
        <Navbar />
      </div>
    </div>
  );
}

export default Character;
