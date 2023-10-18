import React from "react"
import classes from "./MeetupItem.module.css"
import Card from "../ui/Card"
console.log(classes)
export default function MeetupItem(props) {
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
          <button>to favorites</button>
        </div>
      </Card>
    </li>
  )
}
