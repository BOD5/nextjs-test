import { notFound } from "next/navigation"

const pages = ["terms", "some-static"]

export function generateStaticParams() {
  return pages.map((p: any) => ({
    pageId: "" + p,
  }))
}

const StaticPage = ({ params }: any) => {
  if (!pages.includes(params.pageId)) {
    notFound()
  }
  return (
    <div className="container pt-5">
      <h1 className="my-10 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        Static page: <span className="capitalize">{params.pageId}</span>
      </h1>
    </div>
  )
}

export default StaticPage
