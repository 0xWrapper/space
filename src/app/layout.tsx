import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "@/components/layout/navbar";
import Foot from "@/components/layout/foot";
import { ThemeProvider } from "@/components/element/theme-provider";
import { siteConfig } from "@/config/site";
import Providers from "@/components/layout/provider";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

const menuItems = [
  { label: "Home", href: "/", badge: "working" },
  { label: "Gallery", href: "/gallery", badge: "working" },
  { label: "Mystery", href: "/mystery", badge: "working" },
  { label: "Market", href: "/market", badge: "working" },
  { label: "Detail", href: "/detail", badge: "working" },
  { label: "Tokenized", href: "/tokenized", badge: "working" }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "flex flex-col min-h-screen",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <Navbar menuItems={menuItems} />
            <main>
              {children}
            </main>
            <Foot />
          </Providers>
        </ThemeProvider>
      </body>
    </html >
  );
}