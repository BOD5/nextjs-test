import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import FirstBlock from "@/components/mainPage/first-block"
import SearchBar from "@/components/search-bar"
import ToolCard from "@/components/tool-card"

export default function IndexPage() {
  return (
    <main>
      <FirstBlock />
      <div className="container">
        <SearchBar></SearchBar>
        <ToolCard></ToolCard>
      </div>
    </main>
  )
}
