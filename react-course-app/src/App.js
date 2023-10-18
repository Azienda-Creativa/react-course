import { Route, Switch } from "react-router-dom"
import AllMeetUpsPage from "./pages/AllMeetUps"
import NewMeetUpPage from "./pages/NewMeetUp"
import FavoriteMeetupPage from "./pages/FavoriteMeetup"
import Layout from "./components/layout/Layout"
function App() {
  return (
    <Layout>
      <Switch>
        <Route
          path="/"
          exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>
        <Route path="/favourites">
          <FavoriteMeetupPage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
