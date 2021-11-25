import {
  InstagramLogo,
  List,
  TelegramLogo,
  TwitterLogo,
  X,
} from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import NavLink from "./navLink";
import NavLinks from "./navLinks";
import SearchBar from "./searchBar";
import { WalletConnection } from "./walletConnection";

export const walletContext = React.createContext();

export const Navbar = () => {
  const [isConnected, setisConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const formatWalletAddress = (address) => {
    var address = address.split("");
    return `${address[0]}${address[1]}${address[2]}${address[3]}${
      address[4]
    }...${address.length - 4}${address.length - 3}${
      address[address.length - 2]
    }${address[address.length - 1]}`;
  };

  const connectMetamask = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          var address = formatWalletAddress(result[0]);
          setWalletAddress(address);
          setisConnected(true);
          window.ethereum
            .request({
              method: "eth_getBalance",
              params: [result[0].toString(), "latest"],
            })
            .then((result) => {
              setBalance(result);
            });
        });
    }
  };

  useEffect(() => {
    connectMetamask();
  }, []);

  return (
    <walletContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
        balance,
        setBalance,
        isConnected,
        setisConnected,
      }}
    >
      <div className="max-w-screen-xl absolute top-0 left-0 right-0 mx-auto w-full flex items-center justify-between md:px-12 px-6 py-5">
        <div className="flex items-center">
          <Logo />
          <SearchBar />
        </div>
        <div className="flex items-center">
          <NavLinks />
          <span className="hidden md:block w-px h-6 mr-8 bg-black"></span>
          <div className="px-2 py-0.5 rounded-lg bg-gray-100 self-center mr-4">
            <span className="text-gray-600 text-xs font-medium">Demo</span>
          </div>
          <WalletConnection />
          <div className="md:hidden ml-2">
            <button
              onClick={() => {
                setIsMobileNavVisible(true);
              }}
            >
              <List size={24} className="" />
            </button>
          </div>
        </div>
        {isMobileNavVisible && (
          <div className="w-screen h-screen fixed flex flex-col top-0 right-0 bg-black z-30">
            <div className="flex items-center justify-end px-6 py-6 bg-opacity-25">
              <button
                onClick={() => {
                  setIsMobileNavVisible(false);
                }}
              >
                <X size={24} className="text-white text-xl" weight="bold" />
              </button>
            </div>
            <div className="flex-grow flex flex-col px-6 mt-24">
              <p className="text-yellow-300 font-nunito mb-12">Navigate to :</p>
              <div
                onClick={() => {
                  setIsMobileNavVisible(false);
                }}
              >
                <Link to={`/`}>
                  <p
                    className={`font-medium text-5xl text-white font-primary mr-4 cursor-pointer mb-5`}
                  >
                    Home
                  </p>
                </Link>
              </div>
              <div
                onClick={() => {
                  setIsMobileNavVisible(false);
                }}
              >
                <Link to={`/explore`}>
                  <p
                    className={`font-medium text-5xl text-white font-primary mr-4 cursor-pointer`}
                  >
                    Explore
                  </p>
                </Link>
              </div>

              <div className="absolute bottom-12 flex items-center">
                <a href="https://twitter.com/AntiquaBsc" target="_blank">
                  <TwitterLogo
                    size={24}
                    weight="bold"
                    className="text-white mr-4"
                  />
                </a>
                <a
                  href="https://www.instagram.com/antiqua_bsc/"
                  target="_blank"
                >
                  <InstagramLogo
                    size={24}
                    weight="bold"
                    className="text-white mr-4"
                  />
                </a>
                <a href="https://t.me/Antiqua_Bsc" target="_blank">
                  <TelegramLogo
                    size={24}
                    weight="bold"
                    className="text-white"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </walletContext.Provider>
  );
};

export default Navbar;
