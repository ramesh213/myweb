import React from 'react'
import { contactImg } from '../../index'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-[33%] h-full bg-gradient-to-r from-slate-800 to-slate-600 p-8 rounded-lg shadow-lg">
    <img className="w-full h-65 object-cover mb-3 rounded-lg" src={contactImg} alt="contactImg" />
    <div className="mb-2">
      <h3 className="text-3xl font-bold text-gray-300">Ramesh Tudu</h3>
      <p className="text-lg mb-3 text-gray-400">Full Stack Developer</p>
      <p className="text-md font-normal text-gray-400">Hey there, If you wish to discuss something more about your curiosity, feel free to contact me. Thanks !!!</p>
    </div>
    <div className="mb-5">
      <h2>FIND ME IN :</h2>
    </div>
    <div className="flex flex-row gap-6">
      <span className="banner-icon"><FaFacebookF/></span>
      <span className="banner-icon"><FaInstagram/></span>
      <span className="banner-icon"><FaLinkedinIn/></span>
    </div>
</div>
  )
}

export default ContactLeft
