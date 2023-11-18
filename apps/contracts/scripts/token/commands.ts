import { ethers } from "hardhat";
import { SEPOLIA_TIME_POTION, SEPOLIA_USDT } from "../addresses";

async function main() {
  const timePotion = await ethers.getContractAt(
    "TimePotion",
    SEPOLIA_TIME_POTION
  );
  const usdt = await ethers.getContractAt("USDT", SEPOLIA_USDT);

  console.info("Minting...");
  await timePotion.mint(
    "0xc35a29e87a92f8127414D3C181F8AA9e856Ff33C",
    ethers.parseEther(String(1_000_000))
  );
  await usdt.mint(
    "0xc35a29e87a92f8127414D3C181F8AA9e856Ff33C",
    ethers.parseEther(String(1_000_000))
  );
  console.info("Done!");
}
main();
