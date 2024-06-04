import { useState } from 'react';
import { shortenAddress } from "@/lib/utils";
import { CopyIcon, CheckIcon } from "lucide-react";

export default function CopyAddress({ address }: { address: string }) {
    const [copied, setCopied] = useState(false);

    const handleIdCopy = () => {
        navigator.clipboard.writeText(address).then(() => {
            console.log('Inception Wrapper Id copied to clipboard');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="flex items-center pt-2">
            <span className="text-xs text-muted-foreground font-mono tracking-widest">
                {shortenAddress(address)}
            </span>
            {" "}
            {copied ? (
                <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
            ) : (
                <CopyIcon 
                    className="mr-2 h-4 w-4 opacity-70 cursor-pointer" 
                    onClick={handleIdCopy} 
                />
            )}
        </div>
    );
}
