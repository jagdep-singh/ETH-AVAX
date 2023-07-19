# JazToken

JazToken is an ERC20 token smart contract implemented in Solidity. It provides basic functionalities of token minting, transfer, and burning. The contract extends the OpenZeppelin ERC20 implementation and adds additional owner-only functionality.

### Prerequisites

To deploy and interact with the JazToken contract, you'll need the following:

- An Ethereum development environment (such as Remix or Truffle)
- An Ethereum account and access to a testnet or the mainnet
- Basic knowledge of Solidity and smart contracts

### Usage

Once the JazToken contract is deployed, you can use the following functions:

- mint(address account, uint256 amount): Mints a specified amount of tokens and assigns them to the specified account. Only the contract owner can call this function.
- transfer(address recipient, uint256 amount): Transfers a specified amount of tokens from the sender's account to the recipient's account.
- burn(uint256 amount): Burns a specified amount of tokens from the caller's account.

### License
- This project is licensed under the MIT License - see the LICENSE file for details.
