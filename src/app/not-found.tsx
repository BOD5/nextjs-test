import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-1 flex-col items-center justify-center gap-2">
      <h2 className="text-2xl">404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Button variant="link" className="text-lg">
        <Link href="/">Back to the future</Link>
      </Button>
    </div>
  )
}
