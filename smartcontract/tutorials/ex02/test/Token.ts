import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre, { ethers } from "hardhat";


describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();
    // A Signer in ethers.js is an object that represents an Ethereum account.

    const hardhatToken = await ethers.deployContract("Token");
    // console.log(hardhatToken)

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    console.log(`ownerBalance : ${ownerBalance}`);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });

  it("Should transfer tokens between accounts", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("Token");

    // Transfer 50 tokens from owner to addr1
    await hardhatToken.transfer(addr1.address, 50);
    const addr1Balance = await hardhatToken.balanceOf(addr1.address);
    console.log(`addr1Balance : ${addr1Balance}`);
    expect(addr1Balance).to.equal(50);

    // Transfer 50 tokens from addr1 to addr2
    await hardhatToken.connect(addr1).transfer(addr2.address, 50);
    const addr2Balance = await hardhatToken.balanceOf(addr2.address);
    console.log(`addr2Balance : ${addr2Balance}`);
    expect(addr2Balance).to.equal(50);
    // expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
  });
});