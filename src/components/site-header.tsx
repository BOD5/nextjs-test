import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/default/icons"
import { ThemeToggle } from "@/components/default/theme-toggle"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="h-18 container flex  items-center justify-between space-x-4 py-2 sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <Link href="/" className="md:order-first z-0 max-[420px]:order-first">
          <Icons.logo className="w-full max-w-[150px]" />
        </Link>
        <div className="z-0 flex items-center space-x-4 max-[420px]:hidden">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
          <Button variant={"ghost"}>
            <Link href={"/auth"}>
              <Icons.user />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
