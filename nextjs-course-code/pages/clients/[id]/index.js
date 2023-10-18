import React from "react"
import { useRouter } from "next/router"
export default function ClientProjectPage() {
  const router = useRouter()
  console.log(router.query)

  function loadDataHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: 1, clientprojectid: "projectA" },
    })
  }

  return (
    <div>
      <h1>Client Project Page</h1>
      <button onClick={loadDataHandler}>Load Project A</button>
    </div>
  )
}
