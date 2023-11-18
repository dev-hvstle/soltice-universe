// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./interface/IMonsters.sol";
import "./Registry.sol";
import "./MonstersMeta.sol";

contract Monsters is
    IMonsters,
    ERC721Upgradeable,
    ERC721EnumerableUpgradeable,
    ERC721BurnableUpgradeable,
    OwnableUpgradeable
{
    /**
     * local variable
     */
    MintSettings public mintSettings;
    Monster public monster;
    Registry public registry;
    // MonstersMeta public meta;

    /**
     * Modifiers
     */
    modifier mintable(uint256 _qty) {
        require(
            totalSupply() + _qty <=
                (mintSettings.round + 1) * mintSettings.supplyPerRound,
            "Monsters: Round supply not enough"
        );
        // require(
        //     _amount >= (mintSettings.price * _qty),
        //     "Monsters: Amount not enough"
        // );
        require(
            block.timestamp >=
                mintSettings.lastMintedAt + mintSettings.cooldown,
            "Monsters: Cooldown not reached"
        );
        _;
        if (
            totalSupply() + _qty ==
            (mintSettings.round + 1) * mintSettings.supplyPerRound
        ) {
            mintSettings.round++;
            mintSettings.lastMintedAt = block.timestamp;
        }
    }

    function initialize() external initializer {
        __ERC721_init("Monsters", "MST");
        __Ownable_init(msg.sender);

        mintSettings = MintSettings({
            round: 0,
            supplyPerRound: 10_000,
            cooldown: 7 days,
            lastMintedAt: 0,
            price: 20 ether
        });
        monster = Monster({transferCooldown: 1 days});
    }

    function mint(uint256 _qty) external mintable(_qty) {
        // require(
        //     _amount >= (mintSettings.price * _qty),
        //     "Monsters: Amount not enough"
        // );
        ERC20Upgradeable usdt = ERC20Upgradeable(registry.getAddress("USDT"));
        usdt.transferFrom(msg.sender, address(this), mintSettings.price * _qty);
        for (uint256 index = 0; index < _qty; index++) {
            _mint(msg.sender, totalSupply() + 1);
        }
    }

    function evolve(uint256[] memory _tokenIDs) external {
        MonstersMeta meta = MonstersMeta(registry.getAddress("MonstersMeta"));

        meta.evolveMonster(msg.sender, _tokenIDs);
        burn(_tokenIDs);
    }

    function burn(uint256[] memory _tokenIDs) public {
        for (uint256 index = 0; index < _tokenIDs.length; index++) {
            _requireOwned(_tokenIDs[index]);
            _burn(_tokenIDs[index]);
        }
    }

    function setRegistry(Registry _registry) external onlyOwner {
        registry = _registry;
    }

    function setMintSettings(
        MintSettings memory _mintSettings
    ) external onlyOwner {
        mintSettings = _mintSettings;
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        _requireOwned(tokenId);
        MonstersMeta meta = MonstersMeta(registry.getAddress("MonstersMeta"));
        return meta.getMetadata(tokenId);
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override(ERC721Upgradeable, IERC721) {
        MonstersMeta meta = MonstersMeta(registry.getAddress("MonstersMeta"));
        if (from != address(0)) {
            meta.setCooldown(
                tokenId,
                (block.timestamp + monster.transferCooldown)
            );
        }

        if (to == address(0)) {
            revert ERC721InvalidReceiver(address(0));
        }
        // Setting an "auth" arguments enables the `_isAuthorized` check which verifies that the token exists
        // (from != 0). Therefore, it is not needed to verify that the return value is not 0 here.
        address previousOwner = _update(to, tokenId, _msgSender());
        if (previousOwner != from) {
            revert ERC721IncorrectOwner(from, tokenId, previousOwner);
        }
    }

    function _update(
        address to,
        uint256 tokenId,
        address auth
    )
        internal
        virtual
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(
        address account,
        uint128 amount
    )
        internal
        virtual
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
    {
        if (amount > 0) {
            revert ERC721EnumerableForbiddenBatchMint();
        }
        super._increaseBalance(account, amount);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        virtual
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
