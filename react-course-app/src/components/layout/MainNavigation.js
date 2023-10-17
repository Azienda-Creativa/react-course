import React from "react"
import { Link } from "react-router-dom"
import classes from "./MainNavigation.module.css"

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
