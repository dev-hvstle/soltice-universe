import { ethers, upgrades } from "hardhat";
import { rewards, winrate } from "./data";
import { SEPOLIA_RANDOMIZER, SEPOLIA_REGISTRY } from "../addresses";

async function main() {
  const Game = await ethers.getContractFactory("Game");
  const game = await upgrades.deployProxy(Game, []);

  console.info("Deploying Game...");
  await game.waitForDeployment();
  console.info("Game deployed to:", await game.getAddress());

  console.info("\nSetting winrate...");
  await game.setWinRate([0, 1, 2, 3, 4, 5], winrate);
  console.info("Done!");

  console.info("\nSetting rewards...");
  await game.setLoseReward([0, 1, 2, 3, 4, 5], rewards[0]);
  await game.setWinReward([0, 1, 2, 3, 4, 5], rewards[1]);
  console.info("Done!");

  console.info("\nSetting registry...");
  await game.setRegistry(SEPOLIA_REGISTRY);
  console.info("Done!");

  console.info("\nSetting max enerygy...");
  await game.setMaxEnergy(10);
  console.info("Done!");

  console.info("\nSetting game to registry...");
  const registry = await ethers.getContractAt(
    "Registry",
    "0xB6039be5773A51a07E54b6CD5EA70ba2D03c958f"
  );
  await registry.setToRegistry("Game", await game.getAddress());
  console.info("Done!");

  console.info("\nSetting as operator for randomizer...");
  const randomizer = await ethers.getContractAt(
    "Randomizer",
    SEPOLIA_RANDOMIZER
  );
  await randomizer.setOperator(await game.getAddress());
  console.info("Done!");
}

main();
