import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import Icons from "../assets/Icons";

import { updateUser } from "../firebase";
import { updateTheUser } from "../redux/dataSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.data.user);

  const [editModal, setEditModal] = useState(false);

  const [photoSrc, setImageSource] = useState(user.photoSrc);
  const [fullName, setFullName] = useState(user.fullName);
  const [bio, setBio] = useState(user.bio);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (photoSrc === "") {
      setImageSource("/src/assets/defaultPhoto.jpg");
    }

    if (fullName === "") {
      setFullName(user.fullName);
    }

    updateUser(user, photoSrc, fullName, bio);
    dispatch(updateTheUser({ photoSrc, fullName, bio }));
    setEditModal(false);
  };

  return (
    <>
      <Helmet>
        <title>{user.fullName + " (@" + user.username + ")"}</title>
      </Helmet>
      <div className="page_wrapper w-full h-full pt-[30px]">
        <div className="flex flex-col">
          <header className="flex mb-11">
            <div className="hidden sm:flex justify-center items-center flex-[1] mr-[30px]">
              <div className="md:w-[120px] lg:w-[140px] h-[80px] md:h-[120px] lg:h-[140px]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={user.photoSrc}
                  alt={user.username}
                />
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-start flex-[2]">
              <div className="flex items-center mb-5">
                <h2 className="text-2xl text-gray-800 font-sans">
                  {user.username}
                </h2>
                <div className="ml-5">
                  <button
                    className="bg-white border rounded font-semibold text-sm px-[9px] py-[5px] focus:outline-none"
                    type="button"
                    onClick={() => setEditModal((current) => !current)}
                  >
                    Edit profile
                  </button>
                </div>
                <div className="p-2 ml-[5px]">
                  <Icons name="settings" />
                </div>
              </div>
              <div className="flex gap-5 md:gap-10 mb-5">
                <div className="flex gap-1">
                  <span className="font-semibold">{user.posts.length}</span>
                  posts
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold">{user.followers.length}</span>
                  followers
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold">{user.following.length}</span>
                  following
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">{user.fullName}</span>
                <p className="max-w-[350px] overflow-hidden text-ellipsis">
                  {user.bio}
                </p>
              </div>
            </div>
          </header>
          <div className="border-t border-gray-300">
            <div className="flex justify-center items-center gap-[40px] h-[63px] md:gap-[60px]">
              <NavLink to={`/${user.username}`} end>
                {({ isActive }) => (
                  <div
                    className={
                      "flex items-center justify-center gap-[6px] text-black" +
                      (isActive
                        ? " h-[63px] border-t border-black"
                        : " h-[62px] opacity-50")
                    }
                  >
                    <svg
                      aria-label=""
                      color="#262626"
                      fill="#262626"
                      height="12"
                      role="img"
                      viewBox="0 0 24 24"
                      width="12"
                    >
                      <rect
                        fill="none"
                        height="18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        width="18"
                        x="3"
                        y="3"
                      ></rect>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="9.015"
                        x2="9.015"
                        y1="3"
                        y2="21"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="14.985"
                        x2="14.985"
                        y1="3"
                        y2="21"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="21"
                        x2="3"
                        y1="9.015"
                        y2="9.015"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="21"
                        x2="3"
                        y1="14.985"
                        y2="14.985"
                      ></line>
                    </svg>
                    <span className="text-xs font-semibold">POSTS</span>
                  </div>
                )}
              </NavLink>
              <NavLink to={`/${user.username}/saved`}>
                {({ isActive }) => (
                  <div
                    className={
                      "flex items-center justify-center h-[63px] gap-[6px] text-black" +
                      (isActive ? " border-t border-black" : " opacity-50")
                    }
                  >
                    <svg height="12" role="img" viewBox="0 0 24 24" width="12">
                      <polygon
                        fill="none"
                        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></polygon>
                    </svg>
                    <span className="text-xs font-semibold">SAVED</span>
                  </div>
                )}
              </NavLink>
              <NavLink to={`/${user.username}/tagged`}>
                {({ isActive }) => (
                  <div
                    className={
                      "flex items-center justify-center h-[63px] gap-[6px] text-black" +
                      (isActive ? " border-t border-black" : " opacity-50")
                    }
                  >
                    <svg height="12" role="img" viewBox="0 0 24 24" width="12">
                      <path
                        d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <circle
                        cx="12.072"
                        cy="11.075"
                        fill="none"
                        r="3.556"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></circle>
                    </svg>
                    <span className="text-xs font-semibold">TAGGED</span>
                  </div>
                )}
              </NavLink>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
      <div
        className={
          "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full" +
          (editModal ? " flex justify-center items-center" : " hidden")
        }
      >
        <div className="relative w-full max-w-2xl h-full md:h-auto shadow-xl">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Edit the profile
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setEditModal((current) => !current)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <form
                id="editForm"
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col">
                  <span>Profile Picture Source URL</span>
                  <input
                    type="text"
                    className="w-5/6 border border-gray-500 rounded-lg focus:outline-none px-2"
                    name="imgSource"
                    value={photoSrc}
                    onChange={(e) => setImageSource(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span>Full Name</span>
                  <input
                    type="text"
                    className="w-5/6 border border-gray-500 rounded-lg focus:outline-none px-2"
                    maxLength="36"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span>Biography</span>
                  <input
                    type="text"
                    className="w-5/6 border border-gray-500 rounded-lg focus:outline-none px-2"
                    maxLength="128"
                    name="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                type="submit"
                form="editForm"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
              <button
                onClick={() => setEditModal((current) => !current)}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
