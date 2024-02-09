import React from "react";
import { logo } from "../../index"
import { navLinkData } from "../../constants";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  // sticky top-0 z-50
  return (
    <div className="w-full mx-auto h-20 sticky top-0 z-50 bg-bodyColor flex justify-between items-center shadow">
        <div className="ml-20">
          <img src={logo} alt="logo" />
        </div>
      <div>
        <div className="mr-20">
          <ul className="flex items-center gap-10">
            {navLinkData.map(({ id, title, link }) => (
              <li
                key={id}
                className="text-base text-400 tracking-wide cursor-pointer hover:text-designColor duration-300"><Link activeClass="active" to={link} spy={true} offset={-70} duration={500}>{title.toUpperCase()}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
