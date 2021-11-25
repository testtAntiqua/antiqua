import { MagnifyingGlass } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchCollection } from "../../redux/reducers/collectionReducer";

export const SearchBar = () => {
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const searchRef = useRef();
  const spotOnSearch = () => {
    searchRef.current.classList.add("w-64");
  };
  const leaveSearch = () => {
    searchRef.current.classList.remove("w-64");
  };

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchInputValue(e.target.value);
    dispatch(searchCollection(e.target.value));
  };
  const collectionState = useSelector((state) => {
    return state.collections;
  });

  useEffect(() => {
    console.log(searchInputValue);
    if (searchInputValue != "") {
      setShowSearchResult(true);
    } else {
      setShowSearchResult(false);
    }
  }, [searchInputValue]);

  return (
    <div className="relative mr-8">
      <div
        className="hidden md:flex relative items-center justify-between w-56 duration-500 ease-in-out transition-width shadow-button py-2 px-4 border rounded-md"
        ref={searchRef}
        onMouseEnter={spotOnSearch}
        onMouseLeave={leaveSearch}
      >
        <input
          type="text"
          className="w-32 outline-none bg-transparent placeholder-black text-black"
          placeholder="Search..."
          onChange={handleInputChange}
        />
        <MagnifyingGlass size={18} weight="bold" className="text-yellow-300" />
      </div>
      {showSearchResult && (
        <div className="w-72 py-4 px-2 bg-white shadow-button border absolute top-full left-0 rounded-lg mt-2">
          {collectionState.searchedCollections.map((collection) => {
            console.log(collection);
            return (
              <Link to={`/collection/${collection.collectionName}`}>
                <div
                  className="flex hover:bg-gray-100 py-2 px-2 rounded-lg cursor-pointer"
                  onClick={() => {
                    setShowSearchResult(false);
                  }}
                >
                  <img
                    src={collection.collectionImage}
                    alt=""
                    className="w-12 h-12 rounded-lg mr-3"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-primary font-medium">
                      {collection.collectionName}
                    </span>
                    <span className="text-sm font-primary font-light">
                      {collection.nfts.length} items
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
