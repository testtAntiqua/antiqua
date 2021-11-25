import { Timer } from "phosphor-react";
import React from "react";

export const CollectionDetails = ({ collection }) => {
  console.log(collection);
  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 font-primary">
        {collection.collectionName}
      </h1>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-100 bg-opacity-50 rounded-lg px-8 py-3 mb-6"
        style={{ width: "fit-content" }}
      >
        <div className="flex flex-col items-start mr-12 ">
          <span className="text-xl font-medium font-primary mb-2">
            {collection.nfts.length}
          </span>
          <span className="uppercase text-xs font-epilogue font-medium text-gray-500">
            minted
          </span>
        </div>
        <div className="flex flex-col items-start mr-12">
          <span className="text-xl font-medium font-primary mb-2">1</span>
          <span className="uppercase font-epilogue text-xs font-medium text-gray-500">
            creator
          </span>
        </div>
        <div className="flex flex-col items-start mr-12">
          <span className="text-xl font-medium font-primary mb-2">0 ANTQ</span>
          <span className="uppercase font-epilogue text-xs font-medium text-gray-500">
            floor price
          </span>
        </div>
        <div className="flex flex-col items-start ">
          <span className="text-xl font-medium font-primary mb-2">0 ANTQ</span>
          <span className="uppercase text-xs font-epilogue font-medium text-gray-500">
            volume traded
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;
