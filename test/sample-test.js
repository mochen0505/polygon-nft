const { expect } = require("chai");
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
const NFT_URI = process.env.NFT_URI;

describe("NFT", function() {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
    const NFT = await ethers.getContractFactory("MCNFT");
    const nft = await NFT.deploy();
    const URI = NFT_URI;
    await nft.deployed();
    await nft.mint(WALLET_ADDRESS, URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  });
});
