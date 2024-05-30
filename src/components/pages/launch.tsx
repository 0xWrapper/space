import { LaunchBar } from "@/components/element/category-bar"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function Page() {
    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Mint NFT & Earn Token Rewards</h1>
                <div className="flex items-center space-x-4">
                    <Progress className="w-full" value={30} />
                    <LaunchBar/>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h2>
                    <p className="text-gray-700 mb-6">
                        Celebrate Children's Day by participating in our special NFT minting event. Mint your unique NFTs and
                        contribute to the token pool for a chance to earn token drops!
                    </p>
                    <div className="space-y-4">
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium truncate">NFTs Created Today</dt>
                            <dd className="mt-1 text-3xl font-semibold">25</dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium truncate">Total NFTs Created</dt>
                            <dd className="mt-1 text-3xl font-semibold">1,200</dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium truncate">Gas Consumed</dt>
                            <dd className="mt-1 text-3xl font-semibold">350 ETH</dd>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        alt="NFT Display"
                        className="rounded-lg"
                        height="300"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "300/300",
                            objectFit: "cover",
                        }}
                        width="300"
                    />
                </div>
            </div>
        </div>
    )
}