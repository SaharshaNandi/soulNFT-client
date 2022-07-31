import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import '../service/firebase';
// import { AuthContextProvider } from "../context/AuthContext";
import {MoralisProvider} from "react-moralis";
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider appId="wOt1Qdv1urIipJaBS3d7bw5HEeZT9BMYUaH8SQKz" 
    serverUrl = "https://rozuwmtdt1sh.usemoralis.com:2053/server">
          <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp
