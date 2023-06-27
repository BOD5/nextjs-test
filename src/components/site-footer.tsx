import Link from "next/link"

import { Icons } from "./default/icons"
import { Button } from "./ui/button"

const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-2 border-b py-6 md:flex-row">
        <Link href="/" className="z-0 max-[420px]:order-first md:order-first">
          <Icons.logo className="w-full max-w-[150px]" />
        </Link>
        <div className="flex flex-wrap justify-center mt-4 md:mt-0">
          <Button
            className={"flex items-center text-xl font-medium opacity-80"}
            variant="link"
          >
            <Link href={"/news"}>News</Link>
          </Button>
          <Button
            className={"flex items-center text-xl font-medium opacity-80"}
            variant="link"
          >
            <Link href={"/terms"}>Terms</Link>
          </Button>
        </div>
      </div>
      <div className="p-4 text-center">©2023 All rights reserved</div>
    </footer>
  )
}

export default SiteFooter
