import React from "react";
import { Link } from "react-router-dom";

export const CollectionItem = ({ collection }) => {
  return (
    <Link to={`/collection/${collection.collectionName}`}>
      <div className="shadow-button h-64 rounded-xl relative ">
        <div className="relative w-full ">
          <img
            src={collection.collectionImage}
            alt=""
            className="w-full h-64 object-cover rounded-xl"
          />
          <div className="absolute top-0 right-0 w-full h-full rounded-xl collectionLiniar"></div>
          <div className="absolute w-full bottom-0 rounded-b-xl  px-4 py-6">
            <h3 className="font-semibold text-xl text-white font-primary leading-tight ">
              {collection.collectionName}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionItem;
