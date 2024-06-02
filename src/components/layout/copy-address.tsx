import { shortenAddress } from "@/lib/utils";
import { CopyIcon } from "lucide-react";

export default function CopyAddress({ address }: { address: string }) {
    const handleIdCopy = () => {
        navigator.clipboard.writeText(address).then(() => {
            console.log('Inception Wrapper Id copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };
    return (
        <div className="flex items-center pt-2">
            <span className="text-xs text-muted-foreground">
                {shortenAddress(address)}
            </span>
            {" "}
            <CopyIcon className="mr-2 h-4 w-4 opacity-70" onClick={handleIdCopy} />
        </div>
    )
}