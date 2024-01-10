
import React, { useEffect, useState } from 'react';
import { Loader } from './components/Loader';   
import { LOADER_TIMER } from './constants';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ROUTES } from './routes/routes';

import Genius5 from './pages/genius5';
import Geniuswhite from './pages/geniuswhite';
import Genius9 from './pages/genius9';
import Genius3 from './pages/genius3';
import Genius33 from './pages/genius33';
import Genius4 from './pages/genius4';
import { BaseNameProvider } from './baseNameProvider';
import Creditstext from './pages/creditstext';
import Creditstext2 from './pages/creditstext2';
import Rowy from './pages/rowy';
import TermsOfServices from './pages/termsofservices';
import Contact from './pages/contact';
import  Credit2 from './pages/credit-4-copy-2';
import  Credit3 from './pages/credit-4-copy-3';
import  Credit4 from './pages/credit-4-copy-4';
import  Privacytext from './pages/privacytext';
import  Error from './pages/error';
import Nopage from './pages/nopage';
import Home from './pages/home';
import Home1 from './pages/home1';
import Home2 from './pages/home2';
import Genius5copy from './pages/genius5-copy';
import Genius5copyy from './pages/walletnotconnected';
import Nopage1 from './pages/nopage1';
import Home3 from './pages/home3';
import Home3light from './pages/home3light';
import Analyse from './pages/analyse';
import Analyseerror from './pages/analyseerror';
import Analysis from './pages/analysis';
import Walletnotconnected from './pages/walletnotconnected';
import Swap from './pages/swap';
import Walletconnected from './pages/walletconnected';
import Swap2 from './pages/swap2';
import Swap3 from './pages/swap3';
import Geniusbeige from './pages/geniusbeige';
import Geniusbeige2 from './pages/geniusbeige2';
import MouseMove from './components/mouse-move';
import Geniusbeige3 from './pages/geniusbeige3';
import App1nc from './pages/app1nc';
import App1c from './pages/app1c';
import Finalswapstep2 from './pages/finalswapstep2';
import Finalswapstep3 from './pages/finalswapstep3';
import Dyor from './pages/dyor';
import Finalswapstep22 from './pages/finalswapstep22';
import Buy from './pages/buy';
import Home4 from './pages/home4';
import Help from './pages/help';
import Analyse2 from './pages/analyse2';
import Finalswapstep4 from './pages/finalswapstep4';
import Finalswapstep5 from './pages/finalswapstep5';
import Finalswapstep32 from './pages/finalswapstep32';
import Swapsettings2 from './pages/swapsettings2';
import Pools from './pages/pool';
import Swapswap from './pages/swapswap';
import Swapswap2 from './pages/swapswap2';
import Triangulartreasures from './pages/triangulartreasures';
import Tokenwarning from './pages/tokenwarning';
import Wallet from './pages/wallet';
import Linear1 from './pages/linear1';
import Linear2 from './pages/linear2';
import Sealunseal from './pages/sealunseal';
import Sealunseal2 from './pages/sealunseal2';
import Token from './pages/token';
import Addtoken from './pages/addtoken';
import Remote from './pages/remote';
import Imaginary from './pages/imaginary';
import Noimaginary from './pages/noimaginary';
import Imaginary1 from './pages/imaginary1';
import Noimaginary1 from './pages/noimaginary1';
import Advancedswap from './pages/advancedswap';
import Compareonchain from './pages/compareonchain';
import Comparecrosschain from './pages/comparecrosschain';
import Triangular1 from './pages/triangular1';
import Pair from './pages/pair';
import Encryptdecrypt from './pages/encryptdecrypt';


