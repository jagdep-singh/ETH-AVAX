import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './App.css';

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  useEffect(() => {
    connectMetaMask();
  }, []);

  const connectMetaMask = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log('MetaMask is installed.');

      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText('Wallet Connected');
          getAccountBalance(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log('Please install MetaMask.');
      setErrorMessage('Please install MetaMask browser extension to interact');
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: 'eth_getBalance', params: [account, 'latest'] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    // Reload the page to avoid any errors with chain change mid-use of the application
    window.location.reload();
  };

  // Listen for account changes
  useEffect(() => {
    window.ethereum.on('accountsChanged', accountChangedHandler);
    window.ethereum.on('chainChanged', chainChangedHandler);

    return () => {
      window.ethereum.removeListener('accountsChanged', accountChangedHandler);
      window.ethereum.removeListener('chainChanged', chainChangedHandler);
    };
  }, []);

  return (
    <div className='walletCard'>
      <h4>Connect Metamask</h4>
      <button onClick={connectMetaMask}>{connButtonText}</button>
      <div className='accountDisplay'>
        <h3>Address: {defaultAccount}</h3>
      </div>
      <div className='balanceDisplay'>
        <h3>Balance: {userBalance}</h3>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default WalletCard;
