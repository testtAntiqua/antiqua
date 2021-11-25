export const GET_COLLECTIONS = "GET_COLLECTIONS";
export const GET_COLLECTION = "GET_COLLECTION";
export const GET_NFT = "GET_NFT";
export const SEARCH_COLLECTION = "SEARCH_COLLECTION";
export const SET_COLLECTION_LOADER = "SET_COLLECTION_LOADER";

//Dispatch functions
export const getCollections = () => {
  return {
    type: GET_COLLECTIONS,
  };
};

export const getCollection = (collectionName) => {
  return {
    type: GET_COLLECTION,
    payload: {
      collectionName: collectionName,
    },
  };
};

export const getNft = (collectionName, nftID) => {
  return {
    type: GET_NFT,
    payload: {
      nftID: nftID,
      collectionName: collectionName,
    },
  };
};

export const searchCollection = (collectionName) => {
  return {
    type: SEARCH_COLLECTION,
    payload: {
      collectionName: collectionName,
    },
  };
};

export const setCollectionLoader = () => {
  return {
    type: SET_COLLECTION_LOADER,
  };
};

//Local functions

export const getCollectionData = (collections, collectionName) => {
  return collections.filter((collection) => {
    return collection.collectionName === collectionName;
  })[0];
};

export const getNftData = (collections, collectionName, nftID) => {
  var collection = collections.filter((collection) => {
    return collection.collectionName === collectionName;
  })[0];
  var nft = collection.nfts.filter((nft) => {
    return nft.id == nftID;
  })[0];
  return nft;
};

export const getSearchedCollections = (collections, collectionName) => {
  return collections.filter((collection) => {
    return collection.collectionName
      .toLowerCase()
      .includes(collectionName.toLowerCase());
  });
};

