import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mt-8">
        <section className="flex flex-col w-full md:w-1/2 space-y-4">
          <div className="text-lg">
            <span className="font-bold">This SuiFren is a</span>
            <Badge variant="secondary">CAPY</Badge>
            <span>born on December 21, 2023 in Bermuda{"\n                  "}</span>
          </div>
          <div className="text-muted-foreground">They reside in Kiosk 0x8e30...86c7.</div>
          <div className="border rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="font-semibold">Gen</div>
                <div>1</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold">Cohort</div>
                <div>Luminares</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold">Mixing Limit</div>
                <div>5</div>
              </div>
              <div className="space-y-2">
                <Button variant="outline">View On Explorer</Button>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-bold text-xl mb-4">PROPERTIES</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="font-semibold">SKIN</div>
                <div>Fox</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold">MAIN COLOR</div>
                <div>Bluebird</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold">BACKGROUND</div>
                <div>-</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold">EAR STYLE</div>
                <div>Default</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold">SECONDARY COLOR</div>
                <div>Creme</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold">EXPRESSION</div>
                <div>Happy</div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-bold text-xl mb-4">SuiFren Wardrobe</div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage alt="Superhero Cape" src="/placeholder.svg?height=40&width=40" />
              </Avatar>
              <div className="flex flex-col">
                <div>Superhero Cape</div>
                <div>Back</div>
                <Button size="sm" variant="destructive">
                  REMOVE
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center w-full md:w-1/2">
          <Card className="w-[350px] mr-4">
            <CardContent className="flex justify-center p-0">
              <Image
                alt="SuiFren NFT"
                height="350"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "350/350",
                  objectFit: "cover",
                }}
                width="350"
              />
            </CardContent>
          </Card>
          <div className="flex flex-col space-y-2">
            <Button variant="outline">View on Marketplace</Button>
            <Button variant="outline">Transfer</Button>
            <Button variant="outline">Sell</Button>
          </div>
        </section>
      </div>
    </div>
  )
}