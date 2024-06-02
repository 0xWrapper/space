"use client";
import {
    WalletProvider,
    Chain,
    SuiDevnetChain,
    SuiTestnetChain,
    SuiMainnetChain,
    SuietWallet,
    SuiWallet,
    EthosWallet,
    MorphisWallet,
    OneKeyWallet,
    SurfWallet,
    TokenPocketWallet,
} from "@suiet/wallet-kit";
import '@suiet/wallet-kit/style.css';


const SupportedChains: Chain[] = [
    SuiDevnetChain,
    SuiTestnetChain,
    SuiMainnetChain,
];

export default function Providers({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <WalletProvider
            chains={SupportedChains}
            defaultWallets={[
                MorphisWallet,
                SuiWallet,
                SurfWallet,
                SuietWallet,
                EthosWallet,
                TokenPocketWallet,
                OneKeyWallet,
            ]}>
            {children}
        </WalletProvider>
    );
};

