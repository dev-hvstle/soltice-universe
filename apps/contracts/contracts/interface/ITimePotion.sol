// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

interface ITimePotion {
    struct Tax {
        uint256 team;
        uint256 dev;
        uint256 liquidity;
        bool isOn;
    }
}
