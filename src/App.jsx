import { Route, Routes } from "react-router-dom";

//Utils
import PrivateRoutes from "./utils/PrivateRoutes";

//Pages
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Inbox from "./pages/Inbox";
import Profile from "./pages/Profile";
import Saved from "./pages/Profile/Saved";
import Tagged from "./pages/Profile/Tagged";
import Layout from "./pages/Layout";
import Posts from "./pages/Profile/Posts";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Layout />} path="/" exact>
          <Route element={<Home />} path="" exact />
          <Route element={<Explore />} path="explore" exact />
          <Route element={<Inbox />} path="inbox" exact />
          <Route element={<Profile />} path=":username" exact>
            <Route element={<Posts />} path="" exact />
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
