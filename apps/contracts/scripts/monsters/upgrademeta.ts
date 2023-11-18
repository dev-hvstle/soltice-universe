import { ethers, upgrades } from "hardhat";
import { SEPOLIA_MONSTER_META } from "../addresses";

async function main() {
  const MonstersMeta = await ethers.getContractFactory("MonstersMeta");
  const monstersMeta = await upgrades.upgradeProxy(
    SEPOLIA_MONSTER_META,
    MonstersMeta
  );

  console.info("Upgrading MonstersMeta...");
  await monstersMeta.waitForDeployment();
  console.info("Done!");
}

main();
