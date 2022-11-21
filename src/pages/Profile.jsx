import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import Icons from "../assets/Icons";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const user = useSelector((state) => state.data.user);

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
                  className="w-full h-full rounded-full"
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
                  <button className="bg-white border rounded font-semibold text-sm px-[9px] py-[5px] focus:outline-none">
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        width="18"
                        x="3"
                        y="3"
                      ></rect>
                      <line
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="9.015"
                        x2="9.015"
                        y1="3"
                        y2="21"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="14.985"
                        x2="14.985"
                        y1="3"
                        y2="21"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="21"
                        x2="3"
                        y1="9.015"
                        y2="9.015"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                      <path
                        d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                      <circle
                        cx="12.072"
                        cy="11.075"
                        fill="none"
                        r="3.556"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
    </>
  );
};

export default Profile;
