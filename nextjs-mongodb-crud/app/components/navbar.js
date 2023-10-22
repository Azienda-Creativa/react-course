import React from "react"
import styles from "./navbar.module.css"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link
        style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}
        href="/">
        Home
      </Link>
      <Link
        style={{ color: "black", fontWeight: "semi-bold", textDecoration: "none", backgroundColor: "white", padding: "8px", fontSize: "12" }}
        href="/add-topic">
        Add Item
      </Link>
    </nav>
  )
}
