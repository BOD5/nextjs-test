import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/default/icons"
import { ThemeToggle } from "@/components/default/theme-toggle"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="h-18 container flex  items-center space-x-4 py-2 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
