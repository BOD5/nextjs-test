import { Icons } from "../default/icons"
import { Button } from "../ui/button"
import Rating from "../ui/rating"

const ToolHeader = ({ tool }) => (
  <div className="my-4 flex gap-7">
    <h1 className="text-3xl">{tool.title}</h1>
    <a href="/">
      <Button className="flex gap-2 text-lg font-bold">
        {"Visit"}
        <Icons.external />
      </Button>
    </a>
    <Rating value={4} className="max-w-[180px]"></Rating>
  </div>
)

export default ToolHeader
