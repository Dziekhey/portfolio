import React from 'react';
import contact from '../assets/contact.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const LeftContact = () => {
  return (
    <div>
     <div className="w-full h-full px-8 pt-8 shadow-2xl shadow-black bg-gray-900 lgl:flex flex-col gap-8 justify-center">
      <img
        className="w-full h-80 object-contain rounded-lg mb-2"
        src={contact}
        alt="contactImg"
      />
      <div className="flex flex-col gap-8">
        <h3 className="text-3xl font-bold pt-3 text-amber-200">Sandra Mawuwenam Dakey</h3>
        <h5 className="text-lg text-black font-bold">
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
      <div className="flex flex-col gap-6 pt-3">
        <h2 className="text-base text-white pt-4 font-titleFont mb-4">FIND ME ON</h2>
        <div className="flex gap-2 pb-8">
          <span className="text-lg w-14 h-14 mx-3 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-amber-200 duration-300 cursor-pointer">
          <a href='https://wa.me/+233504062107'><ion-icon size='large' name="logo-whatsapp"></ion-icon></a>
          </span>
          <span className="text-lg w-14 h-14 mx-3 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-amber-200 duration-300 cursor-pointer">
          <a href='https://github.com/Dziekhey'><ion-icon size='large' name="logo-github"></ion-icon></a>
          </span>
          <span className="text-lg w-14 h-14 mx-3 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-amber-200 duration-300 cursor-pointer">
          <a href='https://linkedin.com/in/sandra-mawuwenam-dakey-107852272'><ion-icon size='large' name="logo-linkedin"></ion-icon></a>
          </span>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default LeftContact;