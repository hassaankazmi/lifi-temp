import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@rainbow-me/rainbowkit/styles.css';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import {Chain,ConnectButton,getDefaultWallets,lightTheme,midnightTheme,RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig ,useConfig} from 'wagmi';
import {mainnet,polygon,optimism,arbitrum,base,} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base,],
  [
    alchemyProvider({ apiKey: String(process.env.REACT_APP_ALCHEMY_ID) }),  
  ]
);


const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: '40c451b93164f3d94e983984bab1ce21',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}  theme={lightTheme({accentColor: '#7b3fe4',accentColorForeground: 'white',borderRadius: 'medium',fontStack: 'system',})} coolMode>
      <App  />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

reportWebVitals();
