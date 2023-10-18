import { useContext } from "react"
import FavouritesContext from "../store/favourites-context"
import MeetupList from "../components/meetups/MeetupList"
export default function FavoriteMeetupPage() {
  const favourites_context = useContext(FavouritesContext)
  let content
  if (favourites_context.totalFav === 0) {
    content = <p>No Favorites in the list</p>
  } else {
    content = <MeetupList meetups={favourites_context.favourites} />
  }
  return (
    <section>
      <h1>My Favorite</h1>
      {content}
    </section>
  )
}
