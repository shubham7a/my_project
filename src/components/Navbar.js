import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logos/logo12.png";
import logo22 from "../assets/Logos/logo22.jpg";
import logo15 from "../assets/Logos/logo15.png";

const Navbar = () => {
  return (
    <div className=" flex w-full items-center justify-center gap-[700px] mx-auto bg-slate-300 ">
      <Link to="/" className="flex relative ">
        <img src={logo} alt="Logo" loading="lazy" className=" " />
        <img
          src={logo15}
          alt="logo15"
          loading="lazy"
          className="h-[30px] w-[120px] absolute left-[50px] top-2"
        />
      </Link>

      <nav>
        <ul className=" flex gap-x-6 text-white ">
          <li>
            <Link to="/history">
              <div className=" font-normal text-white">01. History</div>
              <img src={logo22} alt="logo22" className="mx-auto font-normal" />
            </Link>
          </li>
          <li>
            <Link to="/team">
              <div className=" font-normal text-white">02. Team</div>
              <img src={logo22} alt="logo22" className="mx-auto font-normal" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
