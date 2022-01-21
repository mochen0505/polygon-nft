const hre = require("hardhat");
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
const NFT_URI = process.env.NFT_URI;

async function main() {
  const NFT = await hre.ethers.getContractFactory("MCNFT");
  const URI = NFT_URI
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
