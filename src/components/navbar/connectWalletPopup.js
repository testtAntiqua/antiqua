import { X } from "phosphor-react";
import React, { useContext } from "react";
import { walletContext } from "./navbar";
import metamask from "./../../assets/metamask.svg";
import trustwallet from "./../../assets/trustwallet.png";
import walletConnect from "./../../assets/walletConnect.jpg";
import coin98 from "./../../assets/coin98.png";

export const ConnectWalletPopup = ({ closePopup }) => {
  const { setWalletAddress, setisConnected, setBalance } =
    useContext(walletContext);

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
          closePopup();

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

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closePopup();
        }
      }}
      className="fixed top-0 left-0 w-screen h-screen z-40 bg-black bg-opacity-50 flex items-center justify-centre"
    >
      <div className="bg-white w-10/12 md:w-1/4 mx-auto flex flex-col rounded-lg">
        <div className="flex justify-between items-center bg-gray-100 px-5 py-5 rounded-lg">
          <h3 className="font-primary font-medium text-xl">Connect wallet</h3>
          <button
            onClick={() => {
              closePopup();
            }}
          >
            <X size={24} weight={"light"} className="" />
          </button>
        </div>
        <div className="flex-grow w-full px-4 py-4">
          <div
            onClick={connectMetamask}
            className="flex items-center justify-between cursor-pointer bg-gray-100 rounded-lg px-4 py-2 mb-2"
          >
            <span className="font-primary font-medium text-center">
              MetaMask
            </span>
            <img src={metamask} alt="" className="w-8 h-8" />
          </div>
          <div className="flex items-center justify-between cursor-pointer bg-gray-100 rounded-lg px-4 py-2 mb-2">
            <span className="font-primary font-medium text-center">
              Trustwallet
            </span>
            <img src={trustwallet} alt="" className="w-8 h-8" />
          </div>
          <div className="flex items-center justify-between cursor-pointer bg-gray-100 rounded-lg px-4 py-2 mb-2">
            <span className="font-primary font-medium text-center">
              WalletConnect
            </span>
            <img src={walletConnect} alt="" className="w-8 h-8" />
          </div>
          <div className="flex items-center justify-between cursor-pointer bg-gray-100 rounded-lg px-4 py-2">
            <span className="font-primary font-medium text-center">Coin98</span>
            <img src={coin98} alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletPopup;
