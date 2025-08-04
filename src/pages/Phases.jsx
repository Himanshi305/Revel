import Navbar from "../components/navbar";
import Swipper from "../components/swipper";

function Phases() {
  return (
    <>
      <div className="bg-black w-screen min-h-screen h-full overflow-hidden relative">
        <video
          src="https://res.cloudinary.com/dwuljx2zv/video/upload/v1753012932/moon_o3jhqk.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative -z-10">
          <Swipper />
        </div>

        <footer>
          <div className="footer fixed bottom-0 left-0 w-full bg-gradient-to-r from-red-700 to-black flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 py-3 px-2 md:px-0 z-50">
            <div className="text-center mb-2 md:mb-0">
              <p className="text-white text-base md:text-lg font-bold">
                © 2024 REVEL UNIVERSE
              </p>
              <p className="text-white text-xs md:text-sm">All rights reserved.</p>
            </div>
            <div className="flex flex-row gap-3 md:gap-5 items-center">
              <a
                href="https://github.com/himanshi305"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./github.png"
                  alt="GitHub"
                  className="w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition-opacity duration-200"
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
                  className="w-5 h-5 md:w-6 md:h-6 hover:opacity-80 transition-opacity duration-200"
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
                  className="w-8 h-5 md:w-10 md:h-6 hover:opacity-80 transition-opacity duration-200"
                />
              </a>
              <a
                href="https://discord.gg/1242544103586267228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./discord.png"
                  alt="Discord"
                  className="w-7 h-7 md:w-8 md:h-8 hover:opacity-80 transition-opacity duration-200"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <Navbar />
    </>
  );
}

export default Phases;