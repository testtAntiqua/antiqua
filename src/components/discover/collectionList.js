import React from "react";
import CollectionItem from "./collectionItem";
import { useSelector } from "react-redux";

export const CollectionList = () => {
  const collections = useSelector((state) => {
    return state.collections.collections;
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
      {collections.map((collection) => {
        return <CollectionItem collection={collection} />;
      })}
    </div>
  );
};

export default CollectionList;
