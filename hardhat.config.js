require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 31337
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["c526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa"]
    }
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
