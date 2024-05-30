"use client";
import { ScrollArea } from "@/components/ui/scroll-area"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { useWallet } from '@suiet/wallet-kit';
import { useEffect } from "react"
import { getOwnedObjects } from "@/lib/apis";
import OwnedObjects from "../element/owner-object";

export default function Page() {
    const wallet = useWallet()

    useEffect(() => {
        if (!wallet.connected) return;
        getOwnedObjects({
            owner: wallet.account?.address as string,
            matchType: 'MatchNone',
            structType: "0x2::coin::Coin",
            showContent: true,
            showType: true,
        })
    }, [wallet.connected])

    return (
        <div key="2" className="flex h-screen">
            <ScrollArea className="w-1/4 bg-white p-4 space-y-6">
                <OwnedObjects />
            </ScrollArea>
            <div className="w-3/4 p-8 flex flex-col">

                <div className="flex items-center space-x-4 mb-4">
                    <Select>
                        <SelectTrigger aria-label="NFT Type" id="nft-type">
                            <SelectValue placeholder="NFT" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="type1">Type 1</SelectItem>
                            <SelectItem value="type2">Type 2</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input placeholder="input wrapper alias" />
                    <Button variant="secondary">Search</Button>
                </div>

                <div className="flex-1 overflow-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                        <Card className="w-full bg-white">
                            <CardHeader>
                                <CardTitle>New Wrapper</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center">Create a new wrapper</p>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button variant="secondary">Create</Button>
                            </CardFooter>
                        </Card>

                        <Card className="w-full bg-white">
                            <CardHeader>
                                <CardTitle>Nft Wrapper</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>items:aa nft , bb nft</p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="secondary">set alias</Button>
                                <Button variant="secondary">split</Button>
                            </CardFooter>
                        </Card>

                        <Card className="w-full bg-white">
                            <CardHeader>
                                <CardTitle>Nft Wrapper</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>items:aa nft , bb nft</p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="secondary">set alias</Button>
                                <Button variant="secondary">split</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}