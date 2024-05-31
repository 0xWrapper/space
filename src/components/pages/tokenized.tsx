import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
    return (
        <Tabs key="1" className="w-full" defaultValue="tokenInfo">
            <TabsList className="flex w-full border-b border-gray-200 dark:border-gray-800">
                <TabsTrigger value="tokenInfo">Token Information</TabsTrigger>
                <TabsTrigger value="tokenOps">Token Operations</TabsTrigger>
            </TabsList>
            <TabsContent className="p-6" value="tokenInfo">
                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Wrapper Selection</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <Select>
                                <SelectTrigger className="w-full overflow-auto">
                                    <SelectValue placeholder="Select a wrapper" />
                                </SelectTrigger>
                                <SelectContent>
                                    <div className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        <Image
                                            alt="Wrapper Thumbnail"
                                            className="rounded-lg"
                                            height="100"
                                            src="/placeholder.svg"
                                            style={{
                                                aspectRatio: "100/100",
                                                objectFit: "cover",
                                            }}
                                            width="100"
                                        />
                                        <div className="text-center">
                                            <h3 className="text-lg font-medium">Wrapper 1</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Description of Wrapper 1</p>
                                            <div className="mt-2">
                                                <Badge className="bg-green-500 text-white" variant="outline">
                                                    Tokenized
                                                </Badge>
                                            </div>
                                        </div>
                                        <SelectItem value="wrapper1">Select</SelectItem>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        <Image
                                            alt="Wrapper Thumbnail"
                                            className="rounded-lg"
                                            height="100"
                                            src="/placeholder.svg"
                                            style={{
                                                aspectRatio: "100/100",
                                                objectFit: "cover",
                                            }}
                                            width="100"
                                        />
                                        <div className="text-center">
                                            <h3 className="text-lg font-medium">Wrapper 2</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Description of Wrapper 2</p>
                                            <div className="mt-2">
                                                <Badge className="bg-red-500 text-white" variant="outline">
                                                    Not Tokenized
                                                </Badge>
                                            </div>
                                        </div>
                                        <SelectItem value="wrapper2">Select</SelectItem>
                                    </div>

                                    <div className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        <Image
                                            alt="Wrapper Thumbnail"
                                            className="rounded-lg"
                                            height="100"
                                            src="/placeholder.svg"
                                            style={{
                                                aspectRatio: "100/100",
                                                objectFit: "cover",
                                            }}
                                            width="100"
                                        />
                                        <div className="text-center">
                                            <h3 className="text-lg font-medium">Wrapper 2</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Description of Wrapper 2</p>
                                            <div className="mt-2">
                                                <Badge className="bg-red-500 text-white" variant="outline">
                                                    Not Tokenized
                                                </Badge>
                                            </div>
                                        </div>
                                        <SelectItem value="wrapper2">Select</SelectItem>
                                    </div>

                                    <div className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        <Image
                                            alt="Wrapper Thumbnail"
                                            className="rounded-lg"
                                            height="100"
                                            src="/placeholder.svg"
                                            style={{
                                                aspectRatio: "100/100",
                                                objectFit: "cover",
                                            }}
                                            width="100"
                                        />
                                        <div className="text-center">
                                            <h3 className="text-lg font-medium">Wrapper 2</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Description of Wrapper 2</p>
                                            <div className="mt-2">
                                                <Badge className="bg-red-500 text-white" variant="outline">
                                                    Not Tokenized
                                                </Badge>
                                            </div>
                                        </div>
                                        <SelectItem value="wrapper2">Select</SelectItem>
                                    </div>
                                </SelectContent>
                            </Select>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Token Information</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="tokenName">Token Name</Label>
                                    <Input id="tokenName" placeholder="Enter token name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="tokenSymbol">Token Symbol</Label>
                                    <Input id="tokenSymbol" placeholder="Enter token symbol" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="totalSupply">Total Supply</Label>
                                    <Input id="totalSupply" placeholder="Enter total supply" type="number" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="tokenImage">Token Image</Label>
                                    <Input id="tokenImage" type="file" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="tokenDescription">Description</Label>
                                <Textarea id="tokenDescription" placeholder="Enter token description" />
                            </div>
                            <Button className="w-full">Publish</Button>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
            <TabsContent className="p-6" value="tokenOps">
                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Token Operations</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs className="w-full" defaultValue="lockNFT">
                                <TabsList className="flex w-full border-b border-gray-200 dark:border-gray-800">
                                    <TabsTrigger value="lockNFT">Lock NFT</TabsTrigger>
                                    <TabsTrigger value="unlockNFT">Unlock NFT</TabsTrigger>
                                    <TabsTrigger value="mintTokens">Mint Tokens</TabsTrigger>
                                    <TabsTrigger value="burnTokens">Burn Tokens</TabsTrigger>
                                    <TabsTrigger value="transferTokens">Transfer Tokens</TabsTrigger>
                                </TabsList>
                                <TabsContent className="p-4" value="lockNFT">
                                    <div className="grid gap-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            <div className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                                <Image
                                                    alt="NFT Thumbnail"
                                                    className="rounded-lg"
                                                    height="100"
                                                    src="/placeholder.svg"
                                                    style={{
                                                        aspectRatio: "100/100",
                                                        objectFit: "cover",
                                                    }}
                                                    width="100"
                                                />
                                                <div className="text-center">
                                                    <h3 className="text-lg font-medium">NFT 1</h3>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Description of NFT 1</p>
                                                </div>
                                                <Button size="sm">Lock</Button>
                                            </div>
                                            <div className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                                <Image
                                                    alt="NFT Thumbnail"
                                                    className="rounded-lg"
                                                    height="100"
                                                    src="/placeholder.svg"
                                                    style={{
                                                        aspectRatio: "100/100",
                                                        objectFit: "cover",
                                                    }}
                                                    width="100"
                                                />
                                                <div className="text-center">
                                                    <h3 className="text-lg font-medium">NFT 2</h3>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Description of NFT 2</p>
                                                </div>
                                                <Button size="sm">Lock</Button>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent className="p-4" value="unlockNFT">
                                    <div className="grid gap-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            <div className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                                <Image
                                                    alt="Locked NFT Thumbnail"
                                                    className="rounded-lg"
                                                    height="100"
                                                    src="/placeholder.svg"
                                                    style={{
                                                        aspectRatio: "100/100",
                                                        objectFit: "cover",
                                                    }}
                                                    width="100"
                                                />
                                                <div className="text-center">
                                                    <h3 className="text-lg font-medium">Locked NFT 1</h3>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Description of Locked NFT 1</p>
                                                </div>
                                                <Button size="sm">Unlock</Button>
                                            </div>
                                            <div className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                                <Image
                                                    alt="Locked NFT Thumbnail"
                                                    className="rounded-lg"
                                                    height="100"
                                                    src="/placeholder.svg"
                                                    style={{
                                                        aspectRatio: "100/100",
                                                        objectFit: "cover",
                                                    }}
                                                    width="100"
                                                />
                                                <div className="text-center">
                                                    <h3 className="text-lg font-medium">Locked NFT 2</h3>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Description of Locked NFT 2</p>
                                                </div>
                                                <Button size="sm">Unlock</Button>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent className="p-4" value="mintTokens">
                                    <div className="grid gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="mintAmount">Amount to Mint</Label>
                                            <Input id="mintAmount" placeholder="Enter amount to mint" type="number" />
                                        </div>
                                        <Button>Mint Tokens</Button>
                                    </div>
                                </TabsContent>
                                <TabsContent className="p-4" value="burnTokens">
                                    <div className="grid gap-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-lg font-medium">Current Holdings</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Token Name: Example Token</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Holdings: 1000</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="burnAmount">Amount to Burn</Label>
                                            <Input id="burnAmount" placeholder="Enter amount to burn" type="number" />
                                        </div>
                                        <Button>Burn Tokens</Button>
                                    </div>
                                </TabsContent>
                                <TabsContent className="p-4" value="transferTokens">
                                    <div className="grid gap-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-lg font-medium">Current Holdings</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Token Name: Example Token</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Holdings: 1000</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="transferAddress">Recipient Address</Label>
                                            <Input id="transferAddress" placeholder="Enter recipient address" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="transferAmount">Amount to Transfer</Label>
                                            <Input id="transferAmount" placeholder="Enter amount to transfer" type="number" />
                                        </div>
                                        <Button>Transfer Tokens</Button>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
        </Tabs>
    )
}