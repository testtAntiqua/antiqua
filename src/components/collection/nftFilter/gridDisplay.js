import { SquaresFour } from "phosphor-react";
import React from "react";

export const GridDisplay = () => {
  return (
    <div className="grid grid-cols-2 border border-gray-200 shadow-button rounded-lg divide-x divider-black">
      <div className="py-2 px-1 hover:bg-gray-200">
        <SquaresFour size={24} weight="light" />
      </div>
      <div className="py-2 px-1 hover:bg-gray-200">
        <SquaresFour size={24} weight="light" />
      </div>
    </div>
  );
};

export default GridDisplay;
