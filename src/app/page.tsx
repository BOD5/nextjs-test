import { getCategories, getTools } from "@/lib/api"
import FirstBlock from "@/components/mainPage/first-block"
import SearchSection from "@/components/search-section"
import SubscribeForm from "@/components/subscribe"

export default async function IndexPage() {
  const categories = await getCategories()
  const tools = await getTools()
  return (
    <main>
      <FirstBlock />
      <div className="container">
        <SearchSection categories={categories} tools={tools.products} />
      </div>
      <div className="container flex justify-center my-8">
        <SubscribeForm></SubscribeForm>
      </div>
    </main>
  )
}
