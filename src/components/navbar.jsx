import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <div style={{ fontFamily: 'Akira, sans-serif' }}>
      <div className="revel w-10 absolute top-5 left-2 md:left-5">
        <img className="" src="./REVEL.png" alt="" />
      </div>
      <nav className="absolute top-8 left-15 md:left-115 w-90 md:w-180 gap-5 md:gap-10 flex rounded-full shadow-lg">
        <motion.div whileHover={{scale:1.2}} className="home text-sm md:text-2xl px-2 md:px-10">
          <Link to="/" className="text-black">
            Home
          </Link>
        </motion.div>
        <motion.div whileHover={{scale:1.2}} className="character text-sm md:text-2xl px-2 md:px-8">
          <Link to="/character" className="text-black"
          >
            Character
          </Link>
        </motion.div>
        <motion.div whileHover={{scale:1.2}} className="phases text-sm md:text-2xl px-2 md:px-8">
          <Link to="/phases" className="text-black "
          >
            Phases
          </Link>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
