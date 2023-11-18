import { ethers, upgrades } from "hardhat";

async function main() {
  const Registry = await ethers.getContractFactory("Registry");
  const registry = await upgrades.deployProxy(Registry, []);

  console.info("Deploying Registry...");
  await registry.waitForDeployment();
  console.info("Registry deployed to:", await registry.getAddress());
}

main();
