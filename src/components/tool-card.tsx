import Image from "next/image"
import { ExternalLink, PlusCircle } from "lucide-react"

import { cn } from "@/lib/utils"

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
      className={cn("w-[380px] flex flex-col justify-between", className)}
      {...props}
    >
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
      <CardHeader>
        <CardTitle>{content?.title}</CardTitle>
        <CardDescription>{content?.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
      <CardFooter className="flex gap-2">
        <Button className="w-full">
          {" "}
          <ExternalLink />{" "}
        </Button>
        <Button className="w-full">
          {" "}
          <PlusCircle />{" "}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ToolCard
