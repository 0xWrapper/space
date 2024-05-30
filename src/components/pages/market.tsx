import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { SelectValue, SelectTrigger, Select } from "@/components/ui/select"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SVGProps } from "react"

export default function Page() {
  return (
    <div className="bg-white p-6">
      <section className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold">VAULT</h1>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">SMB #3719</span>
            <Select>
              <SelectTrigger id="vault-select">
                <SelectValue placeholder="SMB3719" />
              </SelectTrigger>
            </Select>
          </div>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">MID PRICE</span>
              <InfoIcon className="h-4 w-4 text-gray-400" />
            </div>
            <span className="font-bold">0.050 SOL</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">LAST PRICE</span>
              <InfoIcon className="h-4 w-4 text-gray-400" />
            </div>
            <span className="font-bold">0.047 SOL</span>
          </div>
          <div className="space-y-1">
            <span className="text-gray-600">TOTAL SUPPLY</span>
            <span className="font-bold">3,000</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">VALUATION</span>
              <InfoIcon className="h-4 w-4 text-gray-400" />
            </div>
            <span className="font-bold">141.00 SOL</span>
          </div>
          <div className="space-y-1">
            <span className="text-gray-600">ALL TIME VOLUME</span>
            <span className="font-bold">4.63 SOL</span>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Tabs>
            <TabsList>
              <TabsTrigger className="w-full" value="buy">
                Buy
              </TabsTrigger>
              <TabsTrigger className="w-full" value="sell">
                Sell
              </TabsTrigger>
            </TabsList>
            <TabsContent className="p-4 border rounded-md" value="buy">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="buy-price">Price</Label>
                    <Input id="buy-price" placeholder="0.053" />
                  </div>
                  <div>
                    <Label htmlFor="buy-quantity">Quantity</Label>
                    <Input id="buy-quantity" placeholder="1" />
                  </div>
                </div>
                <div>
                  <span className="text-gray-600">TOTAL ORDER VALUE:</span>
                  <span className="font-bold">0.0531 SOL</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">Available SMB3719 Tokens:</span>
                    <span className="font-bold">40</span>
                  </div>
                  <div>
                    <span className="text-gray-600">SOL Balance:</span>
                    <span className="font-bold">2.9011</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">Unsettled SMB3719 Tokens:</span>
                    <span className="font-bold">0</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Unsettled SOL Balance:</span>
                    <span className="font-bold">0.0000</span>
                  </div>
                </div>
                <Button className="w-full">Buy Now</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">ASK PRICE (SOL)</span>
            <span className="text-gray-600">QUANTITY (SMB3719)</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold">0.0580</span>
              <div className="bg-red-500 h-2 w-24 rounded-md" />
              <span className="font-bold">30</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">0.0570</span>
              <div className="bg-red-500 h-2 w-20 rounded-md" />
              <span className="font-bold">7</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">0.0550</span>
              <div className="bg-red-500 h-2 w-16 rounded-md" />
              <span className="font-bold">11</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">0.0540</span>
              <div className="bg-red-500 h-2 w-12 rounded-md" />
              <span className="font-bold">10</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">0.0530</span>
              <div className="bg-red-500 h-2 w-8 rounded-md" />
              <span className="font-bold">6</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">BID PRICE (SOL)</span>
            <span className="text-gray-600">QUANTITY (SMB3719)</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold">0.0470</span>
              <div className="bg-green-500 h-2 w-8 rounded-md" />
              <span className="font-bold">2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">0.0455</span>
              <div className="bg-green-500 h-2 w-12 rounded-md" />
              <span className="font-bold">5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">0.0451</span>
              <div className="bg-green-500 h-2 w-8 rounded-md" />
              <span className="font-bold">2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">0.0401</span>
              <div className="bg-green-500 h-2 w-24 rounded-md" />
              <span className="font-bold">30</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">0.0352</span>
              <div className="bg-green-500 h-2 w-4 rounded-md" />
              <span className="font-bold">1</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}