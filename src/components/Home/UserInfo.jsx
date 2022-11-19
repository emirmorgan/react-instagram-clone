import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../firebase";

import HomeFooter from "./HomeFooter";

const UserInfo = () => {
  const user = useSelector((state) => state.data.user);

  const logoutHandle = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col w-full max-w-[319px]">
      <div className="flex items-center mt-4 mb-[10px]">
        <img
          src={user.photoSrc}
          width="56px"
          height="56px"
          className="rounded-full"
        ></img>
        <div className="flex flex-col ml-3">
          <Link to={user.username}>
            <span className="text-sm font-semibold text-gray-800">
              {user.username}
            </span>
          </Link>
          <span className="text-sm mt-1">{user.fullName}</span>
        </div>
        <span
          className="font-semibold text-sm text-blue-500 cursor-pointer ml-auto active:text-blue-400"
          onClick={logoutHandle}
        >
          Log out
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center py-1">
          <span className="text-sm font-semibold text-gray-400">
            Suggestions For You
          </span>
          <span className="text-xs font-semibold ml-auto cursor-pointer">
            See All
          </span>
        </div>
        <div className="flex flex-col py-1">
          <div className="animate-pulse">
            <div className="flex items-center">
              <svg
                className="mr-2 w-10 h-10 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
              <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
              <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
          <div className="animate-pulse">
            <div className="flex items-center">
              <svg
                className="mr-2 w-10 h-10 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
              <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
              <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
          <div className="animate-pulse">
            <div className="flex items-center">
              <svg
                className="mr-2 w-10 h-10 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
              <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
              <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default UserInfo;
