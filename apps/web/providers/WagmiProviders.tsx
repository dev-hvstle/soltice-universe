"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import {
  connectorsForWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia, bscTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "@wagmi/core/providers/jsonRpc";

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    // alchemyProvider({ apiKey: process.env.API_KEY ?? "" }),
    jsonRpcProvider({
      rpc: (chain) =>
        chain.id === 97
          ? {
              http: `https://bsc-testnet.publicnode.com`,
            }
          : null,
    }),
    jsonRpcProvider({
      rpc: (chain) =>
        chain.id === 11155111
          ? {
              http: `https://eth-sepolia.g.alchemy.com/v2/s-hdjLqITCIC-0yx948QMzzi7v-43Sss`,
            }
          : null,
    }),
    publicProvider(),
  ]
);

const projectId = "blockchaingame";

const connectors = connectorsForWallets([
  {
    groupName: "Other",
    wallets: [metaMaskWallet({ projectId, chains })],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

interface Rainbow {
  children: React.ReactNode;
}

const WagmiProviders = ({ children }: Rainbow) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        modalSize="compact"
        theme={darkTheme({
          accentColor: "#fff",
          accentColorForeground: "#2b3640",
          fontStack: "rounded",
          borderRadius: "medium",
          overlayBlur: "small",
        })}
        chains={chains}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default WagmiProviders;
