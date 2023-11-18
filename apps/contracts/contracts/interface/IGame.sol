// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

interface IGame {
    enum Mode {
        ARENA,
        CIRCUIT,
        SUN
    }

    struct Record {
        Mode mode;
        bool result;
        uint256 reward;
        uint256 time;
    }

    struct User {
        uint256 earnings;
        uint256 energy;
        uint256 lastTimeOfPlay;
        uint256 gameCount;
    }

    struct GameMonster {
        uint256 winrate;
        uint256 winReward;
        uint256 loseReward;
    }

    struct GameSystem {
        address contractRegistry;
        uint256 maxEnergy;
        uint256 userPercent;
        uint256 uplinePercent;
        bool isUndermaintenance;
    }
}
