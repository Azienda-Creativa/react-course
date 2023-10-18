import NewMeetupForm from "../components/meetups/NewMeetupForm"

export default function NewMeetUpPage() {
  function dataHandler(data) {
    fetch("https://meetup-c8525-default-rtdb.firebaseio.com/meetups.json", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } })
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm addMeetup={dataHandler} />
    </section>
  )
}
