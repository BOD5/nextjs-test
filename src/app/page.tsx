import Link from "next/link"

import { siteConfig } from "@/config/site"
import { getCategories, getTools } from "@/lib/api"
import { buttonVariants } from "@/components/ui/button"
import FirstBlock from "@/components/mainPage/first-block"
import SearchBar from "@/components/search-bar"
import SearchSection from "@/components/search-section"
import ToolCard from "@/components/tool-card"

export default async function IndexPage() {
  const categories = await getCategories()
  const tools = await getTools()
  return (
    <main>
      <FirstBlock />
      <div className="container">
        <SearchSection categories={categories} tools={tools.products} />
      </div>
    </main>
  )
}
