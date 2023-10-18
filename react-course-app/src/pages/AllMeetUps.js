import MeetupList from "../components/meetups/MeetupList"
import { useState, useEffect } from "react"

export default function AllMeetUpsPage() {
  const [isloading, setIsLoading] = useState(true)
  const [allMeetup, setAllMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch("https://meetup-c8525-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const meetups = []
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          }

          meetups.push(meetup)
        }
        setIsLoading(false)
        setAllMeetups(meetups)
      })
  }, [])

  isloading && (
    <section>
      <p>Loading...</p>
    </section>
  )

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={allMeetup} />
    </section>
  )
}
