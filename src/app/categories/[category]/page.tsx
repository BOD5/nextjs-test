import Link from "next/link"

import { siteConfig } from "@/config/site"
import { getTools } from "@/lib/api"
import { buttonVariants } from "@/components/ui/button"
import FirstBlock from "@/components/mainPage/first-block"
import ToolsList from "@/components/tools-list"

export default async function IndexPage({ params }: any) {
  const { products } = await getTools(params.category)
  return (
    <main>
      <FirstBlock />
      <div className="container">
        <ToolsList tools={products} />
      </div>
    </main>
  )
}
