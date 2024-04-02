import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Home from "./Home";
import "./App.css";
import { useState, useEffect } from "react";
import ShowFeed from "./showfeed";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [currentAccount, setCurrentAccount] = useState('');
  const [correctNetwork, setCorrectNetwork] = useState(false);

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }
      let chainId = await ethereum.request({ method: 'eth_chainId'})
      console.log('Connected to chain:' + chainId)

      const GoerliChainId = '0xaa36a7'

      if (chainId !== GoerliChainId) {
        alert('You are not connected to the Rinkeby Testnet!')
        return
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Found account', accounts[0])
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }
  }

  // Checks if wallet is connected to the correct network
  const checkCorrectNetwork = async () => {
    const { ethereum } = window
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + chainId)

    const SepoliaChainId = '0xaa36a7'

    if (chainId !== SepoliaChainId) {
      setCorrectNetwork(false)
    } else {
      setCorrectNetwork(true)
    }
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    connectWallet();
    checkCorrectNetwork();
  });

  function Content() {
    return (
      <div style={{display:"flex"}}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    );
  }

  return (
    // BEM
    <Router>
      <div>
        {currentAccount === '' ? (
          <button
            className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        ) : correctNetwork ? (
          <Routes>
            {/* Define Route for ShowFeed */}
            <Route path="/showfeed" element={<ShowFeed />} />
            {/* Default Route for rendering Sidebar, Feed, and Widgets */}
            <Route path="/" element={<Content />} />
          </Routes>
        ) : (
          <div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
            <div>----------------------------------------</div>
            <div>Please connect to the Rinkeby Testnet</div>
            <div>and reload the page</div>
            <div>----------------------------------------</div>
          </div>
        )}
      </div>
    </Router>

  );
}

export default App;
