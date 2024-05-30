"use client";
import {
    WalletProvider,
    Chain,
    SuiDevnetChain,
    SuiTestnetChain,
    SuiMainnetChain,
    DefaultChains,
} from "@suiet/wallet-kit";
import '@suiet/wallet-kit/style.css';


const SupportedChains: Chain[] = [
    SuiDevnetChain,
    SuiTestnetChain,
    SuiMainnetChain,
];

export default function Providers({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <WalletProvider chains={SupportedChains}>
            {children}
        </WalletProvider>
    );
};
