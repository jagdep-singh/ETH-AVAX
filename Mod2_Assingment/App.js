import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import TokenContract from './token.json';
import './App.css';

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [tokenContract, setTokenContract] = useState(null);
  const [balance, setBalance] = useState(0);
  const [connectedAccount, setConnectedAccount] = useState('');
  const [mintAmount, setMintAmount] = useState('');
  const [burnAmount, setBurnAmount] = useState('');

  useEffect(() => {
    // Connect to the wallet
    const connectWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
      }
    };
    connectWeb3();
  }, []);

  useEffect(() => {
    // contract details
    const loadTokenContract = async () => {
      if (web3) {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = TokenContract.networks[networkId];
        if (deployedNetwork) {
          const instance = new web3.eth.Contract(TokenContract.abi, deployedNetwork.address);
          setTokenContract(instance);
        } else {
          console.error('Token contract not deployed on the current network');
        }
      }
    };
    loadTokenContract();
  }, [web3]);
  
  const connectWallet = async () => {
    if (web3) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setConnectedAccount(accounts[0]);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    }
  };

  const handleMintInputChange = (event) => {
    setMintAmount(event.target.value);
  };

  const handleBurnInputChange = (event) => {
    setBurnAmount(event.target.value);
  };

  const mintTokens = async () => {
    if (tokenContract && mintAmount && connectedAccount) {
      try {
        const gas = 200000; // setting gass limit
        await tokenContract.methods.mint(mintAmount).send({ from: connectedAccount, gas });
        setMintAmount('');
      } catch (error) {
        console.error('Failed to mint tokens:', error);
      }
    }
  };
  
  const burnTokens = async () => {
    if (tokenContract && burnAmount && connectedAccount) {
      try {
        const gas = 200000; // setting gas limit
        await tokenContract.methods.burn(burnAmount).send({ from: connectedAccount, gas });
        setBurnAmount('');
      } catch (error) {
        console.error('Failed to burn tokens:', error);
      }
    }
  };
  

  const fetchBalance = async () => {
    if (tokenContract && connectedAccount) {
      const balance = await tokenContract.methods.balances(connectedAccount).call();
      setBalance(balance);
    }
  };

  return (
    <body>
      <div className="content">
      <h1 className="title">Token Minting and Burning</h1>
      {connectedAccount ? (
        <>
          <p className="account">Connected Account: {connectedAccount}</p>
          <div className="input-section">
            <label className="input-label">Mint Amount:</label>
            <input
              className="input-field"
              type="number"
              value={mintAmount}
              onChange={handleMintInputChange}
            />
            <button className="action-button" onClick={mintTokens}>Mint</button>
          </div>
          <div className="input-section">
            <label className="input-label">Burn Amount:</label>
            <input
              className="input-field"
              type="number"
              value={burnAmount}
              onChange={handleBurnInputChange}
            />
            <button className="action-button" onClick={burnTokens}>Burn</button>
          </div>
          <button className="fetch-button" onClick={fetchBalance}>Fetch Balance</button>
          <h2 className="balance">Balance: {balance}</h2>
        </>
      ) : (
        <button className="connect-button" onClick={connectWallet}>Connect Wallet</button>
      )}
      </div>
    </body>
  );
};

export default App;
