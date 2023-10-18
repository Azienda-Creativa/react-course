import NewMeetupForm from "../components/meetups/NewMeetupForm"
import { useHistory } from "react-router-dom"
export default function NewMeetUpPage() {
  const history = useHistory()
  function dataHandler(data) {
    fetch("https://meetup-c8525-default-rtdb.firebaseio.com/meetups.json", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } }).then(() => {
      history.replace("/")
    })
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm addMeetup={dataHandler} />
    </section>
  )
}
