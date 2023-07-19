// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract JazToken is ERC20 {
    address private owner;

    constructor() ERC20("MyToken", "JAZ") {
        owner = msg.sender;
    }

    modifier ownerOnly() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    function mint(address account, uint256 amount) external ownerOnly {
        _mint(account, amount);
    }

    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}
