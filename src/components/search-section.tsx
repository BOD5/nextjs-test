"use client"

import { useEffect, useState } from "react"

import { getCategories, getTools } from "@/lib/api"

import SearchBar from "./search-bar"
import ToolsList from "./tools-list"

interface Props {
  tools?: any
  category?: string
}

const SearchSection: React.FC<Props> = ({
  tools: defaultT,
  category: defaultC,
}) => {
  const [category, setCategory] = useState(defaultC || "")
  const [tools, setTools] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getTools(category).then((t) => setTools(t.products))
  }, [category])

  useEffect(() => {
    !defaultT && getTools(category).then((t) => setTools(t.products))
    !defaultC && getCategories().then((c) => setCategories(c))
  }, [])

  return (
    <section>
      <SearchBar categories={categories} setCategory={setCategory} />
      <ToolsList tools={tools} />
    </section>
  )
}

export default SearchSection
