import { Lock } from "phosphor-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Home = () => {
  const collectionState = useSelector((state) => {
    return state.collections;
  });

  return (
    <React.Fragment>
      <section className="max-w-screen-xl mx-auto md:px-12 px-6 pt-40 flex flex-col md:flex-row mb-16 h-screen">
        <div className="w-full md:w-5/12 mb-12 pr-0 md:pr-16">
          <h1 className="text-4xl md:text-5xl font-bold font-nunito mb-12">
            Unlock the ancient world Where Ancient art meets modern technology.
          </h1>

          <Link to={"/explore"}>
            <button className="bg-yellow-300 font-semibold rounded-md shadow-md px-8 py-3">
              Discover our collection
            </button>
          </Link>
        </div>
        <div className="w-full md:w-7/12">
          <h3 className="md:hidden text-4xl font-bold font-primary mb-12">
            Our best NFTs
          </h3>
          <div className="h-full grid grid-cols-1 md:grid-cols-5 col-span-2 grid-rows-2 gap-3 pb-0 xl:pb-24">
            {collectionState.homeNfts.map((nftItem, index) => {
              if (index !== 1) {
                return (
                  <div className="w-full md:h-full h-64 bg-gray-300 col-span-2 rounded-xl relative">
                    <Link
                      to={`./collection/${nftItem.collectionName}/nfts/${nftItem.id}`}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${nftItem.imageUrl})`,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                        className="shadow-button absolute w-full h-full bg-black top-0 right-0 rounded-xl"
                      ></div>
                    </Link>
                  </div>
                );
              } else {
                return (
                  <div className="hidden md:block w-full h-full md:row-span-2 rounded-xl k"></div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
