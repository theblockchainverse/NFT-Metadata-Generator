"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const { NETWORK } = require(path.join(basePath, "constants/network.js"));

const network = NETWORK.sol; // ".sol" for start from 0 and ".eth" for start from 1  & for customization go to main.js file :287

// General metadata for Ethereum
const namePrefix = "The Blockchain Verse";
const description = "Your Portal to Web3 and Decentralization.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "TBT", // TryBlockTech && TheBlockchainVerse
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://decentrame.com",
  creators: [
    {
      address: "35FX8hqpMHmcbT5R1Ye1ze6ZiJoeZMwJHTnwdYYZzhZY",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 9999, // No of NFT for generation.
    layersOrder: [
      { name: "Background" }, // layer first will go back in NFT. Like Background in Every Image
      { name: "Logo" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 4096, //Image original properties for better result
  height: 4096,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false, // Value False if you don't have any Background
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
};
