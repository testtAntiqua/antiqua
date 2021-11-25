import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/typo.png";

export const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="mr-8">
        <img src={logo} alt="" className="w-44 md:w-28" />
      </div>
    </Link>
  );
};

export default Logo;