const BASE_NAME = "/";
function App() {
  
  // const [loader, setLoader] = useState(true);

  //   useEffect(() => {
  //       const timeout = setTimeout(() => {
  //           setLoader(false);
  //       }, LOADER_TIMER)
  //       return () => {
  //           if (timeout) {
  //               clearTimeout(timeout)
  //           }
  //       }
  //   }, [])
  return (
    <>
      {/* <Loader show={loader} /> */}
      <BaseNameProvider value={BASE_NAME}>
        <Router basename={BASE_NAME}>
          <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTES.HOME4} element={<Home4 />} />
            <Route path={ROUTES.CREDITSTEXT} element={<Creditstext />} />
            <Route path={ROUTES.HOME} element={<Home />} />

            <Route path={ROUTES.ROWY} element={<Rowy />} />
            <Route path={ROUTES.TERMSOFSERVICES} element={<TermsOfServices />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.CREDIT2} element={<Credit2 />} />
            <Route path={ROUTES.CREDIT3} element={<Credit3 />} />
            <Route path={ROUTES.CREDIT4} element={<Credit4 />} />
            <Route path={ROUTES.GENIUS5} element={<Genius5 />} />
            <Route path={ROUTES.GENIUSWHITE} element={<Geniuswhite />} />
            <Route path={ROUTES.GENIUS9} element={<Genius9 />} />
            <Route path={ROUTES.GENIUS33} element={<Genius33 />} />
            <Route path={ROUTES.GENIUS4} element={<Genius4 />} />
            <Route path={ROUTES.CREDITSTEXT2} element={<Creditstext2 />} />
            <Route path={ROUTES.PRIVACYTEXT} element={<Privacytext />} />
            <Route path={ROUTES.ERROR} element={<Error />} />
            <Route path={ROUTES.NOPAGE} element={<Nopage />} />
            <Route path={ROUTES.HOME1} element={<Home1 />} />
            <Route path={ROUTES.HOME2} element={<Home2 />} />
            <Route path={ROUTES.GENIUS5COPY} element={<Genius5copy />} />
            <Route path={ROUTES.GENIUS5COPY2} element={<Genius5copyy />} />
            <Route path={ROUTES.NOPAGE1} element={<Nopage1 />} />
            <Route path={ROUTES.HOME3} element={<Home3 />} />
            <Route path={ROUTES.HOME3LIGHT} element={<Home3light />} />
            <Route path={ROUTES.GENIUS3} element={<Genius3 />} />
            <Route path={ROUTES.ANALYSE} element={<Analyse />} />
            <Route path={ROUTES.ANALYSIS} element={<Analysis />} />
            <Route path={ROUTES.WALLETNOTCONNECTED} element={< Walletnotconnected />} />
            <Route path={ROUTES.WALLETCONNECTED} element={< Walletconnected />} />
            <Route path={ROUTES.SWAP} element={< Swap />} />
            <Route path={ROUTES.SWAP2} element={< Swap2 />} />
            <Route path={ROUTES.SWAP3} element={< Swap3 />} />
            <Route path={ROUTES.GENIUSDBEIGE} element={< Geniusbeige />} />
            <Route path={ROUTES.GENIUSDBEIGE2} element={< Geniusbeige2 />} />
            <Route path={ROUTES.GENIUSDBEIGE3} element={< Geniusbeige3 />} />
            <Route path={ROUTES.APP1NC} element={< App1nc />} />
            <Route path={ROUTES.APP1C} element={< App1c />} />
            <Route path={ROUTES.FINALSWAPSTEP2} element={< Finalswapstep2 />} />
            <Route path={ROUTES.FINALSWAPSTEP3} element={< Finalswapstep3 />} />
            <Route path={ROUTES.DYOR} element={< Dyor />} />
            <Route path={ROUTES.FINALSWAPSTEP22} element={< Finalswapstep22 />} />
            <Route path={ROUTES.BUY} element={< Buy />} />
       
            <Route path={ROUTES.HELP} element={<Help />} />
            <Route path={ROUTES.ANALYSE2} element={<Analyse2 />} />
            <Route path={ROUTES.FINALSWAPSTEP4} element={< Finalswapstep4 />} />
            <Route path={ROUTES.FINALSWAPSTEP5} element={< Finalswapstep5 />} />
            <Route path={ROUTES.FINALSWAPSTEP32} element={< Finalswapstep32 />} />
            <Route path={ROUTES.SWAPSETTINGS2} element={< Swapsettings2 />} />
            <Route path={ROUTES.POOLS} element={< Pools />} />
            <Route path={ROUTES.SWAPSWAP} element={< Swapswap />} />
            <Route path={ROUTES.SWAPSWAP2} element={< Swapswap2 />} />
            <Route path={ROUTES.TRIANGULARTREASURES} element={< Triangulartreasures />} />
            <Route path={ROUTES.TOKENWARNING} element={< Tokenwarning />} />
            <Route path={ROUTES.WALLET} element={< Wallet />} />
            <Route path={ROUTES.LINEAR1} element={< Linear1 />} />
            <Route path={ROUTES.LINEAR2} element={< Linear2 />} />
            <Route path={ROUTES.SEALUNSEAL} element={< Sealunseal />} />
            <Route path={ROUTES.SEALUNSEAL2} element={< Sealunseal2 />} />
            <Route path={ROUTES.TOKEN} element={< Token />} />
            <Route path={ROUTES.ADDTOKEN} element={< Addtoken />} />
            <Route path={ROUTES.REMOTE} element={< Remote />} />
            <Route path={ROUTES.IMAGINARY} element={< Imaginary />} />
            <Route path={ROUTES.NOIMAGINARY} element={< Noimaginary />} />
            <Route path={ROUTES.IMAGINARY1} element={< Imaginary1 />} />
            <Route path={ROUTES.NOIMAGINARY1} element={< Noimaginary1 />} />
            <Route path={ROUTES.ADVANCEDSWAP} element={< Advancedswap />} />
            <Route path={ROUTES.COMPAREONCHAIN} element={< Compareonchain />} />
            <Route path={ROUTES.COMPARECROSSCHAIN} element={< Comparecrosschain />} />
            <Route path={ROUTES.TRIANGULAR1} element={< Triangular1 />} />
            <Route path={ROUTES.PAIR} element={< Pair />} />
            <Route path={ROUTES.ENCRYPTDECRYPT} element={< Encryptdecrypt />} />
            <Route path={ROUTES.ANALYSEERROR} element={<Analyseerror />} >

             
            </Route>
          </Routes>
        </Router>
      </BaseNameProvider>

      <MouseMove/>
    </>

  );
}

export default App;
