import { ethers, upgrades } from "hardhat";
import { SEPOLIA_TIME_POTION } from "../addresses";

async function main() {
  const TimePotion = await ethers.getContractFactory("TimePotion");
  const timePotion = await upgrades.upgradeProxy(
    SEPOLIA_TIME_POTION,
    TimePotion
  );

  console.info("Upgrading time potion...");
  await timePotion.waitForDeployment();
  console.info("Done!");
}

main();
