import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { TwitterLink, SiteLogoLink, GithubLink } from "@/components/layout/site-links"
import { MenuIcon } from "@/components/layout/logo"
import WalletDialog from "./wallet-diago";
import { Badge } from "../ui/badge"

const NavLink = ({ href, children, badge, ...props }: { href: string, children: React.ReactNode, badge?: string }) => {
  return (
    <Link
      className="px-2 pt-3 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
      href={href}
      {...props}
    >
      {children}
      {badge && (
        <sup className="text-xs align-super">
          <Badge variant="secondary">{badge}</Badge>
        </sup>
      )}
    </Link>
  );
};

const SheetLink = ({ href, children, badge, ...props }: { href: string, children: React.ReactNode, badge?: string }) => {
  return (
    <Link className="flex w-full items-center py-2 text-lg font-semibold" href={href} {...props}>
      {children}
      {badge && (
        <sup className="text-xs align-super">
          <Badge variant="secondary">{badge}</Badge>
        </sup>
      )}
    </Link>
  );
};

interface NavbarProps {
  menuItems: { label: string, href: string, badge?: string }[];
}

export default function Navbar({ menuItems }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b px-4 py-2 md:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <SiteLogoLink className="flex items-center gap-2" />
        <nav className="hidden md:flex md:gap-4">
          {menuItems.map((item, index) => (
            <NavLink key={index} href={item.href} badge={item.badge}>
              {item.label}
            </NavLink>
          ))}
          <TwitterLink />
          <GithubLink />
          {/* <ModeToggle /> */}
        </nav>
        <div className="flex items-center gap-2">
          <WalletDialog />
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-2 py-6">
                {menuItems.map((item, index) => (
                  <SheetLink key={index} href={item.href} badge={item.badge}>
                    {item.label}
                  </SheetLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};