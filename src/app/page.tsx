import { getCategories, getTools } from "@/lib/api"
import FirstBlock from "@/components/mainPage/first-block"
import SearchSection from "@/components/search-section"
import SubscribeForm from "@/components/subscribe"

// const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export default async function IndexPage() {
  // await wait(50000)
  const categories = await getCategories()
  const tools = await getTools()
  return (
    <main>
      <FirstBlock />
      <div className="container">
        <SearchSection categories={categories} tools={tools.products} />
      </div>
      <div className="container my-8 flex justify-center">
        <SubscribeForm></SubscribeForm>
      </div>
    </main>
  )
}
