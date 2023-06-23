import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col gap-2 items-center">
      <h2 className="text-2xl">404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Button variant="link" className="text-lg">
        <Link href="/">Back to the future</Link>
      </Button>
    </div>
  )
}
