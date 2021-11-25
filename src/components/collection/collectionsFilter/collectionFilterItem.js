import React from "react";

export const CollectionFilterItem = ({ collectionName, active }) => {
  const filterActive =
    active && "bg-yellow-300 font-semibold text-black px-6 py-2";
  return (
    <button
      className={`mr-2 text-sm font-nunito rounded-md shadow-button px-6 py-2 border border-gray-200 ${filterActive}`}
    >
      {collectionName}
    </button>
  );
};

export default CollectionFilterItem;
