import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { TwitterLink, SiteLogoLink, GithubLink } from "@/components/layout/site-links"
import { MenuIcon } from "@/components/layout/logo"
import WalletDialog from "./wallet-diago";
import { Badge } from "../ui/badge"

const NavLink = ({ href, children, ...props }: { href: string, children: React.ReactNode }) => {
  return (
    <Link
      className="px-2 pt-3 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
      href={href}
      {...props}>
      {children}
    </Link>
  );
};

const SheetLink = ({ href, children, ...props }: { href: string, children: React.ReactNode }) => {
  return (
    <Link className="flex w-full items-center py-2 text-lg font-semibold" href={href}  {...props}>
      {children}
    </Link>
  );
};

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="grid gap-2 py-6">
          <SheetLink href="/">Home
            <sup className="text-xs align-super">
              <Badge variant="secondary">working</Badge>
            </sup>
          </SheetLink>
          <SheetLink href="/gallery">Gallery
          </SheetLink>
          <SheetLink href="/mystery">Mystery
            <sup className="text-xs align-super">
              <Badge variant="secondary">working</Badge>
            </sup>
          </SheetLink>
          <SheetLink href="/market">Market
            <sup className="text-xs align-super">
              <Badge variant="secondary">working</Badge>
            </sup>
          </SheetLink>
          <SheetLink href="/tokenized">Tokenized
            <sup className="text-xs align-super">
              <Badge variant="secondary">working</Badge>
            </sup>
          </SheetLink>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b px-4 py-2 md:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <SiteLogoLink className="flex items-center gap-2" />
        <nav className="hidden md:flex md:gap-4">
          <NavLink href="/">Home
            <sup className="text-xs align-super">
              <Badge variant="secondary">working</Badge>
            </sup>
          </NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/mystery">Mystery
            <sup className="text-xs align-super">
              <Badge variant="secondary">working</Badge>
            </sup>
          </NavLink>
          <NavLink href="/market">Market
            <sup className="text-xs align-super">
              <Badge variant="secondary">working</Badge>
            </sup>
          </NavLink>
          <NavLink href="/detail">Detail
            <sup className="text-xs align-super">
              <Badge variant="secondary">working</Badge>
            </sup>
          </NavLink>
          <NavLink href="/tokenized">Tokenized
            <sup className="text-xs align-super">
              <Badge variant="secondary">working</Badge>
            </sup>
          </NavLink>
          <TwitterLink />
          <GithubLink />
          {/* <ModeToggle /> */}
        </nav>
        <div className="flex items-center gap-2">
          <WalletDialog />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
