import React from "react";
import { GridDisplay } from "./gridDisplay";
import { Filter } from "./filter";
import { Sort } from "./sort";

export const NftFilter = () => {
  return (
    <div className="flex items-center">
      <Sort />
      <GridDisplay />
      <Filter />
    </div>
  );
};

export default NftFilter;
