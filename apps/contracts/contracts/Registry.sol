// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Registry is OwnableUpgradeable {
    mapping(string => address) addressRegistry;

    function initialize() external initializer {
        __Ownable_init(msg.sender);
    }

    function setToRegistry(
        string memory _name,
        address _address
    ) external onlyOwner {
        addressRegistry[_name] = _address;
    }

    function getAddress(string memory _name) external view returns (address) {
        require(addressRegistry[_name] != address(0), "Registry: Not found");
        return addressRegistry[_name];
    }
}
