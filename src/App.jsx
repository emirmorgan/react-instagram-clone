import { Route, Routes } from "react-router-dom";

//Utils
import AuthControl from "./utils/AuthControl";

//Pages
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<AuthControl />}>
        <Route element={<Home />} path="/" exact />
      </Route>
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}

export default App;
