import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import notebook1 from "../../assets/others/notebookL.png";
import notebook2 from "../../assets/others/notebookM.png";
import comimg from "../../assets/others/comimg.png";

const Banner = () => {
  return (
    <>
      <section id="home" className="lg:h-[95vh] flex items-center bg-primary 1g:bg-cover 1g:bg-center lg:bg-no-repeat py-32 1g:py-0 overflow-hidden">
        <div className="">
          <div className="grid grid-cols-2 gap-10">
            {/* left side */}
            <div className="w-full">
              <p className="text-1g Dtext-accent mb-[22px]">Hey, I'm Jane</p>
              <h1 className="text-4xl leading-[44px] md: text-5x1 md:leading-tight lg:text-7x1 lg:leading-[1.2] font-bold md:tracking[-2px]">
                I Build & Design <br /> Web Interfaces.
              </h1>
              <p cłassName='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-1g text-center lg: text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, quis ad.</p>
            </div>
            {/* right side */}
            <div className="w-full">
              <img src={comimg} alt="" />
            </div>
          </div> 
        </div>
      </section>
    </>
  );
};

export default Banner;
