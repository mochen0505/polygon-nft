const hre = require("hardhat");
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

async function main() {
  const NFT = await hre.ethers.getContractFactory("MCNFT");
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const owner = await contract.ownerOf(1);
  console.log("Owner:", owner);
  const uri = await contract.tokenURI(1);
  console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
