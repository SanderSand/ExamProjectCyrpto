// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CyberToken is ERC20, Ownable {
    constructor() ERC20("CyberToken", "CYBR") Ownable(msg.sender) {
        _mint(msg.sender, 500000 * 10**decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}