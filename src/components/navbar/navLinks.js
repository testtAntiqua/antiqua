import React, { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import NavLink from "./navLink";

export const NavLinks = () => {
  const activeLink = useLocation();
  const links = [
    { linkText: "Home", linkUrl: "/" },
    { linkText: "Explore", linkUrl: "/explore" },
  ];

  return (
    <div className="flex items-center ">
      <ul className="hidden sm:flex items-center">
        {links.map((link) => {
          if (activeLink.pathname === link.linkUrl) {
            return <NavLink link={link} active={true} />;
          } else {
            return <NavLink link={link} active={false} />;
          }
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
