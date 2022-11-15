import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import Icons from "../../assets/Icons";

import { logout } from "../../firebase";
import { setAuth } from "../../redux/dataSlice";

const Home = () => {
  const dispatch = useDispatch();

  const logoutHandle = () => {
    dispatch(setAuth(false));
    logout();
  };

  return (
    <div className="flex w-full">
      <aside className="fixed bg-white h-screen w-[73px] lg:w-[244px] border-r">
        <div className="flex flex-col h-screen w-full px-3 pt-2 pb-5">
          <div className="min-h-[92px]">
            <div className="flex lg:hidden items-center justify-center mt-3 pb-[23px]">
              <NavLink to="/" className="w-full">
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <Icons name="instagram" />
                  </div>
                )}
              </NavLink>
            </div>
            <NavLink to="/">
              {({ isActive }) => (
                <div className="hidden lg:flex items-center justify-start pb-[16px] pt-[25px] px-3 h-full">
                  <Icons name="instagramText" />
                </div>
              )}
            </NavLink>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <NavLink to="/" className="w-full text-black">
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons name={isActive ? "homeActive" : "home"} />
                    </div>
                    <div className="hidden items-center lg:flex">
                      <span
                        className={"pl-4 " + (isActive ? " font-semibold" : "")}
                      >
                        Home
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="flex">
              <NavLink to="search" className="w-full text-black">
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons name={isActive ? "searchActive" : "search"} />
                    </div>
                    <div className="hidden items-center lg:flex">
                      <span
                        className={"pl-4 " + (isActive ? " font-semibold" : "")}
                      >
                        Search
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="flex">
              <NavLink to="explore" className="w-full text-black">
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons name={isActive ? "exploreActive" : "explore"} />
                    </div>

                    <div className="hidden items-center lg:flex">
                      <span
                        className={"pl-4 " + (isActive ? " font-semibold" : "")}
                      >
                        Explore
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="flex">
              <NavLink to="inbox" className="w-full text-black">
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons name={isActive ? "messagesActive" : "messages"} />
                    </div>

                    <div className="hidden items-center lg:flex">
                      <span
                        className={"pl-4 " + (isActive ? " font-semibold" : "")}
                      >
                        Messages
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="flex">
              <NavLink to="notifications" className="w-full text-black">
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons
                        name={
                          isActive ? "notificationsActive" : "notifications"
                        }
                      />
                    </div>

                    <div className="hidden items-center lg:flex">
                      <span
                        className={"pl-4 " + (isActive ? " font-semibold" : "")}
                      >
                        Notifications
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="flex">
              <NavLink to="create" className="w-full text-black">
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons name={isActive ? "createActive" : "create"} />
                    </div>

                    <div className="hidden items-center lg:flex">
                      <span
                        className={"pl-4 " + (isActive ? " font-semibold" : "")}
                      >
                        Create
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="flex">
              <NavLink to="/profile" className="w-full text-black">
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <img
                      src="https://img.icons8.com/windows/32/null/user-male-circle.png"
                      className="group-hover:scale-105 transition-all duration-150 rounded-full"
                      width="24"
                      height="24"
                    />
                    <div className="hidden items-center lg:flex">
                      <span
                        className={"pl-4 " + (isActive ? " font-semibold" : "")}
                      >
                        Profile
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex">
              <NavLink
                to="more"
                className="w-full text-black"
                onClick={() => logoutHandle()}
              >
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons name={isActive ? "menuActive" : "menu"} />
                    </div>
                    <div className="hidden items-center lg:flex">
                      <span
                        className={"pl-4 " + (isActive ? " font-semibold" : "")}
                      >
                        More
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </aside>
      <main className="w-full ml-[73px] lg:ml-[244px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
