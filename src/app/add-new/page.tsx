import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/default/icons"

const AddNewPage = () => {
  return (
    <section className="container flex flex-1 flex-col items-center justify-center gap-2 pt-16">
      <Card>
        <CardHeader>
          <Icons.logo className="w-full max-w-[350px]"></Icons.logo>
          <h1 className="text-center text-2xl">Add new Tool</h1>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input type="email" placeholder="Email" />
          <Input type="title" placeholder="Tool title" />
          <Input type="link" placeholder="Tool link" />
          <Textarea placeholder="Description" />
          <Button>Submit</Button>
        </CardContent>
      </Card>
    </section>
  )
}

export default AddNewPage
