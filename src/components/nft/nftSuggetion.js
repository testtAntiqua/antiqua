import React, { useContext } from "react";
import nft1 from "../../assets/nft1.png";
import { Circle, Lock } from "phosphor-react";
import { NftContext } from "../../App";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NftSuggetion = () => {
  const collection = useSelector((state) => {
    return state.collections.collection;
  });
  console.log(collection);
  return (
    <React.Fragment>
      <h3 className="text-4xl font-bold mb-12">You might also like</h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-8">
        {[...Array(4)].map(() => {
          var id = Math.floor(Math.random() * collection.nfts.length);
          return (
            <Link
              to={`/collection/${collection.collectionName}/nfts/${collection.nfts[id].id}`}
            >
              <div className="shadow-button rounded-xl">
                <div className="relative w-full ">
                  <img
                    src={collection.nfts[id].imageUrl}
                    alt=""
                    className="w-full object-cover h-64 rounded-t-xl"
                  />
                </div>
                <div className="rounded-b-xl px-4 py-4 border border-gray-200">
                  <div className="flex items-center mb-1">
                    <Lock
                      size={12}
                      weight="fill"
                      className="text-red-600 mr-1"
                    />
                    <span className="text-red-500">Not for sale</span>
                  </div>
                  <h3 className="text-gray-600 font-semibold font-epilogue">
                    {`${collection.nfts[id].collectionName} ${collection.nfts[id].name}`}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default NftSuggetion;
