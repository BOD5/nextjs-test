import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import FirstBlock from "@/components/mainPage/first-block"
import SearchBar from "@/components/search-bar"

export default function IndexPage() {
  return (
    <main>
      <FirstBlock />
      <div className="container">
        <SearchBar></SearchBar>
      </div>
    </main>
  )
}
