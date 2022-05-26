import HomeBody from './components/HomeBody';
import HomeNavbar from './components/HomeNavbar';
import { ethers } from "ethers";
import React, { useEffect, useState, useCallback } from "react";
import { useWallet } from './store';

function App() {
  const [userConnectWallet, setUserConnectWallet] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");

  const wallet = useWallet(state => state.setWalletAddress);

  const checkIfWalletIsConnected = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have a metamask");
        return;
      } else {
        console.log("We have the ethereum object ", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
        wallet.setWalletAddress()
      } else {
        console.log("No authorized account found");
      }
    } catch(e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);  
      setCurrentAccount(accounts[0]);

    } catch (e) {
      console.error(e);
    }
  }, []);


  return (
    <>
      <HomeNavbar showConnectWallet={userConnectWallet} currentAccount={currentAccount} connectWallet={connectWallet} />
      <HomeBody showConnectWallet={userConnectWallet} currentAccount={currentAccount} />
    </>
  )
}

export default App
