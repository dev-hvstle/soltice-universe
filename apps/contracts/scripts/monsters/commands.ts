import { ethers } from "hardhat";
import { SEPOLIA_MONSTERS } from "../addresses";

async function main() {
  const monsters = await ethers.getContractAt("Monsters", SEPOLIA_MONSTERS);

  // console.info("Trying to mint...");
  // await monsters.mint("1");
  // console.info("Success!");
}

main();
