import Link from "next/link"
import { SwiperOptions } from "swiper"

import style from "@/styles/components/search-bar.module.scss"

import { Icons } from "./default/icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import SwiperUi from "./ui/swiper"

const getCategories = async () => {
  return await fetch("https://dummyjson.com/products/categories").then((res) =>
    res.json()
  )
}

const SearchBar = async () => {
  const categories = await getCategories()
  const categoriesUI = categories.map((c: string) => {
    return (
      <Button variant={"link"}>
        <Link href={`/categories/${c}`}>{c}</Link>
      </Button>
    )
  })
  const swiperOptions: SwiperOptions = {
    spaceBetween: 25,
    slidesPerView: "auto",
    mousewheel: true,
    freeMode: true,
  }
  return (
    <div>
      <Input type="text" placeholder="Search"></Input>
      <div className={style.line}>
        <Button className={style.filter} variant="outline">
          <Icons.filters className="mr-2 h-4 w-4" />
          Filter
        </Button>
        <SwiperUi
          className={`${style.swiper} max-w-full`}
          options={swiperOptions}
        >
          {categoriesUI}
        </SwiperUi>
        <Select>
          <SelectTrigger className={`${style.sort} w-[180px] shrink-0`}>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="">Sort by</SelectItem>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-center">
        <Button variant={"link"}>
          <Link href={"/categories"}>View all categories</Link>
        </Button>
      </div>
    </div>
  )
}

export default SearchBar
