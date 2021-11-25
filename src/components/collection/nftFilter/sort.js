import { CaretDown } from "phosphor-react";
import React, { useState } from "react";
import UseDropDown from "../../../hooks/useDropdown";

export const Sort = () => {
  const { dropDownRef, isDropDownVisible, openDropDown, closeDropDown } =
    UseDropDown();
  const [sort, setSort] = useState("Sort NFTs by");
  return (
    <div ref={dropDownRef} className="w-56 relative mr-4">
      <div
        onClick={() => {
          openDropDown();
        }}
        className="cursor-pointer py-2 px-4 shadow-button border border-gray-200 rounded-md flex justify-between items-center "
      >
        <span className="text-sm">{sort}</span>
        <CaretDown weight="bold" size={15} />
      </div>
      {isDropDownVisible && (
        <div className="w-full shadow-button bg-white rounded-md border border-gray-200 absolute top-full mt-1 z-20 py-1">
          <div
            onClick={() => {
              setSort("Highest price");
              closeDropDown();
            }}
            className="cursor-pointer hover:bg-gray-100 py-2 px-3 border-b"
          >
            <span>Highest price</span>
          </div>
          <div
            onClick={() => {
              setSort("Lowest price");
              closeDropDown();
            }}
            className="cursor-pointer hover:bg-gray-100 py-2 px-3 border-b"
          >
            <span>Lowest price</span>
          </div>
          <div
            onClick={() => {
              setSort("Latest");
              closeDropDown();
            }}
            className="cursor-pointer hover:bg-gray-100 py-2 px-3 border-b"
          >
            <span>Latest</span>
          </div>
          <div
            onClick={() => {
              setSort("Oldest");
              closeDropDown();
            }}
            className="cursor-pointer hover:bg-gray-100 py-2 px-3 border-b"
          >
            <span>Oldest</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sort;
