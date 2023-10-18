import React from "react"
import { useRef } from "react"
import Card from "../ui/Card"
import classes from "./NewMeetupForm.module.css"
export default function NewMeetupForm() {
  const titleInputRef = useRef()
  function submitHandler(e) {
    e.preventDefault()
    const enteredTitle = titleInputRef.current.value
  }
  return (
    <Card>
      <form
        onSubmit={submitHandler}
        className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            rows="5"></textarea>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </div>
      </form>
    </Card>
  )
}