import { ethers } from "hardhat";

async function main() {
  const registry = await ethers.getContractAt(
    "Registry",
    "0xB6039be5773A51a07E54b6CD5EA70ba2D03c958f"
  );

  console.info("Setting up addresses...");
  await registry.setToRegistry(
    "TimePotion",
    "0xbcc9F7E989aE209d611fAb5d3A05e8795F224cD2"
  );
  await registry.setToRegistry(
    "USDT",
    "0x91d3100E6Ef656FCB9ecEe9f9ac3Ca2DDC1910e3"
  );
  console.info("Addresses set up!");
}

main();
