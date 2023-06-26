"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/default/icons"

import { Button } from "../ui/button"
import styles from "./styles.module.scss"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [active, setActive] = React.useState(false)
  const showMain = () => {
    setActive(!active)
  }
  React.useEffect(() => {
    const resizeListener = () => {
      if (active && window.innerWidth > 768) {
        setActive(false)
      }
    }
    window.addEventListener("resize", resizeListener)
    return window.removeEventListener("resize", resizeListener)
  }, [])
  return (
    <div className={`${styles.nav} flex gap-6 md:gap-10`}>
      <nav
        className={`${active ? styles.active : ""} ${
          styles["nav-menu"]
        } hidden items-center gap-6 bg-background md:flex md:bg-transparent`}
      >
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="w-full max-w-[150px]" />
        </Link>
        {items?.map(
          (item, index) =>
            item.href && (
              <Button
                key={item.href}
                className={cn(
                  "flex items-center text-2xl font-medium md:text-base",
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
      <button
        onClick={(e) => showMain()}
        className={`${styles["nav__trigger"]} z-10 md:hidden`}
      >
        {active ? <X /> : <Menu />}
      </button>
    </div>
  )
}
