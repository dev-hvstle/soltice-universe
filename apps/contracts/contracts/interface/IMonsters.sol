// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

interface IMonsters {
    struct MintSettings {
        uint256 round;
        uint256 supplyPerRound;
        uint256 cooldown;
        uint256 lastMintedAt;
        uint256 price;
    }

    struct Monster {
        uint256 transferCooldown;
    }
}
