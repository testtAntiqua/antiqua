import React from "react";
import { DiscoverHeader } from "./discoverHeader";
import { CollectionList } from "./collectionList";

export const Discover = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-12 px-6 my-40">
      <DiscoverHeader />
      <CollectionList />
    </div>
  );
};

export default Discover;
