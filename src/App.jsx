import { Route, Routes } from "react-router-dom";

//Utils
import PrivateRoutes from "./utils/PrivateRoutes";

//Pages
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Explore from "./pages/Home/Explore";
import Inbox from "./pages/Home/Inbox";
import Profile from "./pages/Home/Profile";
import Saved from "./pages/Home/Profile/Saved";
import Tagged from "./pages/Home/Profile/Tagged";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path="/" exact>
          <Route element={<Explore />} path="explore" exact />
          <Route element={<Inbox />} path="inbox" exact />
          <Route element={<Profile />} path="profile" exact>
            <Route element={<Saved />} path="saved" exact />
            <Route element={<Tagged />} path="tagged" exact />
          </Route>
        </Route>
      </Route>
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}

export default App;
