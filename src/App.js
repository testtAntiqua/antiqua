import Navbar from "./components/navbar/navbar";
import { Discover } from "./components/discover/discover";
import NftDetails, { Nft } from "./components/nft/nft";
import { Footer } from "./components/footer/footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/home/home";
import React, { useState } from "react";
import ScrollToTop from "./ScrollToTop";
import { Collection } from "./components/collection/collection";

export const NftContext = React.createContext();
export const walletContext = React.createContext();

function App() {
  const [nftList, setNftList] = useState([
    {
      id: 1,
      collectionName: "First gen Aliens",
      name: "#001",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235559/upload%20cloud/33_xwjzvh.png",
      description:
        "This is the Yellow Alien, on the Night Forest ,with Super Star glasses, Jet headphones, Nose and Ear Piercings, a Mask and Devil Horns ",
      price: null,
    },
    {
      id: 2,
      collectionName: "First gen Aliens",
      name: "#002",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235557/upload%20cloud/3_cixblf.png",
      description:
        "This is the Red Alien, on the Night Forest ,with Black Sunglasses, a Roman Crown and a Medal ",
      price: null,
    },
    {
      id: 3,
      collectionName: "First gen Aliens",
      name: "#003",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235557/upload%20cloud/7_mgdpqr.png",
      description:
        "This is the Purple Alien, on the Moon ,with Sherrif's glasses, Jet headphones, a Gold chain hidden behind the scarf and a sweat band ",
      price: null,
    },
    {
      id: 4,
      collectionName: "First gen Aliens",
      name: "#004",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235556/upload%20cloud/40_kviiff.png",
      description:
        "This is the Red Alien, on the Snowy Mountains ,with Sherrif's glasses, Jet headphones, a Pipe, and Devil horns ",
      price: null,
    },
    {
      id: 5,
      collectionName: "First gen Aliens",
      name: "#005",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235556/upload%20cloud/5_craqj9.png",
      description:
        "This is the Green Alien, on the Snowy Mountains ,with 3D glasses, Fluffy headphones, Ninja Band and a scarf ",
      price: null,
    },
    {
      id: 6,
      collectionName: "First gen Aliens",
      name: "#006",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235556/upload%20cloud/50_j9nuoj.png",
      description:
        "This is the Yellow Alien, on the Night Forest ,with Black glasses, a Medal and a Unicorn ",
      price: null,
    },
    {
      id: 7,
      collectionName: "First gen Aliens",
      name: "#007",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235556/upload%20cloud/6_qxu8pp.png",
      description:
        "This is the Purple Alien, on the Egyptian Desert ,with Alien glasses, a Gas Mask, a Medal and a Unicorn ",
      price: null,
    },
    {
      id: 8,
      collectionName: "First gen Aliens",
      name: "#008",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235555/upload%20cloud/49_eeeaqx.png",
      description:
        "This is the Green Alien, on the Moon ,with 3D glasses, a spaceship over his head and a Gold chain ",
      price: null,
    },
    {
      id: 9,
      collectionName: "First gen Aliens",
      name: "#009",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235555/upload%20cloud/47_jfxob4.png",
      description:
        "This is the Yellow Alien, on the Snowy Mountains ,with Black glasses, Jet headphones and a Medal ",
      price: null,
    },
    {
      id: 10,
      collectionName: "First gen Aliens",
      name: "#010",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235555/upload%20cloud/48_ik3s7r.png",
      description:
        "This is the Yellow Alien, on the Moon, a Ninja Band, a Pipe, a Forehead piercing and a Gold chain ",
      price: null,
    },
    {
      id: 11,
      collectionName: "First gen Aliens",
      name: "#011",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235554/upload%20cloud/46_neufp9.png",
      description:
        "This is the Green Alien, on the Night Forest ,with Sheriff's glasses, Fluffy headphones, a spaceship over his head and a Gas Mask ",
    },
    {
      id: 12,
      collectionName: "First gen Aliens",
      name: "#012",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235554/upload%20cloud/45_phsyba.png",
      description:
        "This is the Green Alien, on the Night Forest ,with Super Star glasses, Jet headphones, a Spaceship over his Head a Forehead Piercing and A Gas Mask ",
      price: null,
    },
    {
      id: 13,
      collectionName: "First gen Aliens",
      name: "#013",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235554/upload%20cloud/44_feiri9.png",
      description:
        "This is the Green Alien, on the Night Forest ,with 3D glasses, Jet headphones, Nose and Ear Piercings, a Mask and a Unicorn ",
      price: null,
    },
    {
      id: 14,
      collectionName: "First gen Aliens",
      name: "#014",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235554/upload%20cloud/43_xzlsxv.png",
      description:
        "This is the Yellow Alien, on the Egyptian Desert ,with Star glasses, Jet headphones, a Pipe, a Sweatband and a Scarf",
      price: null,
    },
    {
      id: 15,
      collectionName: "First gen Aliens",
      name: "#015",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235553/upload%20cloud/42_too7ys.png",
      description:
        "This is the Red Alien, on the Snowy Mountains ,with Star glasses, Jet headphones, a Pipe and Devil Horns ",
      price: null,
    },
    {
      id: 16,
      collectionName: "First gen Aliens",
      name: "#016",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235553/upload%20cloud/41_xu0tcf.png",
      description:
        "This is the Purple Alien, on the Snowy Mountains ,with Sherrif's glasses, Forehead Piercings, Devil Horns and a Scarf",
      price: null,
    },
    {
      id: 17,
      collectionName: "First gen Aliens",
      name: "#017",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235553/upload%20cloud/4_fpxmhw.png",
      description:
        "This is the Purple Alien, on the Night Forest ,with Star glasses, Roman Crown, a Pipe, a Medal and a Scarf ",
      price: null,
    },
    {
      id: 18,
      collectionName: "First gen Aliens",
      name: "#018",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235552/upload%20cloud/38_soyrvm.png",
      description:
        "This is the Purple Alien, on the Night Forst ,with Sheriff's glasses, Jet headphones, a Spaceship over his head and a Scarf ",
      price: null,
    },
    {
      id: 19,
      collectionName: "First gen Aliens",
      name: "#019",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235552/upload%20cloud/39_pmy7yx.png",
      description:
        "This is the Red Alien, on the Moon ,with Alien glasses, Jet headphones, a Cowboy's Hat and a Mask ",
      price: null,
    },
    {
      id: 20,
      collectionName: "First gen Aliens",
      name: "#020",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235552/upload%20cloud/27_ccxaxg.png",
      description:
        "This is the Green Alien, on the Egyptian Desert with Jet headphones ",
      price: null,
    },
    {
      id: 21,
      collectionName: "First gen Aliens",
      name: "#021",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235551/upload%20cloud/37_tx8pgq.png",
      description:
        "This is the Red Alien, on the Moon ,with Superstar glasses, Jet headphones, Nose and Ear Piercings, Sweatband and a Scarf",
      price: null,
    },
    {
      id: 22,
      collectionName: "First gen Aliens",
      name: "#022",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235551/upload%20cloud/36_i9ylyw.png",
      description:
        "This is the Green Alien, on the Night Forest ,with Superstar glasses, Jet headphones, a Ninja Band and a Scarf ",
      price: null,
    },
    {
      id: 23,
      collectionName: "First gen Aliens",
      name: "#023",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235551/upload%20cloud/34_hwpksr.png",
      description:
        "This is the Purple Alien, on the Snowy Mountains ,with Star glasses, a Beanie, a Mask and a Scarf ",
      price: null,
    },
    {
      id: 24,
      collectionName: "First gen Aliens",
      name: "#024",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235551/upload%20cloud/35_d7jcbi.png",
      description:
        "This is the Yellow Alien, on the Snowy Mountains ,with a Forehead Piercing, a Bandana and a Scarf ",
      price: null,
    },
    {
      id: 25,
      collectionName: "First gen Aliens",
      name: "#025",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235550/upload%20cloud/1_r1fxop.png",
      description:
        "This is the Yellw Alien, on the Moon ,with Black glasses, Jet headphones, a Mask, Forhead Piercings, Devil Horns and a Gold chain ",
      price: null,
    },
    {
      id: 26,
      collectionName: "First gen Aliens",
      name: "#026",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235550/upload%20cloud/32_pvrlzm.png",
      description:
        "This is the Yellow Alien, on the Snowy Maintains ,with Star glasses, a Roman Crown And a Mask ",
      price: null,
    },
    {
      id: 27,
      collectionName: "First gen Aliens",
      name: "#027",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235550/upload%20cloud/31_djwblh.png",
      description:
        "This is the Green Alien, on the Egyptian Desert ,with Sherrif's glasses, Jets headphones, a Bandana, a Forhead Piercing and a Pipe ",
      price: null,
    },
    {
      id: 28,
      collectionName: "First gen Aliens",
      name: "#028",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235550/upload%20cloud/29_prvffe.png",
      description:
        "This is the Yellow Alien, on the Egyptian Desert ,with Superstar glasses, a Sweatband, a Gas Mask and a Scarf ",
      price: null,
    },
    {
      id: 29,
      collectionName: "First gen Aliens",
      name: "#029",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235550/upload%20cloud/30_jwkxso.png",
      description:
        "This is the Yellow Alien, on the Night Forest ,with Star glasses, Jet headphones, Nose and Ear Piercings and a Unicorn",
      price: null,
    },
    {
      id: 30,
      collectionName: "First gen Aliens",
      name: "#030",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235549/upload%20cloud/28_xyw6nr.png",
      description:
        "This is the Yellow Alien, on the Night Forest ,with 3D glasses, Fluffy headphones, Devil Horns, a Gas Mask and a Scarf ",
      price: null,
    },
    {
      id: 31,
      collectionName: "First gen Aliens",
      name: "#031",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235549/upload%20cloud/25_sz26py.png",
      description:
        "This is the Purple Alien, on the Moon ,with Sherrif's glasses, Jet headphones, a Mask, a Medal, a Scarf and a Unicorn ",
      price: null,
    },
    {
      id: 32,
      collectionName: "First gen Aliens",
      name: "#032",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235549/upload%20cloud/26_zofoxx.png",
      description:
        "This is the Yellow Alien, on the Snowy Mountains ,with Alien glasses, a Mask, a Roman Crown and a Scarf ",
      price: null,
    },
    {
      id: 33,
      collectionName: "First gen Aliens",
      name: "#033",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235549/upload%20cloud/11_dzuih9.png",
      description:
        "This is the Green Alien, on the Egyptian Desert ,with Black glasses, a Mask, a Ninja Band and a Gold chain ",
      price: null,
    },
    {
      id: 34,
      collectionName: "First gen Aliens",
      name: "#034",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235548/upload%20cloud/24_jlxoz2.png",
      description:
        "This is the Red Alien, on the Snowy Mountans ,with Black glasses, Devil Horns, a Medal and a Scarf ",
      price: null,
    },
    {
      id: 35,
      collectionName: "First gen Aliens",
      name: "#035",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235548/upload%20cloud/12_egqjwb.png",
      description:
        "This is the Red Alien, on the Night Forest ,with Jet headphones, a Mask and a Unicorn ",
      price: null,
    },
    {
      id: 36,
      collectionName: "First gen Aliens",
      name: "#036",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235548/upload%20cloud/23_udx14b.png",
      description:
        "This is the Yellow Alien, on the Moon ,with 3D glasses, Forehead Piercings, a Mask, a Medal, a Scarf and a Unicorn ",
      price: null,
    },
    {
      id: 37,
      collectionName: "First gen Aliens",
      name: "#037",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235548/upload%20cloud/22_wugty8.png",
      description:
        "This is the Purple Alien, on the Night Forest ,with Jet headphones, Black glasses, a Pipe, Roman Crown and a Gold chain ",
      price: null,
    },
    {
      id: 38,
      collectionName: "First gen Aliens",
      name: "#038",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235548/upload%20cloud/21_zzjuxg.png",
      description:
        "This is the Red Alien, on the Night Forest ,with Black glasses, Jet headphones, a Gas Mask and a Gold Chain ",
      price: null,
    },
    {
      id: 39,
      collectionName: "First gen Aliens",
      name: "#039",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235547/upload%20cloud/20_brhlgh.png",
      description:
        "This is the Green Alien, on the Snowy Mountains ,with Sherrif's glasses, Jet headphones, Devil Horns and a Gold chain ",
      price: null,
    },
    {
      id: 40,
      collectionName: "First gen Aliens",
      name: "#040",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235547/upload%20cloud/19_rszupf.png",
      description:
        "This is the Green Alien, on the Egyptian Desert ,with Star glasses, Fluffy headphones, a Sweatband, a Mask, and a Medal ",
      price: null,
    },
    {
      id: 41,
      collectionName: "First gen Aliens",
      name: "#041",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235547/upload%20cloud/2_go0zzl.png",
      description:
        "This is the Purple Alien, on the Night Forest ,with Superstar glasses, Jet headphones, Nose and Ear Piercings and a Unicorn ",
      price: null,
    },
    {
      id: 42,
      collectionName: "First gen Aliens",
      name: "#042",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235546/upload%20cloud/17_ii1fis.png",
      description:
        "This is the Purple Alien, on the Snowy Mountains ,with Sherrif's glasses, Jet headphones, a Mask, a Bandana and a Gold chain ",
      price: null,
    },
    {
      id: 43,
      collectionName: "First gen Aliens",
      name: "#043",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235546/upload%20cloud/15_rmvfap.png",
      description:
        "This is the Yellow Alien, on the Moon ,with 3D glasses, Nose and Ear Piercings and a Sweatband ",
      price: null,
    },
    {
      id: 44,
      collectionName: "First gen Aliens",
      name: "#044",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235546/upload%20cloud/16_q3etkl.png",
      description:
        "This is the Green Alien, on the Egyptian desert ,with Sheriff's glasses, Jet headphones, a Beanie, a Pipe and a Scarf ",
      price: null,
    },
    {
      id: 45,
      collectionName: "First gen Aliens",
      name: "#045",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235545/upload%20cloud/18_cn1mro.png",
      description:
        "This is the Yellow Alien, on the Egyptian Desert ,with Superstar glasses, Fluffy headphones, Nose and Ear Piercings, Ninja Bnad and a Gold chain ",
      price: null,
    },
    {
      id: 46,
      collectionName: "First gen Aliens",
      name: "#046",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235545/upload%20cloud/14_vk8ae1.png",
      description:
        "This is the Red Alien, on the Egyptian Desert ,with 3D glasses, Fluffy headphones, a Ninja Band and a Medal",
      price: null,
    },
    {
      id: 47,
      collectionName: "First gen Aliens",
      name: "#047",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235544/upload%20cloud/9_fgja61.png",
      description:
        "This is the Green Alien, on the Egyptian Desert ,with Alien glasses, Jet headphones, a Spaceship over his head, a Gold medal and a Scarf ",
      price: null,
    },
    {
      id: 48,
      collectionName: "First gen Aliens",
      name: "#048",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235545/upload%20cloud/13_hwxfxz.png",
      description:
        "This is the Purple Alien, on the Snowy Mountains ,with a Bandana and a Medal ",
      price: null,
    },
    {
      id: 49,
      collectionName: "First gen Aliens",
      name: "#049",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235544/upload%20cloud/8_ut2vkc.png",
      description:
        "This is the Purple Alien, on the Night Forest ,with a Gas mask and a Unicorn ",
      price: null,
    },
    {
      id: 50,
      collectionName: "First gen Aliens",
      name: "#050",
      imageUrl:
        "https://res.cloudinary.com/detxbwp96/image/upload/w_400/v1636235544/upload%20cloud/10_nzbdbi.png",
      description:
        "This is the Green Alien, on the Snowy Mountains ,with Superstar glasses, Jet headphones, a Forehead Piercing, a Pipe and a Medal ",
      price: null,
    },
  ]);

  const [selectedNft, setSelectedNft] = useState(null);
  return (
    <div className="App z-20 w-full">
      <NftContext.Provider
        value={{ nftList, setNftList, selectedNft, setSelectedNft }}
      >
        <HashRouter basename="/">
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path={"/explore"} exact component={Discover}></Route>
            <Route path={"/"} exact component={Home}></Route>
            <Route
              path={"/collection/:collectionName/nfts/:id"}
              exact
              component={Nft}
            ></Route>
            <Route
              path={"/collection/:name"}
              exact
              component={Collection}
            ></Route>
          </Switch>
          <Footer />
        </HashRouter>
      </NftContext.Provider>
    </div>
  );
}

export default App;
