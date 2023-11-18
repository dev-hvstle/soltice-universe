// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./interface/ITimePotion.sol";

contract TimePotion is ITimePotion, ERC20Upgradeable, OwnableUpgradeable {
    Tax public tax;
    uint256 public maxBuy;
    address[] public whitelisted;

    mapping(address => bool) public isSupportedDex;

    function initialize() external initializer {
        __Ownable_init(msg.sender);
        __ERC20_init("TimePotion", "TPN");

        maxBuy = 500;

        whitelisted = new address[](3);
        whitelisted[0] = msg.sender;
        whitelisted[1] = address(0);

        _mint(msg.sender, 100_000_000 ether);
    }

    function mint(address _user, uint256 _amount) external {
        _mint(_user, _amount);
    }

    function _deductTax(
        uint256 _amount
    ) internal view returns (uint256, uint256) {
        // _amount =
    }

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) public virtual override returns (bool) {
        address spender = msg.sender;

        if (!isSupportedDex[msg.sender] && tax.isOn) {
            uint256 teamTax = (value * tax.team) / 100;
            uint256 devTax = (value * tax.dev) / 100;
            uint256 liquidityTax = (value * tax.liquidity) / 100;
            uint256 totalTax = teamTax + devTax + liquidityTax;

            _transfer(from, whitelisted[0], teamTax);
            _transfer(from, whitelisted[1], devTax);
            _transfer(from, whitelisted[2], liquidityTax);
            value -= totalTax;
        }

        _spendAllowance(from, spender, value);
        _transfer(from, to, value);
        return true;
    }

    function setSupportDex(address _dex, bool _support) external onlyOwner {
        isSupportedDex[_dex] = _support;
    }

    function setTax(
        uint256 _team,
        uint256 _dev,
        uint256 _liquidity
    ) external onlyOwner {
        tax.team = _team;
        tax.dev = _dev;
        tax.liquidity = _liquidity;
    }

    function setToggleTax() external onlyOwner {
        tax.isOn = !tax.isOn;
    }
}
