import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();
const { RPC_Endpoints, OWNER_PRIVATE_KEY, RPC_Endpoints_Sepolia, RPC_Endpoints_BNB } = process.env;

const config: HardhatUserConfig = {
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545/",
      accounts: [
        "0x586fddaf6968fddbc713c3dca703203e5063f2b1493256e3ac402bf5601f5f01", // pk
      ],
    },
    sepolia: {
      url: RPC_Endpoints_Sepolia,
      accounts: [OWNER_PRIVATE_KEY!],
    },
    bnb: {
      url: RPC_Endpoints_BNB,
      accounts: [OWNER_PRIVATE_KEY!],
    },
  },
  solidity: "0.8.24",
};

export default config;
