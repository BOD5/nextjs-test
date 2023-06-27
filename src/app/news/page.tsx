import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "News",
  description: "ai news",
}

let posts: any = null

const getPosts = async () => {
  if (!posts) {
    posts = await fetch("https://jsonplaceholder.typicode.com/posts/").then(
      (res) => res.json()
    )
  }
  return posts
}

const Tools = async () => {
  const posts = await getPosts()
  if (!Array.isArray(posts)) {
    return "error"
  }
  const list: React.ReactElement[] = posts.map((post: any) => (
    <li className="" key={post.id}>
      <Card className="grid h-full">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>some post</CardDescription>
        </CardHeader>
        <CardContent>{post.body}</CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="ghost">
            <Link href={`/news/${post.id}`}>Read more...</Link>
          </Button>
        </CardFooter>
      </Card>
    </li>
  ))
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        News
      </h1>
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {list}
      </ul>
    </section>
  )
}

export default Tools
