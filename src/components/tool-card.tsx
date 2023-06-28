import Image from "next/image"
import Link from "next/link"
import { DollarSign, Heart } from "lucide-react"

import { cn } from "@/lib/utils"

import { Icons } from "./default/icons"
import { AspectRatio } from "./ui/aspect-ratio"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import Rating from "./ui/rating"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"
import { useToast } from "./ui/use-toast"

interface Props {
  content?: any
  className?: string
}

const ToolCard: React.FC<Props> = ({ content, className, ...props }) => {
  const { toast } = useToast()
  return (
    <Card
      className={cn("relative flex w-full flex-col justify-between", className)}
      {...props}
    >
      <Link href={`/tools/${content.id}`}>
        <AspectRatio
          ratio={16 / 9}
          className="overflow-hidden rounded-t-md bg-muted"
        >
          <Image
            src={
              content?.images[0] ||
              "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            }
            alt="Photo by Drew Beamer"
            fill
            className=" object-cover transition duration-150 ease-out hover:scale-110"
          />
        </AspectRatio>
      </Link>
      <div className="absolute right-0 top-2 rounded-l-lg bg-background p-2">
        $ 12/mo
      </div>
      <CardHeader>
        <CardTitle className="relative">
          <Link href={`/tools/${content.id}`}>{content?.title}</Link>
          <Rating value={4} className="mt-4 max-w-[100px]"></Rating>
          <div className="absolute right-0 top-0 flex items-center gap-2">
            <Heart /> 5
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardDescription className="text-base">
          {content?.description}
        </CardDescription>
        <div>
          <Badge
            variant={"secondary"}
            className="self-start rounded-md px-4 text-base"
          >
            <DollarSign className="inline-block h-4 w-4" /> Free
          </Badge>
        </div>
        <div className="-ms-3 text-base">
          <Button variant={"link"}>#summarizer</Button>
          <Button variant={"link"}>#startup tools</Button>
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Link className="w-full" href={`/tools/${content.id}`}>
          <Button className="w-full">
            <Icons.external />{" "}
          </Button>
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="w-full">
              <Button
                variant={"outline"}
                className="w-full"
                onClick={() => {
                  toast({
                    title: "Add to favorites",
                    description: "Added to favorites",
                  })
                }}
              >
                {" "}
                <Heart />{" "}
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <p>Add to favorites</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  )
}

export default ToolCard
