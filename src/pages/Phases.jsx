import Navbar from "../components/navbar";
import Swipper from "../components/swipper.jsx";
function Phases() {

  return (
    <> 

    <div className="bg-black w-screen h-screen overflow-hidden relative ">
      <video src="/moon.mp4" autoPlay loop muted className="absolute opacity-50" />
      <Swipper />
 
        <footer>
          <div className="footer absolute -bottom-0 left-0 w-full bg-gradient-to-r from-red-700 to-black flex justify-center items-center z-50">
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
</div>
      
    <Navbar />
    </>
  );
}
export default Phases;