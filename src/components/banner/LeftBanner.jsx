import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiReact,
  SiDjango,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Developer...",
      "Frontend Developer...",
      "Backend Developer...",
      "UI Developer...",
    ],
    typeSpeed: 80,
    deleteSpeed: 80,
    delaySpeed: 3000,
    loop: true,
  });

  return (
    <div className="w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-white">Hi, It's me </h1>
        <h1 className="text-designColor text-6xl font-bold capitalize">
          Ramesh Tudu
        </h1>
        <h2 className="text-3xl font-bold text-white">
          I'm a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#FFFF00"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Passionate web developer skilled in front-end and back-end
          technologies, transforming creative designs into responsive user
          experiences. Committed to staying updated on industry trends and
          employing cutting-edge technologies for innovative and scalable
          solutions.
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-base uppercase mb-4 font-titleFont">
            Get in touch:
          </h2>
          <div className="flex gap-4">
            <span className="banner-icon">
              <FaFacebookF />
            </span>
            <span className="banner-icon">
              <FaLinkedinIn />
            </span>
            <span className="banner-icon">
              <FaTwitter />
            </span>
            <span className="banner-icon">
              <FaInstagram />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase mb-4 font-titleFont">
            BEST SKILLED IN
          </h2>
          <div className="flex gap-4">
            <span className="banner-icon">
              <SiReact />
            </span>
            <span className="banner-icon">
              <SiTailwindcss />
            </span>
            <span className="banner-icon">
              <SiNextdotjs />
            </span>
            <span className="banner-icon">
              <SiDjango />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
