import Link from "next/link"
import { SwiperOptions } from "swiper"

import CategoriesDialog from "../categories-dialog"
import { Icons } from "../default/icons"
import SearchFilters from "../search-filters"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import SwiperUi from "../ui/swiper"
import style from "./style.module.scss"

interface Props {
  categories: any
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({ categories, setCategory }) => {
  const categoriesUI = categories.map((c: string) => {
    return (
      <Button
        onClick={(e) => setCategory(c)}
        key={c}
        variant={"ghost"}
        // className="text-green-500"
      >
        {c}
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
        <SearchFilters
          className={style.filter}
          variant="outline"
        ></SearchFilters>
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
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-center">
        <CategoriesDialog categories={categories}></CategoriesDialog>
      </div>
    </div>
  )
}

export default SearchBar
