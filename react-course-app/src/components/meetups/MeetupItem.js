import React from "react"
import classes from "./MeetupItem.module.css"
import Card from "../ui/Card"
import { useContext } from "react"
import FavouritesContext from "../../store/favourites-context"

export default function MeetupItem(props) {
  const favourites_context = useContext(FavouritesContext)

  const inFavorite = favourites_context.isFavorite(props.id)

  function toggleFavHandler() {
    inFavorite
      ? favourites_context.removeFavorite(props.id)
      : favourites_context.addFavorite({
          id: props.id,
          title: props.title,
          description: props.description,
          image: props.image,
          address: props.address,
        })
  }
  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img
            className={classes.image}
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavHandler}>{inFavorite ? "remove from favorites" : "add to favorites"}</button>
        </div>
      </Card>
    </li>
  )
}
