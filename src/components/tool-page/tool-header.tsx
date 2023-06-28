import { Icons } from "../default/icons"
import { Button } from "../ui/button"
import Rating from "../ui/rating"

const ToolHeader = ({ tool }: any) => (
  <div className="my-4 flex flex-col gap-7 sm:flex-row justify-between">
    <div className="flex flex-wrap justify-between gap-4">
      <h1 className="text-3xl">{tool.title}</h1>
      <a href="/">
        <Button className="flex gap-2 text-lg font-bold">
          {"Visit"}
          <Icons.external />
        </Button>
      </a>
    </div>
    <Rating value={4} className="max-w-[180px]"></Rating>
  </div>
)

export default ToolHeader
