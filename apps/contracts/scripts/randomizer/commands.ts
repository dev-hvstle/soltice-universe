import { ethers } from "hardhat";
import { SEPOLIA_RANDOMIZER } from "../addresses";

async function main() {
  const randomizer = await ethers.getContractAt(
    "Randomizer",
    SEPOLIA_RANDOMIZER
  );

  console.info("Trying to randomize...");
  const rand = await randomizer.requestRandomWords("100");
  console.info("Success! Random number: ", rand);
}

main();
