import React, { useContext, useState } from "react";
import ConnectWalletPopup from "./connectWalletPopup";
import { walletContext } from "./navbar";
import { ethers } from "ethers";

export const WalletConnection = () => {
  const [showWallets, setShowWallets] = useState(false);
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const { walletAddress, isConnected, balance } = useContext(walletContext);

  const showBalance = () => {
    setIsBalanceVisible(true);
  };

  const closeBalance = () => {
    setIsBalanceVisible(false);
  };

  return (
    <React.Fragment>
      {!isConnected ? (
        <button
          onClick={() => {
            setShowWallets(true);
          }}
          className="md:px-7 px-3 md:py-2.5 py-2 bg-yellow-300 text-black text-sm font-semibold font-nunito rounded-md shadow-button"
        >
          Connect
        </button>
      ) : (
        <div
          onMouseEnter={showBalance}
          onMouseLeave={closeBalance}
          className="relative"
        >
          <button className="flex items-center relative md:px-7 px-3 md:py-2.5 py-2 bg-yellow-300 text-black text-sm font-semibold rounded-md shadow-button font-nunito">
            <span>{walletAddress}</span>
          </button>
        </div>
      )}

      {showWallets && (
        <ConnectWalletPopup
          closePopup={() => {
            setShowWallets(false);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default WalletConnection;
