import { TreeStructure } from "phosphor-react";
import React, { useState } from "react";
import owner from "./../../assets/owner.png";

export const NftDetails = ({ nft }) => {
  const [openedTab, setOpenedTab] = useState("owner");
  const openTab = (tab) => {
    setOpenedTab(tab);
  };
  return (
    <div>
      <div className="flex items-center border-b  ">
        <button
          onClick={() => {
            openTab("owner");
          }}
          className={`mr-6 pb-2 relative ${
            openedTab === "owner" && "font-medium text-yellow-500 tabButton"
          }`}
        >
          Owner
        </button>
        <button
          onClick={() => {
            openTab("history");
          }}
          className={`mr-6 pb-2 relative ${
            openedTab === "history" && "font-medium text-yellow-500 tabButton"
          }`}
        >
          History
        </button>
        <button
          onClick={() => {
            openTab("details");
          }}
          className={`mr-6 pb-2 relative  ${
            openedTab === "details" && "font-medium text-yellow-500 tabButton"
          }`}
        >
          Details
        </button>
      </div>
      {openedTab === "owner" && (
        <div className="py-6">
          <div className="flex items-center">
            <div>
              <img
                src={owner}
                alt=""
                className="w-12 h-auto shadow-button rounded-full"
              />
            </div>
            <div className="ml-5">
              <p className="text-gray-400 text-xs uppercase">Creator</p>
              <p className="font-medium">Antiqua</p>
            </div>
          </div>
        </div>
      )}
      {openedTab === "history" && (
        <div className="py-6">
          <div>
            <div className="flex items-center">
              <div>
                <img
                  src={owner}
                  alt=""
                  className="w-12 h-auto shadow-button rounded-full"
                />
              </div>
              <div className="ml-5">
                <p className="text-gray-400 text-xs uppercase">Antiqua</p>
                <p className="text-sm font-medium">the NFT was minted</p>
                <p className="text-xs font-light text-gray-500">5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {openedTab === "details" && (
        <div className="py-6">
          <div className="mb-3">
            <p className="text-sm font-medium uppercase">NFT ID</p>
            <p className="font-medium text-yellow-400">{nft.nftid}</p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-medium uppercase">Contract ID</p>
            <p className="font-medium text-yellow-400">0xF5db...CdAA4b</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NftDetails;
