import { Link } from "react-router-dom";
import { logout } from "../firebase";

const logoutHandle = () => {
  logout();
};

const Home = () => {
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
