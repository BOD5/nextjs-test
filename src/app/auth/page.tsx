import { Apple } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Icons } from "@/components/default/icons"

const AuthPage = () => {
  return (
    <section className="container flex flex-1 flex-col items-center justify-center gap-2">
      <h1 className="text-xl mt-2">Login</h1>
      <Card>
        <CardHeader>
          <Icons.logo className="w-[350px]"></Icons.logo>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button variant={"outline"}>Google</Button>
          <Button variant={"outline"}>
            <Apple className="mr-2" />
            Apple
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}

export default AuthPage
