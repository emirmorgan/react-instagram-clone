import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../firebase";
import { setAuth } from "../redux/dataSlice";

const Home = () => {
  const dispatch = useDispatch();

  const logoutHandle = () => {
    dispatch(setAuth(false));
    logout();
  };

  return (
    <div>
      <Link to="/">
        <button
          type="button"
          onClick={() => logoutHandle()}
          className="bg-violet-500 text-white p-2"
        >
          Log out(test button)
        </button>
      </Link>
    </div>
  );
};

export default Home;
