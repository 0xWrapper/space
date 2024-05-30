"use client";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { UndoIcon, WalletIcon } from "lucide-react";
import { ConnectButton, ErrorCode } from "@suiet/wallet-kit";
import { Button } from "@/components/ui/button";
import "./suiet-wallet-kit-custom.css"

export default function WalletDialog() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="rounded-full" size="icon" variant="ghost">
                    <WalletIcon />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogCancel asChild>
                    <Button className="rounded-full w-12" variant="ghost">
                        <UndoIcon />
                    </Button>
                </AlertDialogCancel>
                <ConnectButton
                    label="Connect"
                    onConnectError={(error) => {
                        if (
                            error.code ===
                            ErrorCode.WALLET__CONNECT_ERROR__USER_REJECTED
                        ) {
                            console.warn(
                                "user rejected the connection to " + error.details?.wallet
                            )
                        } else {
                            console.warn("unknown connect error: ", error)
                        }
                    }}
                >
                    Connect
                </ConnectButton>
            </AlertDialogContent>
        </AlertDialog>
    )
}