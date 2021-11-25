import { Circle, Lock } from "phosphor-react";
import React, { useContext } from "react";
import { NftContext } from "../../App";

export const NftDescription = ({ collection, nft }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-1">
        <span className="text-red-500 font-medium mr-2">
          Currently not open for sale
        </span>
        <Lock size={20} weight="fill" className="text-red-600" />
      </div>
      <div className="mb-8">
        <h3 className="font-nunito font-semibold text-4xl font-bold mb-8">
          {collection.collectionName} {nft.name}
        </h3>
      </div>
      <div className="mb-8">
        <p className="font-nunito font-medium text-gray-500 mb-1">
          Limited collection of cards with {collection.collectionName}{" "}
          characters
        </p>
        <p className="font-nunito font-medium text-gray-500">
          Have time to pick up your favorite card
        </p>
      </div>
      <div className="mb-8">
        <button className="px-8 py-2 bg-yellow-300 shadow-button rounded-md font-semibold cursor-not-allowed mr-2">
          Buy Now
        </button>
        <button className="px-8 py-2 bg-gray-200 shadow-button rounded-md font-semibold cursor-not-allowed">
          Ask for exchange
        </button>
      </div>
    </div>
  );
};

export default NftDescription;
