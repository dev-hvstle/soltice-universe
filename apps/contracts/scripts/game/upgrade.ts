import { ethers, upgrades } from "hardhat";
import { SEPOLIA_GAME } from "../addresses";

async function main() {
  const Game = await ethers.getContractFactory("Game");
  const game = await upgrades.upgradeProxy(SEPOLIA_GAME, Game);

  console.info("Upgrading Game...");
  await game.waitForDeployment();
  console.info("Done!");
}

main();
