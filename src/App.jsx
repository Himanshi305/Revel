import Navbar from "./components/navbar";
import "./App.css";
import "./index.css";
import LatestUpdates from "./components/latest-updates";

function App() {
  return (
    <>
    <div className="relative">
          <main className="app-container overflow-x-hidden scrollbar-hide h-screen w-screen flex justify-center items-center relative">
        <video
          className="w-screen h-screen object-cover scale-125 relative "
          autoPlay
          loop
          muted
        >
          <source src="https://res.cloudinary.com/dwuljx2zv/video/upload/v1753012973/Whatif_fnupjz.mp4" type="video/mp4" />
        </video>
        <div style={{ fontFamily: "Akira, sans-serif", fontSize: "" }}>
          <h1 className="absolute top-20 md:top-16 left-8 md:left-15 p-5 font-bold text-black text-4xl md:text-6xl">
            WHAT'S NEW
          </h1>
        </div>
        <footer>
          <div className="footer absolute -bottom-30 md:-bottom-30 left-0 h-30 md:h-15 w-screen bg-gradient-to-r from-red-700 to-black flex justify-center items-center z-50">
            <div className="text-center">
              <p className="text-gray-500 text-lg font-bold">
                © 2024 REVEL UNIVERSE
              </p>
              <p className="text-gray-500 text-sm">All rights reserved.</p>
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
        <LatestUpdates />
        <Navbar />
      </main>
      </div>
    </>
  );
}

export default App;
//ussereeffect real time fecthing krta hai
//userstate data store krta hai jo fetch kya h
