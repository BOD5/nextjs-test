import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/default/icons"

import { Button } from "../ui/button"
import styles from "./styles.module.scss"

interface MainNavProps {
  items?: NavItem[]
}

{
  /* <Link href="/" className="flex items-center space-x-2">
<Image src={logo} className="w-[100px]" alt="logo" />
</Link> */
}
export function MainNav({ items }: MainNavProps) {
  return (
    <div className={`${styles.nav} flex gap-6 md:gap-10`}>
      <button className={`${styles["nav__trigger"]}`}></button>
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="w-[150px]" />
      </Link>
      {items?.length ? (
        <nav className="flex items-center gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Button
                  key={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                  variant="link"
                >
                  <Link key={index} href={item.href}>
                    {item.title}
                  </Link>
                </Button>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
