import { Timer } from "phosphor-react";
import React, { useEffect } from "react";
import CollectionDetails from "./collectionDetails/collectionDetails";
import NftFilter from "./nftFilter/nftFilter";
import NftsList from "./nfts/nftsList";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getCollection } from "../../redux/reducers/collectionReducer";
import { useSelector } from "react-redux";
import { setCollectionLoader } from "./../../redux/reducers/collectionReducer";

export const Collection = () => {
  const urlParam = useParams();
  const dispatch = useDispatch();
  console.log(urlParam);
  useEffect(() => {
    dispatch(setCollectionLoader());
    setTimeout(() => {
      dispatch(getCollection(urlParam.name));
    }, 100);
  }, [urlParam]);

  const collectionState = useSelector((state) => {
    return state.collections;
  });

  console.log(collectionState);

  return (
    <div className="max-w-screen-xl mx-auto md:px-12 px-6 mt-40">
      {collectionState.collectionLoads && (
        <div>
          <CollectionDetails collection={collectionState.collection} />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex justify-start items-center bg-gray-100 bg-opacity-50 rounded-lg px-8 py-3 md:mb-0 mb-6">
              <Timer size={20} className="mr-4" />
              <p className="text-sm font-medium font-epilogue text-gray-600">
                SALE STARTS:{" "}
                <span className="text-gray-900">1 DECEMBER, 00:00 AM</span>
              </p>
            </div>
            <NftFilter />
          </div>
          <NftsList collection={collectionState.collection} />
        </div>
      )}
    </div>
  );
};

export default Collection;
