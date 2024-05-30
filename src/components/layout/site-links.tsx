import { Button } from "@/components/ui/button";
import { LogoIcon, TwitterIcon } from "@/components/layout/logo";
import { SVGProps } from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function TwitterLink(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <Button asChild variant="ghost" size="icon">
            <a className="text-gray-600" href={siteConfig.links.twitter}>
                <TwitterIcon className="h-4 w-4" />
            </a>
        </Button>
    )
}
export function SiteLogoLink({ ...props }) {
    return (
        <Link  {...props} href={siteConfig.links.github}>
            <LogoIcon className="h-6 w-6" />
            <span className="font-semibold text-lg">Wrapper Protocal</span>
        </Link>
    )
}
