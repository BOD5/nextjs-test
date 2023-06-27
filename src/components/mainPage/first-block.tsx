import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"

export default function FirstBlock() {
  return (
    <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Boost Efficiency with AI-driven Solutions
        </h1>
        <p className="my-4 max-w-[700px] text-lg text-muted-foreground">
          Revolutionize the way you work with our AI-driven solutions. From
          automated data analysis to smart decision-making algorithms, our tools
          leverage the capabilities of artificial intelligence to optimize
          processes, minimize errors, and save valuable time. Stay ahead of the
          competition and experience the future of technology today.
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <Button>Tools added today</Button>
        <Button variant={"outline"}>News added today</Button>
      </div>
    </section>
  )
}
