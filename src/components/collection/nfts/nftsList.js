import { Circle, Lock } from "phosphor-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const NftsList = ({ collection }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-12 my-20">
      {collection.nfts.map((nftItem) => {
        return (
          <Link to={`./${collection.collectionName}/nfts/${nftItem.id}`}>
            <div className="shadow-button rounded-xl">
              <div className="relative w-full ">
                <img
                  src={nftItem.imageUrl}
                  alt=""
                  className="w-full object-cover h-64 rounded-t-xl"
                />
              </div>
              <div className="rounded-b-xl px-4 py-4 border border-gray-200">
                <div className="flex items-center mb-1">
                  <span className="text-red-500 text-sm font-medium font-primary mr-2">
                    Currently not for sale
                  </span>
                  <Lock size={15} weight="fill" className="text-red-600 " />
                </div>
                <h3 className="text-gray-600 font-semibold font-epilogue">
                  {`${nftItem.collectionName} ${nftItem.name}`}
                </h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NftsList;
