"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/default/icons"

import { ThemeToggle } from "../default/theme-toggle"
import { Button } from "../ui/button"
import styles from "./styles.module.scss"

interface MainNavProps {
  items?: NavItem[]
}
export function MainNav({ items }: MainNavProps) {
  const [active, setActive] = React.useState(false)

  const showMain = () => {
    if (window.innerWidth > 768) {
      return
    }
    document.body.style.overflow = !active ? "hidden" : "initial"
    setActive(!active)
  }

  React.useEffect(() => {
    const resizeListener = () => {
      if (active && window.innerWidth > 768) {
        setActive(false)
        document.body.style.overflow = "initial"
      }
    }

    window.addEventListener("resize", resizeListener)
    return () => window.removeEventListener("resize", resizeListener)
  }, [active])

  return (
    <div
      className={`${styles.nav} flex items-center justify-between gap-6 md:gap-10`}
    >
      <Button
        variant={"ghost"}
        onClick={showMain}
        className={`${styles["nav__trigger"]} z-10 md:hidden`}
      >
        {active ? <X /> : <Menu />}
      </Button>
      <nav
        className={`${active ? styles.active : ""} ${
          styles["nav-menu"]
        } hidden items-center gap-6 bg-background md:flex md:bg-transparent`}
      >
        {items?.map(
          (item, index) =>
            item.href && (
              <Button
                onClick={showMain}
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
        <div className="min-[420px]:hidden flex ">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
          <Button variant={"ghost"} onClick={showMain}>
            <Link href={"/auth"}>
              <Icons.user />
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  )
}
