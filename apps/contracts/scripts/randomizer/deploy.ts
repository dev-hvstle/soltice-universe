import { ethers } from "hardhat";

async function main() {
  const Randomizer = await ethers.getContractFactory("Randomizer");
  const randomizer = await Randomizer.deploy();

  console.info("Deploying Randomizer...");
  await randomizer.waitForDeployment();
  console.info("Randomizer deployed to:", await randomizer.getAddress());

  console.info("\nSetting randomizer to registry...");
  const registry = await ethers.getContractAt(
    "Registry",
    "0xB6039be5773A51a07E54b6CD5EA70ba2D03c958f"
  );
  await registry.setToRegistry("Randomizer", await randomizer.getAddress());
  console.info("Done!");
}

main();
