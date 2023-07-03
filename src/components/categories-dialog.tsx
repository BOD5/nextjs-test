import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { ScrollArea } from "./ui/scroll-area"

const CategoriesDialog = ({ categories, ...props }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" {...props}>
          View all categories
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[100%] overflow-auto">
        <DialogHeader>
          <DialogTitle>Categories</DialogTitle>
          <DialogDescription>Select Categories to Apply</DialogDescription>
        </DialogHeader>
        <div className="overflow-auto">
          <div className="my-2 grid gap-4 sm:grid-cols-2">
            {categories.map((c: any) => (
              <div key={c} className="flex items-center space-x-2">
                <Checkbox id={c} />
                <Label htmlFor={c}>{c}</Label>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter className="flex gap-4">
          <Button className="w-full" variant={"outline"}>
            Clear
          </Button>
          <Button className="w-full" type="submit">
            Apply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CategoriesDialog
