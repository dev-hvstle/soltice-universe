import { ethers, upgrades } from "hardhat";
import {
  SEPOLIA_REGISTRY,
  SEPOLIA_TIME_POTION,
  SEPOLIA_USDT,
} from "../addresses";

async function main() {
  const Monsters = await ethers.getContractFactory("Monsters");
  const monsters = await upgrades.deployProxy(Monsters, []);

  console.info("Deploying Monsters...");
  await monsters.waitForDeployment();
  console.info("Monsters deployed at address: ", await monsters.getAddress());

  console.info("\nSetting up registry...");
  await monsters.setRegistry(SEPOLIA_REGISTRY);
  console.info("Done");

  console.info("\nSetting monsters address to registry...");
  const registry = await ethers.getContractAt("Registry", SEPOLIA_REGISTRY);
  await registry.setToRegistry("Monsters", await monsters.getAddress());
  console.info("Done!");

  console.info("\nApproving monsters to token contracts...");
  const timePotion = await ethers.getContractAt(
    "TimePotion",
    SEPOLIA_TIME_POTION
  );
  const usdt = await ethers.getContractAt("USDT", SEPOLIA_USDT);

  await timePotion.approve(await monsters.getAddress(), ethers.MaxUint256);
  await usdt.approve(await monsters.getAddress(), ethers.MaxUint256);
  console.info("Done!");
}

main();
