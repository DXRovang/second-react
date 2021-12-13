import { Route, Routes } from "react-router-dom";
// import { Switch } from 'react-router-dom'
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpPage from "./pages/NewMeetUp";


function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={<AllMeetUpsPage />} >
      </Route>
      <Route  exact path="/new" element={<NewMeetUpPage />}>
      </Route>
      <Route  exact path="/favorites" element={<FavoritesPage />}>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
