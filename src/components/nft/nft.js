import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { NftContext } from "../../App";
import NftDescription from "./nftDescription";
import NftImage from "./nftImage";
import NftSuggetion from "./nftSuggetion";
import { NftDetails } from "./nftDetails";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCollection, getNft } from "../../redux/reducers/collectionReducer";

export const Nft = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const collectionState = useSelector((state) => {
    return state.collections;
  });

  console.log(collectionState);

  useEffect(() => {
    dispatch(getNft(params.collectionName, params.id));
    dispatch(getCollection(params.collectionName));
  }, [params]);

  return (
    <div className="max-w-screen-xl mx-auto md:px-12 px-6 ">
      {collectionState.nftLoads && (
        <div>
          <div className="md:flex mt-44">
            <div className="w-full md:w-7/12 object-fit flex justify-end md:pr-4">
              <NftImage nft={collectionState.nft} />
            </div>
            <div className="w-full md:w-5/12 md:pl-4">
              <NftDescription
                nft={collectionState.nft}
                collection={collectionState.collection}
              />
              <NftDetails nft={collectionState.nft} />
            </div>
          </div>
          <div className="my-32">
            <NftSuggetion />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nft;
