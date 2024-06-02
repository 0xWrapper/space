import { Progress } from "@/components/ui/progress"
import InceptionWrapperCard from "../element/inception-wrapper";
export default function Page() {
    return (
        <div className="bg-gradient-to-r from-purple-100 via-pink-200 to-red-200 flex items-center justify-center">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">✨Launch Event✨: Wrap Your Wrapper & Earn Token Rewards</h1>
                    <div className="flex items-center space-x-4">
                        <Progress className="w-full" value={30} />
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h2>
                        <p className="text-gray-700 mb-2">
                            🎉 Join our Wrapper Wrap event to celebrate the grand launch of the Wrapper Protocol! 🎉
                        </p>
                        <p className="text-gray-700 mb-2">
                            📦 Wrap your exclusive Wrapper and win generous rewards! 🎁✨
                        </p>
                        <p className="text-gray-700 mb-2">
                            🏆 Participate in the event for a chance to receive exclusive token drops💰
                        </p>
                        <p className="text-gray-700 mb-2">
                            🎢 And experience the latest features of the protocol. 🚀
                        </p>
                        <p className="text-gray-700 mb-6">
                            🎊 Join us now! 💥
                        </p>
                        <div className="space-y-4">
                            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                                <dt className="text-sm font-medium truncate">Wrappers Created Today</dt>
                                <dd className="mt-1 text-3xl font-semibold">25</dd>
                            </div>
                            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                                <dt className="text-sm font-medium truncate">Total Wrappers Created</dt>
                                <dd className="mt-1 text-3xl font-semibold">1,200</dd>
                            </div>
                            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                                <dt className="text-sm font-medium truncate">Total Active Accounts</dt>
                                <dd className="mt-1 text-3xl font-semibold">1,350 </dd>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <InceptionWrapperCard />
                    </div>
                </div>
            </div>
        </div>
    )
}