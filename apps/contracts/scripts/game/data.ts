import { ethers } from "hardhat";

export const winrate = [8, 11, 13, 16, 21, 26];
export const rewards = [
  [
    ethers.parseEther(String(150)),
    ethers.parseEther(String(465)),
    ethers.parseEther(String(1_488)),
    ethers.parseEther(String(4_910)),
    ethers.parseEther(String(16_695)),
    ethers.parseEther(String(58_433)),
  ],
  [
    ethers.parseEther(String(1_200)),
    ethers.parseEther(String(3_720)),
    ethers.parseEther(String(11_904)),
    ethers.parseEther(String(39_283)),
    ethers.parseEther(String(133_562)),
    ethers.parseEther(String(467_470)),
  ],
];
