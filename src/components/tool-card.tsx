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
  content?: string
  className?: string
}

const ToolCard: React.FC<Props> = ({ content, className, ...props }) => {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
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
