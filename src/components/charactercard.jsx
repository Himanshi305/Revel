import React, { useEffect, useState, useRef } from "react";
import { fetchCharacterData } from "../components/movie_api";
import {motion} from "motion/react";

export default function CharacterCard({
  character,
}) {
  const cardRef = useRef(null);//this hook is used for reference to detect of the character is near the edge or not
  const [alignLeft, setAlignLeft] = useState(false); //this hook is used to align the card left or right
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  const toggleInfo = () => {
    setInfoVisible((prev) => !prev);
  };
  //this function is used to toggle the info box visibility
  //it will be used when the user clicks on the card

  useEffect(() => {
    if (infoVisible && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      // Check if the card is near the right edge of the viewport
      if (rect.right + 320> windowWidth) {
        setAlignLeft(true); //not enough space on the right, align left
      } else {
        setAlignLeft(false); //enough space
      } 
    }
  }, [infoVisible]); //call when hovered or name changes

  useEffect(() => {
    if (infoVisible && !info) {
      setLoading(true); //loading
      fetchCharacterData(character.name) //searching name
        .then((data) => {
          setInfo(data); //data milega
        })
        .catch(() => {
          setInfo({ bio: "Info not found", movies: [] });
        })
        .finally(() => setLoading(false));
    }
  }, [infoVisible, character.name, info]); //call
  return (
    
    <div className="poster top-30 md:top-30 max-w-60 md:max-w-80 relative">
    <motion.div ref={cardRef} className="h-80 relative"
      onClick={toggleInfo}
      style = {{
        ...character.positionStyle
      }}
      
    >
      <motion.img initial={{opacity:1}} transition={{ duration:0.2}} 
        whileHover={{scale: [1.1, 1.05, 1], 
        transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
          }}
           whileTap={{scale:0.8}} className={`${character.className}`} //hover effects on images
        src={character.image}
        alt={character.name}
        
      />
      {infoVisible && (//ye info ke box ka background ka css h
        <div className={`z-10 absolute top-0 md:${alignLeft ? "right-full mr-2" : "left-full ml-[-80px]"} backdrop-blur md:top-[-50px] left-45 p-5 md:p-2 top-10 shadow-2xl h-[250px] md:h-[620px] md:w-[400px] rounded-2xl`}>
          <h2 className="text-xl font-bold text-white mb-2">{character.name}</h2>

          {loading && <p>Loading info...</p>}

          {info &&(//ye info ke poster ka css h
            <>
              <div className="relative grid grid-rows-1 md:grid-cols-1 h-40 md:h-140 rounded-2xl backdrop-blur overflow-auto scrollbar-hide gap-1 md:gap-2 z-15">
                {info.movies.map((m) =>
                  m.posterUrl ? (
                    <img
                      key={m.title}
                      src={m.posterUrl}
                      alt={m.title + "poster"}
                      className="md:w-full w-40 h-38 md:h-full object-cover rounded"//ye poster ke display ka css h
                    />
                  ) : (
                    <span key={m.title} className="text-white text top-5 ">{m.title}</span>
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
