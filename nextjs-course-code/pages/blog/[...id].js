import React from "react"
import { useRouter } from "next/router"
export default function BlogPostsPage() {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>Blog Post Page</h1>
    </div>
  )
}