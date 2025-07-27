import React, { useEffect, useState, useRef } from "react";
import { fetchCharacterData } from "../components/movie_api";
import { motion } from "motion/react";

export default function CharacterCard({ character }) {
  const cardRef = useRef(null);
  const [alignLeft, setAlignLeft] = useState(false);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  // Responsive: track window width for mobile/desktop
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleInfo = () => {
    setInfoVisible((prev) => !prev);
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (infoVisible && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      // On mobile, always show info below card
      if (windowWidth < 768) {
        setAlignLeft(false);
      } else {
        // Desktop: check if card is near right edge
        if (rect.right + 320 > windowWidth) {
          setAlignLeft(true);
        } else {
          setAlignLeft(false);
        }
      }
    }
  }, [infoVisible, windowWidth]);

  useEffect(() => {
    if (infoVisible && !info) {
      setLoading(true);
      fetchCharacterData(character.name)
        .then((data) => {
          setInfo(data);
        })
        .catch(() => {
          setInfo({ bio: "Info not found", movies: [] });
        })
        .finally(() => setLoading(false));
    }
  }, [infoVisible, character.name, info]);

  // Responsive styles for info box
  const getInfoBoxClasses = () => {
    // Mobile: show below card, full width
    if (windowWidth < 768) {
      return "z-10 absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[90vw] max-w-xs sm:max-w-sm bg-black/80 backdrop-blur p-4 shadow-2xl rounded-2xl";
    }
    // Desktop: show left or right of card
    return `z-10 absolute top-0 ${
      alignLeft
        ? "right-full mr-2"
        : "left-full ml-[-80px]"
    } bg-black/80 backdrop-blur left-45 p-5 md:p-2 top-10 shadow-2xl h-[250px] md:h-[620px] md:w-[280px] rounded-2xl`;
  };

  // Responsive styles for movie posters grid
  const getMoviesGridClasses = () => {
    if (windowWidth < 768) {
      return "relative grid grid-cols-2 gap-2 h-32 overflow-auto scrollbar-hide z-15";
    }
    return "relative grid grid-rows-1 md:grid-cols-1 h-40 md:h-140 rounded-2xl backdrop-blur overflow-auto scrollbar-hide gap-1 md:gap-2 z-15";
  };

  // Responsive poster image classes
  const getPosterImgClasses = () => {
    if (windowWidth < 768) {
      return "w-full h-24 object-cover rounded";
    }
    return "md:w-full w-40 h-38 md:h-full object-cover rounded";
  };

  return (
    <div className="poster top-30 md:top-0 md:mx-auto md:my-auto max-w-60 md:max-w-80 relative">
      <motion.div
        ref={cardRef}
        className="h-80 relative"
        onClick={toggleInfo}
        style={{
          ...character.positionStyle,
        }}
      >
        <motion.img
          initial={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          whileHover={{
            scale: [1.1, 1.05, 1],
            transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
          }}
          whileTap={{ scale: 0.8 }}
          className={`${character.className}`}
          src={character.image}
          alt={character.name}
        />
        {infoVisible && (
          <div className={getInfoBoxClasses()}>
            <h2 className="text-xl font-bold text-white mb-2">{character.name}</h2>
            {loading && <p className="text-white">Loading info...</p>}
            {info && (
              <>
                <div className={getMoviesGridClasses()}>
                  {info.movies.map((m) =>
                    m.posterUrl ? (
                      <img
                        key={m.title}
                        src={m.posterUrl}
                        alt={m.title + "poster"}
                        className={getPosterImgClasses()}
                      />
                    ) : (
                      <span key={m.title} className="text-white text top-5 ">
                        {m.title}
                      </span>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
