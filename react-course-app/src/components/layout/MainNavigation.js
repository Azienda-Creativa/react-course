import React from "react"
import { Link } from "react-router-dom"
import classes from "./MainNavigation.module.css"
import { useContext } from "react"
import FavouritesContext from "../../store/favourites-context"

export default function MainNavigation() {
  const favourites_context = useContext(FavouritesContext)
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
            <Link to="/favourites">
              Favourites Meetups
              <span className={classes.badge}>{favourites_context.totalFav}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
