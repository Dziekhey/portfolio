import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import laptop from "../../assets/others/laptop.png";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Web Developer.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <>
      <section
        id="home"
        className="h-[84vh] md:h-screen border-b-[1px] border-b-amber-200 bg-gray-900 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* left side */}
          <div className="w-full md:items-center md:justify-center py-10 md:py-28 px-5 md:px-20">
            <h1 className="text-3xl md:text-5xl text-white leading-[44px] md:leading-tight font-bold md:tracking[-2px]">
              Hi, I'm{" "}
            </h1>
            <h1 className="text-5xl md:text-7xl text-amber-200 leading-[44px] md:leading-tight font-bold md:tracking[-2px]">
              Sandra Mawuwenam Dakey
            </h1>
            <h2 className="text-4xl my-3 font-bold text-white">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ffff"
              />
            </h2>
            <p className="text-lg md:text-xl text-white pt-2 md:pt-4 mb-8 md:mb-[22px]">
              It's not about being the best, it's about being better than you
              were yesterday.....With one line of code at a time
            </p>
          </div>
          {/* right side */}
          <div className="w-full relative">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="h-72 w-72 md:h-96 md:w-96 rounded-full bg-gray-800 shadow-xl flex justify-center items-center animate-bounce">
                <img src={laptop} alt="" className="w-3/4 h-3/4 md:w-full md:h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
