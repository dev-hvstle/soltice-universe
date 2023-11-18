// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "./Registry.sol";
import "./interface/IMonsterMeta.sol";
import "./Monsters.sol";

contract MonstersMeta is IMonstersMeta, OwnableUpgradeable {
    /**
     * Local variables
     */
    using Strings for uint256;
    System public system;

    mapping(Evolution => mapping(uint256 => uint256)) public monsterMultiplier;
    mapping(Evolution => mapping(uint256 => string)) public monsterImage;
    mapping(uint256 => Monster) public monsterData;

    /**
     * Modifiers
     */
    modifier onlyOperator() {
        Registry registry = Registry(system.registry);
        require(msg.sender == registry.getAddress("Monster"));
        _;
    }

    /**
     * Constructor
     */
    function initialize() external initializer {
        __Ownable_init(msg.sender);

        system = System({
            registry: address(0),
            desc: "Soltice Monsters is a collection of 10,000 unique Monsters living on the Ethereum blockchain. Each Monster is randomly generated and has unique characteristics."
        });
    }

    /**
     * Main functions
     */
    function evolveMonster(
        address _user,
        uint256[] memory _tokenIDs
    ) external onlyOperator {
        Registry regsitry = Registry(system.registry);
        Monsters monsters = Monsters(regsitry.getAddress("Monster"));

        require(
            monsterData[_tokenIDs[0]].level ==
                monsterData[_tokenIDs[1]].level &&
                monsterData[_tokenIDs[0]].level ==
                monsterData[_tokenIDs[2]].level,
            "Soltice :: Not equal level"
        );
        for (uint256 index = 0; index < _tokenIDs.length; index++) {
            require(
                _user == monsters.ownerOf(_tokenIDs[index]),
                "Soltice :: Not owner"
            );
        }
    }

    /**
     * Write Functions
     */
    function setRegistry(address _registry) external onlyOwner {
        system.registry = _registry;
    }

    function setCooldown(uint256 _tokenId, uint256 _cooldown) external {
        Registry registry = Registry(system.registry);
        require(msg.sender == registry.getAddress("Monsters"));
        monsterData[_tokenId].cooldown = _cooldown;
    }

    function setImage(
        Evolution[] memory _evo,
        uint256[] memory _multiplier,
        string[] memory _hash
    ) external onlyOwner {
        require(
            _multiplier.length == _hash.length,
            "Soltice :: Not equal data"
        );

        for (uint256 index = 0; index < _evo.length; index++) {
            Evolution evoIndex = _getMonsterEnum(index);
            for (
                uint256 mulIndex = 0;
                mulIndex < _multiplier.length;
                mulIndex++
            ) {
                monsterImage[evoIndex][mulIndex] = _hash[mulIndex];
            }
        }
    }

    function setMultiplier(
        Evolution[] memory _evo,
        uint256[] memory _multiplier,
        uint256[] memory _mainMultiplier
    ) external onlyOwner {
        require(
            _multiplier.length == _mainMultiplier.length,
            "Soltice :: Not equal data"
        );

        for (uint256 index = 0; index < _evo.length; index++) {
            Evolution evoIndex = _getMonsterEnum(index);
            for (
                uint256 mulIndex = 0;
                mulIndex < _multiplier.length;
                mulIndex++
            ) {
                monsterMultiplier[evoIndex][mulIndex] = _mainMultiplier[
                    mulIndex
                ];
            }
        }
    }

    /**
     * Read Functions
     */

    function _getMonsterName(
        uint256 _tokenID
    ) public view returns (string memory) {
        if (monsterData[_tokenID].evo == Evolution.SPARKY) return "Sparky";
        if (monsterData[_tokenID].evo == Evolution.SHADOW) return "Shadow";
        if (monsterData[_tokenID].evo == Evolution.FROST) return "Frost";
        if (monsterData[_tokenID].evo == Evolution.NIMBUS) return "Nimbus";
        if (monsterData[_tokenID].evo == Evolution.ZEPHYR) return "Zephyr";
        return "Monsta-X";
    }

    function _getMonsterEnum(uint256 _tokenID) public view returns (Evolution) {
        uint256 _evo = monsterData[_tokenID].level;
        if (_evo == 0) return Evolution.SPARKY;
        if (_evo == 1) return Evolution.SHADOW;
        if (_evo == 2) return Evolution.FROST;
        if (_evo == 3) return Evolution.NIMBUS;
        if (_evo == 4) return Evolution.ZEPHYR;
        return Evolution.MONSTAX;
    }

    function _getMultiplier(uint256 _tokenID) public view returns (uint256) {
        Evolution evo = _getMonsterEnum(_tokenID);
        uint256 multiplier = monsterData[_tokenID].multiplier;
        return monsterMultiplier[evo][multiplier];
    }

    function _getImage(uint256 _tokenID) public view returns (string memory) {
        Evolution evo = _getMonsterEnum(_tokenID);
        uint256 multiplier = monsterData[_tokenID].multiplier;

        return monsterImage[evo][multiplier];
    }

    function getMonsterEvo(uint256 _tokenID) external view returns (Evolution) {
        return monsterData[_tokenID].evo;
    }

    function getMetadata(
        uint256 _tokenID
    ) external view returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(bytes(_getMetadata(_tokenID)))
                )
            );
    }

    function _getAttributes(
        uint256 _tokenID
    ) internal view returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "[",
                    string(
                        abi.encodePacked(
                            "{",
                            '"trait_type":',
                            '"Evolution",',
                            '"value":"',
                            _getMonsterName(_tokenID),
                            '"},{',
                            '"trait_type":',
                            '"Multiplier",',
                            '"value":"',
                            _getMultiplier(_tokenID),
                            '"}'
                        )
                    ),
                    "]"
                )
            );
    }

    function _getMetadata(
        uint256 _tokenID
    ) public view returns (string memory) {
        return
            string(
                abi.encodePacked(
                    string(
                        abi.encodePacked(
                            "{",
                            '"name":',
                            '"Soltice"',
                            ",",
                            '"description":"',
                            system.desc,
                            '",',
                            '"image":"',
                            _getImage(_tokenID),
                            '",',
                            '"attributes":',
                            _getAttributes(_tokenID),
                            "}"
                        )
                    )
                )
            );
    }
}
