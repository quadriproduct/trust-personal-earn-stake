import HomeBody from './components/HomeBody';
import HomeNavbar from './components/HomeNavbar';
import { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import useWalletCheck from './hooks/useWalletCheck';

function App() {
  
  const [ currentAccount, _, actions ] = useWalletCheck();
  
  const navigate = useNavigate();

  const connectWallet = useCallback( async (destination) => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      actions.setCurrentAccount(accounts[0]);
      actions.setWalletAddress(accounts[0]);

      navigate(`/${destination}/dashboard`);

    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <HomeNavbar currentAccount={currentAccount} />
      <HomeBody handleWalletConnect={connectWallet} />
    </>
  )
}

export default App;
