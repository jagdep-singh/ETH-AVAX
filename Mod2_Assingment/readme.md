# Simple Smart Contract With a Simple Functioning FrontEnd

This repository contains code samples for a token minting and burning application. It includes the following files:

- `App.css`: The CSS file that provides styles for the user interface of the application.
- `App.js`: The main React component that implements the front-end logic and user interface.
- `token.sol`: The Solidity smart contract that represents the token and includes minting and burning functionality.
- `token.json`: The JSON file that contains the ABI (Application Binary Interface) and deployment information for the token contract.

## Prerequisites

To run the application and interact with the token contract, you will need the following:

- [Node.js](https://nodejs.org) installed on your machine.
- A compatible Ethereum wallet, such as [Metamask](https://metamask.io), set up in your browser.

## Getting Started

1. Install and start React local host
  run:
   - `npx create-react-app your-app-name`
   - `cd your-app-name`
   - `npm start`
2. Access the application in your browser at `http://localhost:3000`.
3. Add the token.json into your src file.
4. Replace your App.js and App.css file with the one here.

## Usage

- Connect your Ethereum wallet to the application by clicking the "Connect Wallet" button.
- Once connected, you can mint new tokens by entering an amount in the "Mint Amount" field and clicking the "Mint" button.
- You can also burn tokens by entering an amount in the "Burn Amount" field and clicking the "Burn" button.
- To fetch the balance of your connected account, click the "Fetch Balance" button.
- The balance will be displayed below the buttons.

## Smart Contract

The `token.sol` file contains a basic Solidity smart contract that represents a token. It includes functions for minting and burning tokens. The contract keeps track of token balances using a mapping.

## License

This code is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.


