import { ethers } from "hardhat";
import { SEPOLIA_GAME } from "../addresses";

async function main() {
  const game = await ethers.getContractAt("Game", SEPOLIA_GAME);

  console.info("Trying to play...");
  await game.play(0, 1);
  console.info("Done!");
}

main();
