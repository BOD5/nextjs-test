import Image from "next/image"
import Link from "next/link"
import { PlusCircle } from "lucide-react"

import { cn } from "@/lib/utils"

import { Icons } from "./default/icons"
import { AspectRatio } from "./ui/aspect-ratio"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

interface Props {
  content?: any
  className?: string
}

const ToolCard: React.FC<Props> = ({ content, className, ...props }) => {
  console.log(" - content:23 >", content) // eslint-disable-line no-console
  return (
    <Card
      className={cn("flex w-[380px] flex-col justify-between", className)}
      {...props}
    >
      <Link href={`/tools/${content.id}`}>
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <Image
            src={
              content?.images[0] ||
              "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            }
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </Link>
      <CardHeader>
        <CardTitle>
          <Link href={`/tools/${content.id}`}>{content?.title}</Link>
        </CardTitle>
        <CardDescription>{content?.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
      <CardFooter className="flex gap-2">
        <Link className="w-full" href={`/tools/${content.id}`}>
          <Button className="w-full">
            <Icons.external />{" "}
          </Button>
        </Link>
        <Button className="w-full">
          {" "}
          <PlusCircle />{" "}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ToolCard
