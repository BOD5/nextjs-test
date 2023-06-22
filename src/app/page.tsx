import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import FirstBlock from "@/components/mainPage/first-block"
import SearchBar from "@/components/search-bar"
import ToolCard from "@/components/tool-card"

const getCategories = async () => {
  return await fetch("https://dummyjson.com/products/categories").then((res) =>
    res.json()
  )
}
export default async function IndexPage() {
  const categories = await getCategories()
  return (
    <main>
      <FirstBlock />
      <div className="container">
        <SearchBar categories={categories}></SearchBar>
        <ToolCard></ToolCard>
      </div>
    </main>
  )
}
