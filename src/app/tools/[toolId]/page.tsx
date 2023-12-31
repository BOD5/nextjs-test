import Image from "next/image"
import { notFound } from "next/navigation"
import { Copy, Twitter } from "lucide-react"

import { getProduct } from "@/lib/api"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Rating from "@/components/ui/rating"
import Breadcrumbs from "@/components/breadcrumbs"
import { Icons } from "@/components/default/icons"
import ToolHeader from "@/components/tool-page/tool-header"
import FastComment from "@/components/widgets/FastComments"

const Page = async (context: any) => {
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
      <ToolHeader tool={tool}></ToolHeader>
      <p>{"Product Information"}</p>
      <div className="mb-10 mt-2 flex flex-col gap-7 md:flex-row">
        <div className="shrink-0  md:w-2/5">
          <AspectRatio ratio={16 / 8} className="bg-muted">
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
        <div className="text-lg">
          <p>{tool.description}</p>
          <p className="my-4">
            This tool is verified because it is either an established company or
            has good social media presence Added on March 1
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="text-base">Freemium</Badge>
            Paid plans start from $12/mo
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className="text-base">Browser Extension</Badge>
          </div>
          <h3 className="mt-4">Social Links</h3>
          <div className="flex flex-gap">
            <Button variant={"ghost"}>
              <Twitter />
            </Button>
          </div>
        </div>
      </div>
      <Card>
        <CardContent className="flex gap-4 p-4 align-middle flex-col md:flex-row">
          <div className="md:w-[250px]">
            <AspectRatio ratio={5 / 1} className=" bg-muted">
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
          <Button variant={"ghost"} size={"lg"} className="text-xl">
            <Copy className="mr-2" />
            Copy code
          </Button>
          <Button variant={"link"} className="md:ml-auto">
            Promoute
          </Button>
        </CardContent>
      </Card>
      <div className="my-10 gap-8 md:flex">
        <section>
          <h3>{tool.title} Features</h3>
          <p className="my-4">
            Aidaptive is an AI-powered predictive personalization engine
            designed to boost revenue and conversions for eCommerce and
            hospitality brands. Key features and advantages include:
          </p>
          <ul className="list-disc ps-4">
            <li>
              Personalized recommendations: Uses machine learning to tailor
              product recommendations, pricing, search results, and
              merchandising
            </li>
            <li>
              Jarvis ML technology: Provides enterprise-grade machine learning
              for businesses of all sizes
            </li>
            <li>
              Integration: Works with various data sources, such as Shopify,
              Guesty, Salesforce, and BigCommerce
            </li>
          </ul>
        </section>
        <aside className="flex shrink-0 flex-col items-start mt-6 md:mt-0">
          <h3>Categories</h3>
          <Button variant={"link"} className="">
            Promoute
          </Button>
          <Button variant={"link"} className="">
            View All Categories
          </Button>
        </aside>
      </div>
      <section>
        <h3 className="text-cernter mb-4">{tool.title} Reviews</h3>
        <Card>
          <CardContent className="flex flex-col justify-between gap-4 p-4 items-center text-center md:flex-row">
            <div className="text-lg">
              What do you think about Aidaptive ?
              <p className="mt-2 text-sm text-slate-400 md:text-start">
                Leave a review for the community
              </p>
            </div>
            <Rating value={0} className="max-w-[180px]"></Rating>
          </CardContent>
        </Card>
      </section>
      <section>
        <FastComment />
      </section>
    </main>
  )
}

export default Page
