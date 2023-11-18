// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "./interface/IGame.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import "./Randomizer.sol";
import "./Registry.sol";
// import "../registry/SolticeAddressRegistry.sol";
import "./TimePotion.sol";
import "./MonstersMeta.sol";

contract Game is
    IGame,
    IMonstersMeta,
    OwnableUpgradeable,
    ReentrancyGuardUpgradeable
{
    GameSystem public system;

    mapping(Evolution => GameMonster) public monsters;
    mapping(address => User) public users;
    mapping(address => mapping(uint256 => Record)) public gameRecord;

    /**
     * Events
     */

    /**
     * Modifier
     */

    /**
     * Initializer
     */

    function initialize() external initializer {
        __Ownable_init(msg.sender);
        __Context_init();
        __ReentrancyGuard_init();
    }

    /**
     * Main
     */
    function _recordGame(Record memory _record) internal {
        users[msg.sender].gameCount += 1;
        users[msg.sender].energy = getEnergy() - 1;
        users[msg.sender].lastTimeOfPlay = block.timestamp;
        gameRecord[msg.sender][users[msg.sender].gameCount] = _record;
    }

    function play(
        Mode _mode,
        uint256 _tokenId
    ) external nonReentrant returns (bool) {
        Registry registry = Registry(system.contractRegistry);
        ERC721Upgradeable monster = ERC721Upgradeable(
            registry.getAddress("Monsters")
        );
        MonstersMeta monsterMeta = MonstersMeta(
            registry.getAddress("MonstersMeta")
        );
        TimePotion token = TimePotion(
            payable(registry.getAddress("TimePotion"))
        );
        Randomizer rand = Randomizer(registry.getAddress("Randomizer"));

        Evolution evo = monsterMeta.getMonsterEvo(_tokenId);

        Record memory record = Record({
            mode: _mode,
            result: false,
            reward: monsters[evo].loseReward,
            time: block.timestamp
        });
        (, , , , uint256 cooldown) = monsterMeta.monsterData(_tokenId);

        require(
            monster.ownerOf(_tokenId) == msg.sender,
            "Soltice :: You do not own that monster"
        );
        require(getEnergy() > 0, "Soltice :: Not enough energy");
        require(cooldown <= block.timestamp, "Soltice :: Cooldown not reached");

        // users[msg.sender].energy = getEnergy() - 1;

        bool didWin = rand.requestRandomWords(100) <= monsters[evo].winrate;

        if (didWin) {
            token.mint(msg.sender, monsters[evo].winReward);
            record.result = true;
            record.reward = monsters[evo].winReward;
            _recordGame(record);
            return true;
        }
        _recordGame(record);
        return false;
    }

    /**
     * Administrative
     */

    // Monsters
    function setWinRate(
        Evolution[] memory _evo,
        uint256[] memory _winrate
    ) external onlyOwner {
        require(
            _evo.length == _winrate.length,
            "Soltice :: Array length mismatch"
        );

        for (uint256 i = 0; i < _evo.length; i++) {
            require(_winrate[i] <= 100, "Soltice :: Cannot set beyond 100");
            monsters[_evo[i]].winrate = _winrate[i];
        }
    }

    function setWinReward(
        Evolution[] memory _evo,
        uint256[] memory _winReward
    ) external onlyOwner {
        require(
            _evo.length == _winReward.length,
            "Soltice :: Array length mismatch"
        );
        for (uint256 i = 0; i < _evo.length; i++) {
            monsters[_evo[i]].winReward = _winReward[i];
        }
    }

    function setLoseReward(
        Evolution[] memory _evo,
        uint256[] memory _loseReward
    ) external onlyOwner {
        require(
            _evo.length == _loseReward.length,
            "Soltice :: Array length mismatch"
        );
        for (uint256 i = 0; i < _evo.length; i++) {
            monsters[_evo[i]].loseReward = _loseReward[i];
        }
    }

    // System
    function setRegistry(address _contractRegistry) external onlyOwner {
        system.contractRegistry = _contractRegistry;
    }

    function setMaxEnergy(uint256 _maxEnergy) external onlyOwner {
        system.maxEnergy = _maxEnergy;
    }

    function setMaintenance() external onlyOwner {
        system.isUndermaintenance = !system.isUndermaintenance;
    }

    /**
     * View
     */
    function getEnergy() public view returns (uint256) {
        if (users[msg.sender].lastTimeOfPlay == 0) {
            return system.maxEnergy;
        }

        uint256 extraEnergy = (block.timestamp -
            users[msg.sender].lastTimeOfPlay) / 2 hours;
        uint256 finalEnergy = users[msg.sender].energy + extraEnergy;
        if (finalEnergy > system.maxEnergy) {
            return system.maxEnergy;
        }
        return finalEnergy;
    }
}