//Initial state
const initialState = {
  homeNfts: [
    {
      id: 1,
      collectionName: "Indigenous civilisation",
      name: "#001",
      nftid: "886055",
      imageUrl:
        "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/1.png",
      price: 0,
    },
    {},
    {
      id: 22,
      collectionName: "Pharaonic civilisation",
      name: "#022",
      nftid: "691645",
      imageUrl:
        "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/22.png",
      price: 0,
    },
    {
      id: 4,
      collectionName: "Indigenous civilisation",
      name: "#004",
      nftid: "270836",
      imageUrl:
        "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/4.png",
      price: 0,
    },
    {
      id: 6,
      collectionName: "Mayan civilisation",
      name: "#006",
      nftid: "252346",
      imageUrl:
        "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/6.png",
      price: 0,
    },
  ],
  collectionLoads: false,
  nftLoads: false,
  collections: [
    {
      name: "Pharaonic #1",
      edition: 1,
      collectionName: "Pharaonic civilisation",
      collectionImage:
        "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/1.png",
      description: "description",
      nfts: [
        {
          id: 1,
          collectionName: "Pharaonic civilisation",
          name: "#001",
          nftid: "257873",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/1.png",
          price: 0,
        },
        {
          id: 2,
          collectionName: "Pharaonic civilisation",
          name: "#002",
          nftid: "657975",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/2.png",
          price: 0,
        },
        {
          id: 3,
          collectionName: "Pharaonic civilisation",
          name: "#003",
          nftid: "597900",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/3.png",
          price: 0,
        },
        {
          id: 4,
          collectionName: "Pharaonic civilisation",
          name: "#004",
          nftid: "647407",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/4.png",
          price: 0,
        },
        {
          id: 5,
          collectionName: "Pharaonic civilisation",
          name: "#005",
          nftid: "259779",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/5.png",
          price: 0,
        },
        {
          id: 6,
          collectionName: "Pharaonic civilisation",
          name: "#006",
          nftid: "939898",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/6.png",
          price: 0,
        },
        {
          id: 7,
          collectionName: "Pharaonic civilisation",
          name: "#007",
          nftid: "960634",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/7.png",
          price: 0,
        },
        {
          id: 8,
          collectionName: "Pharaonic civilisation",
          name: "#008",
          nftid: "459448",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/8.png",
          price: 0,
        },
        {
          id: 9,
          collectionName: "Pharaonic civilisation",
          name: "#009",
          nftid: "244149",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/9.png",
          price: 0,
        },
        {
          id: 10,
          collectionName: "Pharaonic civilisation",
          name: "#010",
          nftid: "778961",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/10.png",
          price: 0,
        },
        {
          id: 11,
          collectionName: "Pharaonic civilisation",
          name: "#011",
          nftid: "943568",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/11.png",
          price: 0,
        },
        {
          id: 12,
          collectionName: "Pharaonic civilisation",
          name: "#012",
          nftid: "668109",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/12.png",
          price: 0,
        },
        {
          id: 13,
          collectionName: "Pharaonic civilisation",
          name: "#013",
          nftid: "864842",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/13.png",
          price: 0,
        },
        {
          id: 14,
          collectionName: "Pharaonic civilisation",
          name: "#014",
          nftid: "438746",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/14.png",
          price: 0,
        },
        {
          id: 15,
          collectionName: "Pharaonic civilisation",
          name: "#015",
          nftid: "720148",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/15.png",
          price: 0,
        },
        {
          id: 16,
          collectionName: "Pharaonic civilisation",
          name: "#016",
          nftid: "939712",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/16.png",
          price: 0,
        },
        {
          id: 17,
          collectionName: "Pharaonic civilisation",
          name: "#017",
          nftid: "319266",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/17.png",
          price: 0,
        },
        {
          id: 18,
          collectionName: "Pharaonic civilisation",
          name: "#018",
          nftid: "418447",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/18.png",
          price: 0,
        },
        {
          id: 19,
          collectionName: "Pharaonic civilisation",
          name: "#019",
          nftid: "529552",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/19.png",
          price: 0,
        },
        {
          id: 20,
          collectionName: "Pharaonic civilisation",
          name: "#020",
          nftid: "500840",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/20.png",
          price: 0,
        },
        {
          id: 21,
          collectionName: "Pharaonic civilisation",
          name: "#021",
          nftid: "973277",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/21.png",
          price: 0,
        },
        {
          id: 22,
          collectionName: "Pharaonic civilisation",
          name: "#022",
          nftid: "691645",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/22.png",
          price: 0,
        },
        {
          id: 23,
          collectionName: "Pharaonic civilisation",
          name: "#023",
          nftid: "517819",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/23.png",
          price: 0,
        },
        {
          id: 24,
          collectionName: "Pharaonic civilisation",
          name: "#024",
          nftid: "188657",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/24.png",
          price: 0,
        },
        {
          id: 25,
          collectionName: "Pharaonic civilisation",
          name: "#025",
          nftid: "501657",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/25.png",
          price: 0,
        },
        {
          id: 26,
          collectionName: "Pharaonic civilisation",
          name: "#026",
          nftid: "850416",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/26.png",
          price: 0,
        },
        {
          id: 27,
          collectionName: "Pharaonic civilisation",
          name: "#027",
          nftid: "735989",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/27.png",
          price: 0,
        },
        {
          id: 28,
          collectionName: "Pharaonic civilisation",
          name: "#028",
          nftid: "158002",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/28.png",
          price: 0,
        },
        {
          id: 29,
          collectionName: "Pharaonic civilisation",
          name: "#029",
          nftid: "266594",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/29.png",
          price: 0,
        },
        {
          id: 30,
          collectionName: "Pharaonic civilisation",
          name: "#030",
          nftid: "590119",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/30.png",
          price: 0,
        },
        {
          id: 31,
          collectionName: "Pharaonic civilisation",
          name: "#031",
          nftid: "317476",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/31.png",
          price: 0,
        },
        {
          id: 32,
          collectionName: "Pharaonic civilisation",
          name: "#032",
          nftid: "591440",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/32.png",
          price: 0,
        },
        {
          id: 33,
          collectionName: "Pharaonic civilisation",
          name: "#033",
          nftid: "940404",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/33.png",
          price: 0,
        },
        {
          id: 34,
          collectionName: "Pharaonic civilisation",
          name: "#034",
          nftid: "632274",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/34.png",
          price: 0,
        },
        {
          id: 35,
          collectionName: "Pharaonic civilisation",
          name: "#035",
          nftid: "380460",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/35.png",
          price: 0,
        },
        {
          id: 36,
          collectionName: "Pharaonic civilisation",
          name: "#036",
          nftid: "233834",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/36.png",
          price: 0,
        },
        {
          id: 37,
          collectionName: "Pharaonic civilisation",
          name: "#037",
          nftid: "142114",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/37.png",
          price: 0,
        },
        {
          id: 38,
          collectionName: "Pharaonic civilisation",
          name: "#038",
          nftid: "112901",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/38.png",
          price: 0,
        },
        {
          id: 39,
          collectionName: "Pharaonic civilisation",
          name: "#039",
          nftid: "591450",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/39.png",
          price: 0,
        },
        {
          id: 40,
          collectionName: "Pharaonic civilisation",
          name: "#040",
          nftid: "558783",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/40.png",
          price: 0,
        },
        {
          id: 41,
          collectionName: "Pharaonic civilisation",
          name: "#041",
          nftid: "964849",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/41.png",
          price: 0,
        },
        {
          id: 42,
          collectionName: "Pharaonic civilisation",
          name: "#042",
          nftid: "957698",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/42.png",
          price: 0,
        },
        {
          id: 43,
          collectionName: "Pharaonic civilisation",
          name: "#043",
          nftid: "464553",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/43.png",
          price: 0,
        },
        {
          id: 44,
          collectionName: "Pharaonic civilisation",
          name: "#044",
          nftid: "489230",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/44.png",
          price: 0,
        },
        {
          id: 45,
          collectionName: "Pharaonic civilisation",
          name: "#045",
          nftid: "991896",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/45.png",
          price: 0,
        },
        {
          id: 46,
          collectionName: "Pharaonic civilisation",
          name: "#046",
          nftid: "499974",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/46.png",
          price: 0,
        },
        {
          id: 47,
          collectionName: "Pharaonic civilisation",
          name: "#047",
          nftid: "643648",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/47.png",
          price: 0,
        },
        {
          id: 48,
          collectionName: "Pharaonic civilisation",
          name: "#048",
          nftid: "583884",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/48.png",
          price: 0,
        },
        {
          id: 49,
          collectionName: "Pharaonic civilisation",
          name: "#049",
          nftid: "273939",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/49.png",
          price: 0,
        },
        {
          id: 50,
          collectionName: "Pharaonic civilisation",
          name: "#050",
          nftid: "784530",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Pharaonic/50.png",
          price: 0,
        },
      ],
    },
    {
      id: 1,
      collectionName: "Indigenous civilisation",
      collectionImage:
        "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/1.png",
      nfts: [
        {
          id: 1,
          collectionName: "Indigenous civilisation",
          name: "#001",
          nftid: "543381",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/1.png",
          price: 0,
        },
        {
          id: 2,
          collectionName: "Indigenous civilisation",
          name: "#002",
          nftid: "331310",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/2.png",
          price: 0,
        },
        {
          id: 3,
          collectionName: "Indigenous civilisation",
          name: "#003",
          nftid: "891477",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/3.png",
          price: 0,
        },
        {
          id: 4,
          collectionName: "Indigenous civilisation",
          name: "#004",
          nftid: "208997",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/4.png",
          price: 0,
        },
        {
          id: 5,
          collectionName: "Indigenous civilisation",
          name: "#005",
          nftid: "690789",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/5.png",
          price: 0,
        },
        {
          id: 6,
          collectionName: "Indigenous civilisation",
          name: "#006",
          nftid: "385443",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/6.png",
          price: 0,
        },
        {
          id: 7,
          collectionName: "Indigenous civilisation",
          name: "#007",
          nftid: "399787",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/7.png",
          price: 0,
        },
        {
          id: 8,
          collectionName: "Indigenous civilisation",
          name: "#008",
          nftid: "339542",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/8.png",
          price: 0,
        },
        {
          id: 9,
          collectionName: "Indigenous civilisation",
          name: "#009",
          nftid: "534835",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/9.png",
          price: 0,
        },
        {
          id: 10,
          collectionName: "Indigenous civilisation",
          name: "#010",
          nftid: "681301",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/10.png",
          price: 0,
        },
        {
          id: 11,
          collectionName: "Indigenous civilisation",
          name: "#011",
          nftid: "642224",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/11.png",
          price: 0,
        },
        {
          id: 12,
          collectionName: "Indigenous civilisation",
          name: "#012",
          nftid: "547278",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/12.png",
          price: 0,
        },
        {
          id: 13,
          collectionName: "Indigenous civilisation",
          name: "#013",
          nftid: "945490",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/13.png",
          price: 0,
        },
        {
          id: 14,
          collectionName: "Indigenous civilisation",
          name: "#014",
          nftid: "240876",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/14.png",
          price: 0,
        },
        {
          id: 15,
          collectionName: "Indigenous civilisation",
          name: "#015",
          nftid: "520977",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/15.png",
          price: 0,
        },
        {
          id: 16,
          collectionName: "Indigenous civilisation",
          name: "#016",
          nftid: "699655",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/16.png",
          price: 0,
        },
        {
          id: 17,
          collectionName: "Indigenous civilisation",
          name: "#017",
          nftid: "296017",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/17.png",
          price: 0,
        },
        {
          id: 18,
          collectionName: "Indigenous civilisation",
          name: "#018",
          nftid: "770682",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/18.png",
          price: 0,
        },
        {
          id: 19,
          collectionName: "Indigenous civilisation",
          name: "#019",
          nftid: "709371",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/19.png",
          price: 0,
        },
        {
          id: 20,
          collectionName: "Indigenous civilisation",
          name: "#020",
          nftid: "497698",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/20.png",
          price: 0,
        },
        {
          id: 21,
          collectionName: "Indigenous civilisation",
          name: "#021",
          nftid: "885863",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/21.png",
          price: 0,
        },
        {
          id: 22,
          collectionName: "Indigenous civilisation",
          name: "#022",
          nftid: "839831",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/22.png",
          price: 0,
        },
        {
          id: 23,
          collectionName: "Indigenous civilisation",
          name: "#023",
          nftid: "328037",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/23.png",
          price: 0,
        },
        {
          id: 24,
          collectionName: "Indigenous civilisation",
          name: "#024",
          nftid: "564322",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/24.png",
          price: 0,
        },
        {
          id: 25,
          collectionName: "Indigenous civilisation",
          name: "#025",
          nftid: "387370",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/25.png",
          price: 0,
        },
        {
          id: 26,
          collectionName: "Indigenous civilisation",
          name: "#026",
          nftid: "202810",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/26.png",
          price: 0,
        },
        {
          id: 27,
          collectionName: "Indigenous civilisation",
          name: "#027",
          nftid: "199481",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/27.png",
          price: 0,
        },
        {
          id: 28,
          collectionName: "Indigenous civilisation",
          name: "#028",
          nftid: "518391",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/28.png",
          price: 0,
        },
        {
          id: 29,
          collectionName: "Indigenous civilisation",
          name: "#029",
          nftid: "982999",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/29.png",
          price: 0,
        },
        {
          id: 30,
          collectionName: "Indigenous civilisation",
          name: "#030",
          nftid: "199555",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/30.png",
          price: 0,
        },
        {
          id: 31,
          collectionName: "Indigenous civilisation",
          name: "#031",
          nftid: "413806",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/31.png",
          price: 0,
        },
        {
          id: 32,
          collectionName: "Indigenous civilisation",
          name: "#032",
          nftid: "425867",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/32.png",
          price: 0,
        },
        {
          id: 33,
          collectionName: "Indigenous civilisation",
          name: "#033",
          nftid: "143674",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/33.png",
          price: 0,
        },
        {
          id: 34,
          collectionName: "Indigenous civilisation",
          name: "#034",
          nftid: "763178",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/34.png",
          price: 0,
        },
        {
          id: 35,
          collectionName: "Indigenous civilisation",
          name: "#035",
          nftid: "757965",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/35.png",
          price: 0,
        },
        {
          id: 36,
          collectionName: "Indigenous civilisation",
          name: "#036",
          nftid: "319951",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/36.png",
          price: 0,
        },
        {
          id: 37,
          collectionName: "Indigenous civilisation",
          name: "#037",
          nftid: "539307",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/37.png",
          price: 0,
        },
        {
          id: 38,
          collectionName: "Indigenous civilisation",
          name: "#038",
          nftid: "649946",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/38.png",
          price: 0,
        },
        {
          id: 39,
          collectionName: "Indigenous civilisation",
          name: "#039",
          nftid: "171598",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/39.png",
          price: 0,
        },
        {
          id: 40,
          collectionName: "Indigenous civilisation",
          name: "#040",
          nftid: "359552",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/40.png",
          price: 0,
        },
        {
          id: 41,
          collectionName: "Indigenous civilisation",
          name: "#041",
          nftid: "232203",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/41.png",
          price: 0,
        },
        {
          id: 42,
          collectionName: "Indigenous civilisation",
          name: "#042",
          nftid: "588648",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/42.png",
          price: 0,
        },
        {
          id: 43,
          collectionName: "Indigenous civilisation",
          name: "#043",
          nftid: "777896",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/43.png",
          price: 0,
        },
        {
          id: 44,
          collectionName: "Indigenous civilisation",
          name: "#044",
          nftid: "686793",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/44.png",
          price: 0,
        },
        {
          id: 45,
          collectionName: "Indigenous civilisation",
          name: "#045",
          nftid: "486222",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/45.png",
          price: 0,
        },
        {
          id: 46,
          collectionName: "Indigenous civilisation",
          name: "#046",
          nftid: "657370",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/46.png",
          price: 0,
        },
        {
          id: 47,
          collectionName: "Indigenous civilisation",
          name: "#047",
          nftid: "607580",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/47.png",
          price: 0,
        },
        {
          id: 48,
          collectionName: "Indigenous civilisation",
          name: "#048",
          nftid: "237937",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/48.png",
          price: 0,
        },
        {
          id: 49,
          collectionName: "Indigenous civilisation",
          name: "#049",
          nftid: "410883",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/49.png",
          price: 0,
        },
        {
          id: 50,
          collectionName: "Indigenous civilisation",
          name: "#050",
          nftid: "787257",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Indigenous/50.png",
          price: 0,
        },
      ],
    },
    {
      id: 2,
      collectionName: "Mayan civilisation",
      collectionImage:
        "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/1.png",
      nfts: [
        {
          id: 1,
          collectionName: "Mayan civilisation",
          name: "#001",
          nftid: "347101",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/1.png",
          price: 0,
        },
        {
          id: 2,
          collectionName: "Mayan civilisation",
          name: "#002",
          nftid: "402734",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/2.png",
          price: 0,
        },
        {
          id: 3,
          collectionName: "Mayan civilisation",
          name: "#003",
          nftid: "623250",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/3.png",
          price: 0,
        },
        {
          id: 4,
          collectionName: "Mayan civilisation",
          name: "#004",
          nftid: "847370",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/4.png",
          price: 0,
        },
        {
          id: 5,
          collectionName: "Mayan civilisation",
          name: "#005",
          nftid: "250038",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/5.png",
          price: 0,
        },
        {
          id: 6,
          collectionName: "Mayan civilisation",
          name: "#006",
          nftid: "252346",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/6.png",
          price: 0,
        },
        {
          id: 7,
          collectionName: "Mayan civilisation",
          name: "#007",
          nftid: "415165",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/7.png",
          price: 0,
        },
        {
          id: 8,
          collectionName: "Mayan civilisation",
          name: "#008",
          nftid: "332970",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/8.png",
          price: 0,
        },
        {
          id: 9,
          collectionName: "Mayan civilisation",
          name: "#009",
          nftid: "981682",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/9.png",
          price: 0,
        },
        {
          id: 10,
          collectionName: "Mayan civilisation",
          name: "#010",
          nftid: "779382",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/10.png",
          price: 0,
        },
        {
          id: 11,
          collectionName: "Mayan civilisation",
          name: "#011",
          nftid: "316123",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/11.png",
          price: 0,
        },
        {
          id: 12,
          collectionName: "Mayan civilisation",
          name: "#012",
          nftid: "905031",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/12.png",
          price: 0,
        },
        {
          id: 13,
          collectionName: "Mayan civilisation",
          name: "#013",
          nftid: "640569",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/13.png",
          price: 0,
        },
        {
          id: 14,
          collectionName: "Mayan civilisation",
          name: "#014",
          nftid: "593501",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/14.png",
          price: 0,
        },
        {
          id: 15,
          collectionName: "Mayan civilisation",
          name: "#015",
          nftid: "790727",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/15.png",
          price: 0,
        },
        {
          id: 16,
          collectionName: "Mayan civilisation",
          name: "#016",
          nftid: "610811",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/16.png",
          price: 0,
        },
        {
          id: 17,
          collectionName: "Mayan civilisation",
          name: "#017",
          nftid: "346722",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/17.png",
          price: 0,
        },
        {
          id: 18,
          collectionName: "Mayan civilisation",
          name: "#018",
          nftid: "711405",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/18.png",
          price: 0,
        },
        {
          id: 19,
          collectionName: "Mayan civilisation",
          name: "#019",
          nftid: "440675",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/19.png",
          price: 0,
        },
        {
          id: 20,
          collectionName: "Mayan civilisation",
          name: "#020",
          nftid: "370323",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/20.png",
          price: 0,
        },
        {
          id: 21,
          collectionName: "Mayan civilisation",
          name: "#021",
          nftid: "530136",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/21.png",
          price: 0,
        },
        {
          id: 22,
          collectionName: "Mayan civilisation",
          name: "#022",
          nftid: "431311",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/22.png",
          price: 0,
        },
        {
          id: 23,
          collectionName: "Mayan civilisation",
          name: "#023",
          nftid: "475095",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/23.png",
          price: 0,
        },
        {
          id: 24,
          collectionName: "Mayan civilisation",
          name: "#024",
          nftid: "322073",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/24.png",
          price: 0,
        },
        {
          id: 25,
          collectionName: "Mayan civilisation",
          name: "#025",
          nftid: "234658",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/25.png",
          price: 0,
        },
        {
          id: 26,
          collectionName: "Mayan civilisation",
          name: "#026",
          nftid: "110168",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/26.png",
          price: 0,
        },
        {
          id: 27,
          collectionName: "Mayan civilisation",
          name: "#027",
          nftid: "723874",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/27.png",
          price: 0,
        },
        {
          id: 28,
          collectionName: "Mayan civilisation",
          name: "#028",
          nftid: "851872",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/28.png",
          price: 0,
        },
        {
          id: 29,
          collectionName: "Mayan civilisation",
          name: "#029",
          nftid: "454119",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/29.png",
          price: 0,
        },
        {
          id: 30,
          collectionName: "Mayan civilisation",
          name: "#030",
          nftid: "740984",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/30.png",
          price: 0,
        },
        {
          id: 31,
          collectionName: "Mayan civilisation",
          name: "#031",
          nftid: "136622",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/31.png",
          price: 0,
        },
        {
          id: 32,
          collectionName: "Mayan civilisation",
          name: "#032",
          nftid: "982388",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/32.png",
          price: 0,
        },
        {
          id: 33,
          collectionName: "Mayan civilisation",
          name: "#033",
          nftid: "611173",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/33.png",
          price: 0,
        },
        {
          id: 34,
          collectionName: "Mayan civilisation",
          name: "#034",
          nftid: "145592",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/34.png",
          price: 0,
        },
        {
          id: 35,
          collectionName: "Mayan civilisation",
          name: "#035",
          nftid: "270957",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/35.png",
          price: 0,
        },
        {
          id: 36,
          collectionName: "Mayan civilisation",
          name: "#036",
          nftid: "107312",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/36.png",
          price: 0,
        },
        {
          id: 37,
          collectionName: "Mayan civilisation",
          name: "#037",
          nftid: "352325",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/37.png",
          price: 0,
        },
        {
          id: 38,
          collectionName: "Mayan civilisation",
          name: "#038",
          nftid: "498734",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/38.png",
          price: 0,
        },
        {
          id: 39,
          collectionName: "Mayan civilisation",
          name: "#039",
          nftid: "361087",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/39.png",
          price: 0,
        },
        {
          id: 40,
          collectionName: "Mayan civilisation",
          name: "#040",
          nftid: "586326",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/40.png",
          price: 0,
        },
        {
          id: 41,
          collectionName: "Mayan civilisation",
          name: "#041",
          nftid: "420264",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/41.png",
          price: 0,
        },
        {
          id: 42,
          collectionName: "Mayan civilisation",
          name: "#042",
          nftid: "944794",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/42.png",
          price: 0,
        },
        {
          id: 43,
          collectionName: "Mayan civilisation",
          name: "#043",
          nftid: "120094",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/43.png",
          price: 0,
        },
        {
          id: 44,
          collectionName: "Mayan civilisation",
          name: "#044",
          nftid: "265900",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/44.png",
          price: 0,
        },
        {
          id: 45,
          collectionName: "Mayan civilisation",
          name: "#045",
          nftid: "546978",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/45.png",
          price: 0,
        },
        {
          id: 46,
          collectionName: "Mayan civilisation",
          name: "#046",
          nftid: "449575",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/46.png",
          price: 0,
        },
        {
          id: 47,
          collectionName: "Mayan civilisation",
          name: "#047",
          nftid: "141678",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/47.png",
          price: 0,
        },
        {
          id: 48,
          collectionName: "Mayan civilisation",
          name: "#048",
          nftid: "115631",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/48.png",
          price: 0,
        },
        {
          id: 49,
          collectionName: "Mayan civilisation",
          name: "#049",
          nftid: "377447",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/49.png",
          price: 0,
        },
        {
          id: 50,
          collectionName: "Mayan civilisation",
          name: "#050",
          nftid: "786094",
          imageUrl:
            "https://raw.githubusercontent.com/antiqua-bsc/antiqua_nfts/master/Mayans/50.png",
          price: 0,
        },
      ],
    },
  ],
  collection: {},
  nft: {},
  searchedCollections: [],
};

export const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS:
      return { ...state, collections: state.collections };
    case GET_COLLECTION:
      return {
        ...state,
        collectionLoads: true,
        collection: getCollectionData(
          state.collections,
          action.payload.collectionName
        ),
      };
    case GET_NFT:
      return {
        ...state,
        nftLoads: true,
        nft: getNftData(
          state.collections,
          action.payload.collectionName,
          action.payload.nftID
        ),
      };

    case SEARCH_COLLECTION:
      return {
        ...state,
        searchedCollections: getSearchedCollections(
          state.collections,
          action.payload.collectionName
        ),
      };

    case SET_COLLECTION_LOADER:
      console.log("o");
      return {
        ...state,
        collectionLoads: false,
      };
    default:
      return { ...state };
  }
};
