import Image from "next/image"

import { AspectRatio } from "../ui/aspect-ratio"

const ProductInformation = ({ content }: any) => {
  return (
    <div>
      <p>{"Product Information"}</p>
      <div className="flex">
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
        <div></div>
      </div>
    </div>
  )
}

export default ProductInformation
