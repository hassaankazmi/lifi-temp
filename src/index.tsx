import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@rainbow-me/rainbowkit/styles.css';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import {Chain,ConnectButton,getDefaultWallets,lightTheme,midnightTheme,RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig ,useConfig} from 'wagmi';
import {mainnet,polygon,optimism,arbitrum,base,sepolia,avalanche,bsc,zkSync,polygonZkEvm,linea,gnosis,fantom,moonriver,moonbeam,boba,aurora,fuse} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// Congigure all chains that are require also set manually icon of some chains

const { chains, publicClient } = configureChains(
  [ 
    
    {
      ...mainnet,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ethereum.svg'
    },
    {
      ...polygon,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/polygon.svg'

    },
    {
      ...optimism,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/optimism.svg'

    },
    {
      ...arbitrum,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/arbitrum.svg'

    },
    {
      ...base,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/base.svg'

    },
    // {
    //   ...sepolia,
    //   iconUrl:''

    // },
    {
      ...avalanche,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/avalanche.svg'

    },
    {
      ...bsc,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bsc.svg'

    },
    {
      ...zkSync,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/zksync.svg'
      
    },
    {
      ...aurora,
      iconUrl: 'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/aurora.png',
    },
    {
      ...boba,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/boba.png'
    },
    {
      ...fuse,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fuse.svg'
    },
    {
      ...moonbeam,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/moonbeam.svg'
    },
    {
      ...moonriver,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/moonriver.svg',
    },
    {
      ...fantom,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fantom.svg'
    }, {
      ...gnosis,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/gnosis.svg',
    }, {
      ...linea,
      iconUrl:'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/linea.svg',
    }
  ],
  // [
  //   alchemyProvider({ apiKey: String(process.env.REACT_APP_ALCHEMY_ID) }),
  // ]
  [publicProvider()]
);

// END

// calling getdedault function to get chain from wagmi/chains and passing it into the configuration

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: '40c451b93164f3d94e983984bab1ce21',
  chains
});

// END

// calling createConfig function that pass connectors and publicclient  to make connect with blockchain

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

// END


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

