import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import notebook1 from "../../assets/others/notebookL.png";
import notebook2 from "../../assets/others/notebookM.png";
import comimg from "../../assets/others/notebookL.png";

const Banner = () => {
  return (
    <>
      <section id="home" className="h-[84vh] border-b-[1px] border-b-amber-200 bg-gray-900 overflow-hidden">
        
          <div className="grid grid-cols-2 gap-10">
            {/* left side */}
            <div className="w-full items-center justify-center py-28 px-20">
              <h1 className="text-5xl text-amber-200 leading-[44px] md: text-5x1 md:leading-tight lg:text-7x1 lg:leading-[1.2] font-bold md:tracking[-2px]">
                Hi, I'm Sandra Mawuwenam Dakey<br /> Web Interfaces.
              </h1>
              <p className="text-1g text-amber-200 Dtext-accent mb-[22px]">It's not about being the best, it's about being better than you were yesterday.....With one line of code at a time</p>
            </div>
            {/* right side */}
            <div className="w-full">
              <img src={comimg} alt="" className="px-28"/>
            </div>
          
        </div>
      </section>
    </>
  );
};

export default Banner;
