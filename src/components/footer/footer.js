import { InstagramLogo, TelegramLogo, TwitterLogo } from "phosphor-react";
import React from "react";
import logo from "../../assets/typo.png";

export const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full px-6 md:px-12 pb-12">
      <div className="flex items-center pt-6 justify-between">
        <img src={logo} alt="" className="w-32" />
        <div className="flex items-center">
          <a href="https://twitter.com/AntiquaBsc" target="_blank">
            <TwitterLogo size={24} weight="bold" className="mr-4" />
          </a>
          <a href="https://www.instagram.com/antiqua_bsc/" target="_blank">
            <InstagramLogo size={24} weight="bold" className="mr-4" />
          </a>
          <a href="https://t.me/Antiqua_Bsc" target="_blank">
            <TelegramLogo size={24} weight="bold" className="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
