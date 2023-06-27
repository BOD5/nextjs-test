import { Button } from "./ui/button"
import { Input } from "./ui/input"

const SubscribeForm = () => {
  return (
    <section className="w-full max-w-[500px]">
      <h3 className="mb-4 text-center text-xl">Subscribe to our news</h3>
      <form action="" className="sm:flex sm:gap-4">
        <Input
          className="mb-2 sm:mb-0 sm:grow"
          type="email"
          name="email"
          placeholder="Email"
        ></Input>
        <Button>Submit</Button>
      </form>
    </section>
  )
}

export default SubscribeForm
