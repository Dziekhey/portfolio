import React from 'react';
import contact from '../assets/contact.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const LeftContact = () => {
  return (
    <div>
     <div className="w-full h-full px-8 pt-8 shadow-2xl shadow-black bg-zinc-800 lgl:flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-contain rounded-lg mb-2"
        src={contact}
        alt="contactImg"
      />
      <div className="flex flex-col gap-6">
        <h3 className="text-3xl font-bold pt-3 text-white">Sandra Mawuwenam Dakey</h3>
        <h5 className="text-lg font-normal text-white">
        Web Developer
        </h5>
        <p className="text-base text-white tracking-wide">
        Feel free to reach out! Whether you have a project in mind or just want to say hello, I'm all ears.
        </p>
        <p className="text-base text-white flex items-center gap-2">
          Phone: <span className="text-lightText">+233 504062107</span>
        </p>
        <p className="text-base text-white flex items-center gap-2">
          Email: <span className="text-lightText">dakeysandra@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-3">
        <h2 className="text-base text-white pt-4 font-titleFont mb-4">FIND ME ON</h2>
        <div className="flex gap-2">
          <span className="bannerIcon">
          <FaTwitter />
          </span>
          <span className="bannerIcon">
          <FaFacebookF />
          </span>
          <span className="bannerIcon">
          <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default LeftContact;