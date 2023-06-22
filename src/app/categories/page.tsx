import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import FirstBlock from "@/components/mainPage/first-block"
import ToolCard from "@/components/tool-card"

export default function IndexPage() {
  return (
    <main>
      <FirstBlock />
      <div className="container">
        <ToolCard></ToolCard>
      </div>
    </main>
  )
}
