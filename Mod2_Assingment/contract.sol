// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Token {
    mapping(address => uint256) public balances;

    event Mint(address indexed account, uint256 amount);
    event Burn(address indexed account, uint256 amount);

    function mint(uint256 amount) external {
        balances[msg.sender] += amount;
        emit Mint(msg.sender, amount);
    }

    function burn(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        emit Burn(msg.sender, amount);
    }
}
