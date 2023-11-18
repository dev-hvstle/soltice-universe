import { ethers, upgrades } from "hardhat";
import { SEPOLIA_REGISTRY } from "../addresses";
import { images, monsterData } from "./data";

async function main() {
  // const MonstersMeta = await ethers.getContractFactory("MonstersMeta");
  // const monstersMeta = await upgrades.deployProxy(MonstersMeta, []);

  const monstersMeta = await ethers.getContractAt(
    "MonstersMeta",
    "0x798b46261E010c02F481Aa5f8e23f95B57eeE9Ea"
  );

  // console.info("Deploying MonstersMeta...");
  // await monstersMeta.waitForDeployment();
  // console.info("MonsterMeta deployed to:", await monstersMeta.getAddress());

  // console.info("\nSetting up registry...");
  // await monstersMeta.setRegistry(SEPOLIA_REGISTRY);
  // console.info("Done!");

  console.info("\nSetting up image...");
  await monstersMeta.setImage(monsterData[0], monsterData[1], images);
  console.info("Done!");

  console.info("\nSetting up address to registry...");
  const registry = await ethers.getContractAt("Registry", SEPOLIA_REGISTRY);
  await registry.setToRegistry("MonstersMeta", await monstersMeta.getAddress());
  console.info("Done!");
}

main();
