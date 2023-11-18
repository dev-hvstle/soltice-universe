// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract USDT is ERC20Upgradeable {
    function initialize() external initializer {
        __ERC20_init("USDT", "USDT");
    }

    function mint(address _user, uint256 _amount) external {
        _mint(_user, _amount);
    }
}
