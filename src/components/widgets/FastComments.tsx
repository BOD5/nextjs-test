"use client"

import { FastCommentsCommentWidget } from "fastcomments-react"

const FastComment: React.FC = () => {
  const config = {
    tenantId: "demo",
    region: "eu",
    pageId: "native-test",
  }
  return <FastCommentsCommentWidget tenantId="demo" />
}

export default FastComment
