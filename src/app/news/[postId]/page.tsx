import { GetStaticProps } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import { Icons } from "@/components/default/icons"

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts/").then(
    (res) => res.json()
  )
  return posts.map((post: any) => ({
    postId: "" + post.id,
  }))
}

const ToolPage = async (props: any) => {
  const post: any = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${props.params.postId}`
  ).then((res) => res.json())

  const crumbs = [
    { title: "Home", link: "/" },
    { title: "News", link: `/news` },
    { title: post.title, link: `` },
  ]
  return (
    <div className="container pt-5">
      <Breadcrumbs routes={crumbs}></Breadcrumbs>
      <Button variant="ghost">
        <Link href="/news">
          <Icons.arrowLeft className="h-6 w-6" />
        </Link>
      </Button>
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl my-10">
        News Title: <span className="capitalize">{post.title}</span>
      </h1>
      <p className="text-xl">{post.body}</p>
    </div>
  )
}

export default ToolPage
