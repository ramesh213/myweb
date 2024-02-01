import React from "react";
import logo from "../../assets/images/logo.png";
import { navLinkData } from "../../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-20 mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
      <div>
        <div>
          <ul className="flex items-center gap-10">
            {navLinkData.map(({ id, title, link }) => (
              <li
                key={id}
                className="text-base text-400 tracking-wide cursor-pointer hover:text-designColor duration-300">{title.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
