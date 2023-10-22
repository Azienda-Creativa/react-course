import React, { Fragment } from "react"
import RemoveBtn from "./remove-btn"
import Link from "next/link"
import { HiPencilAlt } from "react-icons/hi"
import styles from "./topics-list.module.css"
export default function TopicsList(props) {
  const { title, description } = props
  return (
    <Fragment>
      <div className={styles.topic}>
        <div style={{ marginLeft: "8px" }}>
          <h2>{title} title </h2>
          <p>{description} description</p>
        </div>
        <div style={{ display: "flex", gap: 5, marginRight: "8px", marginTop: "8px" }}>
          <Link href="/edit-topic">
            <HiPencilAlt size={24} />
          </Link>
          <RemoveBtn />
        </div>
      </div>
    </Fragment>
  )
}
