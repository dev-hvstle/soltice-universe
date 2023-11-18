// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

interface IMonstersMeta {
    enum Evolution {
        SPARKY,
        SHADOW,
        FROST,
        NIMBUS,
        ZEPHYR,
        MONSTAX
    }

    struct Monster {
        Evolution evo;
        string name;
        uint256 level;
        uint256 multiplier;
        uint256 cooldown;
    }

    struct System {
        address registry;
        string desc;
    }
}
