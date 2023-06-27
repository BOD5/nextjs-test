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

const SearchFilters = (props: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" {...props}>
          Filters
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[100%] overflow-auto">
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
          <DialogDescription>Select Filters to Apply</DialogDescription>
        </DialogHeader>
        <div className="overflow-auto">
          <div className="my-2 grid gap-4 sm:grid-cols-2">
            <p className="sm:col-start-1 sm:col-end-3">Pricing</p>
            <div className="flex items-center space-x-2">
              <Checkbox id="1" />
              <Label htmlFor="1">Free</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="2" />
              <Label htmlFor="2">Free Trial</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="3" />
              <Label htmlFor="3">Contact for Pricing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="4" />
              <Label htmlFor="4">Paid</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="5" />
              <Label htmlFor="5">Deals</Label>
            </div>
          </div>

          <div className="mb-2 grid gap-4 sm:grid-cols-2">
            <p className="sm:col-start-1 sm:col-end-3">Features</p>
            <div className="flex items-center space-x-2">
              <Checkbox id="1" />
              <Label htmlFor="1">Waitlist</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="2" />
              <Label htmlFor="2">Open Source</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="3" />
              <Label htmlFor="3">Mobile App</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="4" />
              <Label htmlFor="4">Discord Community</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="5" />
              <Label htmlFor="5">API</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="5" />
              <Label htmlFor="5">No Signup Required</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="5" />
              <Label htmlFor="5">Browser Extension</Label>
            </div>
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

export default SearchFilters
