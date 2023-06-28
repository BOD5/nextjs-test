"use client"

import { useEffect, useState } from "react"
import { FastCommentsCommentWidget } from "fastcomments-react"
import { useTheme } from "next-themes"

const FastComment: React.FC = () => {
  const { theme } = useTheme()
  const [dark, setDark] = useState(theme === "dark")
  useEffect(() => setDark(theme === "dark"), [theme])
  const config = {
    tenantId: "demo",
    region: "eu",
    pageId: "native-test",
  }
  return <FastCommentsCommentWidget hasDarkBackground={dark} {...config} />
}

export default FastComment
