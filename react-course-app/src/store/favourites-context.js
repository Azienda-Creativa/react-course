import { createContext, useState } from "react"

const FavouritesContext = createContext({
  favourites: [],
  totalFav: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
})

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([])

  function addFavHandler(favMeetup) {
    setUserFavourites((prev) => {
      return prev.concat(favMeetup)
    })
  }
  function removeFavHandler(id) {
    setUserFavourites((prev) => {
      return prev.filter((meetup) => meetup.id !== id)
    })
  }
  function isFavouriteHandler(id) {
    return userFavourites.some((meetup) => meetup.id === id)
  }

  const context = {
    favourites: userFavourites,
    totalFav: userFavourites.length,
    addFavorite: addFavHandler,
    removeFavorite: removeFavHandler,
    isFavorite: isFavouriteHandler,
  }
  return <FavouritesContext.Provider value={context}>{props.children}</FavouritesContext.Provider>
}

export default FavouritesContext
