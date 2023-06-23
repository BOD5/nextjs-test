import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import FirstBlock from "@/components/mainPage/first-block"
import SearchBar from "@/components/search-bar"
import SearchSection from "@/components/search-section"
import ToolCard from "@/components/tool-card"

export default async function IndexPage() {
  return (
    <main>
      <FirstBlock />
      <div className="container">
        <SearchSection />
      </div>
    </main>
  )
}
