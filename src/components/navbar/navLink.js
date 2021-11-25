import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ link, active }) => {
  const linkActive = active
    ? "text-yellow-300 font-semibold"
    : "text-black hover:text-gray-700";
  return (
    <Link to={`${link.linkUrl}`}>
      <li
        className={`${linkActive} font-medium font-nunito mr-4 cursor-pointer`}
      >
        {link.linkText}
      </li>
    </Link>
  );
};

export default NavLink;
