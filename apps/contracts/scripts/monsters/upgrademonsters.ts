import { ethers, upgrades } from "hardhat";
import { SEPOLIA_MONSTERS } from "../addresses";
import { mintSettings } from "./data";

async function main() {
  const Monsters = await ethers.getContractFactory("Monsters");
  const monsters = await upgrades.upgradeProxy(SEPOLIA_MONSTERS, Monsters);

  console.info("Upgrading Monsters...");
  await monsters.waitForDeployment();
  console.info("Done!");

  console.info("\nSetting mint settings...");
  await monsters.setMintSettings(mintSettings);
  console.info("Done");
}

main();
