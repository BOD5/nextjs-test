import Image from "next/image"
import { notFound } from "next/navigation"

import { getProduct } from "@/lib/api"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import { Icons } from "@/components/default/icons"

const Page = async (context) => {
  const { params } = context
  const tool = await getProduct(params.toolId)
  const crumbs = [
    { title: "Home", link: "/" },
    { title: tool.category, link: `/categories/${tool.category}` },
    { title: tool.title, link: `` },
  ]
  if (!tool.id) {
    notFound()
  }
  return (
    <main className="container">
      <Breadcrumbs routes={crumbs}></Breadcrumbs>
      <div className="my-4 flex gap-2">
        <h1 className="text-3xl">{tool.title}</h1>
        <a href="/">
          <Button className="flex gap-2 text-lg font-bold">
            {"Visit"}
            <Icons.external />
          </Button>
        </a>
      </div>
      <p>{"Product Information"}</p>
      <div className="mt-2 flex gap-7">
        <div className="w-2/5">
          <AspectRatio ratio={16 / 12} className="bg-muted">
            <Image
              src={
                tool?.images[0] ||
                "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              }
              alt="Photo by Drew Beamer"
              fill
              className="rounded-lg object-cover"
            />
          </AspectRatio>
        </div>
        <div>
          <p>{tool.description}</p>
          <p className="my-4">
            This tool is verified because it is either an established company or
            has good social media presence Added on March 1
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page
