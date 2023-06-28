"use client"

import { getTools } from "@/lib/api"
import ToolsList from "@/components/tools-list"

const ProfilePage = async () => {
  let selected: any = (await getTools("smartphones")).products
  return (
    <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto max-w-[980px] text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Selected tools
        </h1>
        <p className="my-4 max-w-[700px] text-lg text-muted-foreground">
          This is a list of your selected tools
        </p>
      </div>
      {selected ? (
        <ToolsList tools={selected} />
      ) : (
        <div>No tools selected yet</div>
      )}
    </section>
  )
}

export default ProfilePage
