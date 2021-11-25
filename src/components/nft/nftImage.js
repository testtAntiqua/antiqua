import React from "react";

export const NftImage = ({ nft }) => {
  console.log(nft);
  return (
    <React.Fragment>
      <img
        src={nft.imageUrl}
        alt=""
        className="w-full h-3/4 object-cover mb-12 rounded-xl"
      />
    </React.Fragment>
  );
};

export default NftImage;
