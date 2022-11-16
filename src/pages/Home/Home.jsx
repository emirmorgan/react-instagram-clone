import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../firebase";
import { setAuth } from "../../redux/dataSlice";

//Assets
import Icons from "../../assets/Icons";

//Components
import NotificationsContent from "../../components/Home/NotificationsContent";
import SearchContent from "../../components/Home/SearchContent";
import Loading from "../../components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isTabActive, setTabActive] = useState(false);
  const [tabType, setTabType] = useState("");
  const currentUser = useSelector((state) => state.data.user);

  if (currentUser === null) {
    return <Loading />;
  }

  const tabHandle = (tab) => {
    if (tab !== null) {
      setTabActive((current) => !current);
      setTabType(tab);
    }
  };

  const logoutHandle = () => {
    dispatch(setAuth(false));
    logout();
    navigate("/login");
  };

  return (
    <div className="flex w-full">
      <aside
        className={
          "fixed bg-white h-screen w-[73px] border-r transition-[width] duration-250 select-none " +
          (isTabActive ? "" : "lg:w-[244px]")
        }
      >
        <div className="flex flex-col h-screen w-full px-3 pt-2 pb-5">
          <div className="min-h-[92px]">
            <div
              className={
                "flex items-center justify-center mt-3 pb-[16px] " +
                (isTabActive ? "" : "lg:hidden")
              }
            >
              <NavLink to="/" className="w-full">
                <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                  <Icons name="instagram" />
                </div>
              </NavLink>
            </div>
            <NavLink to="/">
              <div
                className={
                  "hidden h-full items-center justify-start pb-[16px] pt-[25px] px-3 " +
                  (isTabActive ? "" : "lg:flex ")
                }
              >
                <Icons name="instagramText" />
              </div>
            </NavLink>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <NavLink
                to="/"
                className="w-full text-black"
                onClick={() => tabHandle(isTabActive ? tabType : null)}
              >
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons
                        name={
                          isActive && isTabActive === false
                            ? "homeActive"
                            : "home"
                        }
                      />
                    </div>
                    <div
                      className={
                        "hidden items-center " + (isTabActive ? "" : "lg:flex")
                      }
                    >
                      <span
                        className={
                          "pl-4 text-[15px] tracking-wide" +
                          (isActive ? " font-semibold" : " ")
                        }
                      >
                        Home
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="flex">
              <div
                className="w-full text-black cursor-pointer"
                onClick={() => tabHandle("search")}
              >
                <div
                  className={
                    "flex w-full hover:bg-slate-50 group rounded-full p-3 my-2" +
                    (isTabActive && tabType === "search" ? " bg-gray-100" : "")
                  }
                >
                  <div className="group-hover:scale-105 transition-all duration-150">
                    <Icons
                      name={
                        isTabActive && tabType === "search"
                          ? "searchActive"
                          : "search"
                      }
                    />
                  </div>
                  <div
                    className={
                      "hidden items-center " + (isTabActive ? "" : "lg:flex")
                    }
                  >
                    <span
                      className={
                        "pl-4 text-[15px] tracking-wide" +
                        (isTabActive && tabType === "search"
                          ? " font-semibold"
                          : "")
                      }
                    >
                      Search
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <NavLink
                to="explore"
                className="w-full text-black"
                onClick={() => tabHandle(isTabActive ? tabType : null)}
              >
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons
                        name={
                          isActive && isTabActive === false
                            ? "exploreActive"
                            : "explore"
                        }
                      />
                    </div>

                    <div
                      className={
                        "hidden items-center " + (isTabActive ? "" : "lg:flex")
                      }
                    >
                      <span
                        className={
                          "pl-4 text-[15px] tracking-wide" +
                          (isActive ? " font-semibold" : "")
                        }
                      >
                        Explore
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="flex">
              <NavLink
                to="inbox"
                className="w-full text-black"
                onClick={() => tabHandle(isTabActive ? tabType : null)}
              >
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons
                        name={
                          isActive && isTabActive === false
                            ? "messagesActive"
                            : "messages"
                        }
                      />
                    </div>

                    <div
                      className={
                        "hidden items-center " + (isTabActive ? "" : "lg:flex")
                      }
                    >
                      <span
                        className={
                          "pl-4 text-[15px] tracking-wide" +
                          (isActive ? " font-semibold" : "")
                        }
                      >
                        Messages
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="flex">
              <div
                className="w-full text-black cursor-pointer"
                onClick={() => tabHandle("notifications")}
              >
                <div
                  className={
                    "flex w-full hover:bg-slate-50 group rounded-full p-3 my-2" +
                    (isTabActive && tabType === "notifications"
                      ? " bg-gray-100"
                      : "")
                  }
                >
                  <div className="group-hover:scale-105 transition-all duration-150">
                    <Icons
                      name={
                        isTabActive && tabType === "notifications"
                          ? "notificationsActive"
                          : "notifications"
                      }
                    />
                  </div>
                  <div
                    className={
                      "hidden items-center " + (isTabActive ? "" : "lg:flex")
                    }
                  >
                    <span
                      className={
                        "pl-4 text-[15px] tracking-wide" +
                        (isTabActive && tabType === "notifications"
                          ? " font-semibold"
                          : "")
                      }
                    >
                      Notifications
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <NavLink
                to="create"
                className="w-full text-black"
                onClick={() => tabHandle(isTabActive ? tabType : null)}
              >
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons name={isActive ? "createActive" : "create"} />
                    </div>
                    <div
                      className={
                        "hidden items-center " + (isTabActive ? "" : "lg:flex")
                      }
                    >
                      <span
                        className={
                          "pl-4 text-[15px] tracking-wide" +
                          (isActive ? " font-semibold" : "")
                        }
                      >
                        Create
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="flex">
              <NavLink
                to="/profile"
                className="w-full text-black"
                onClick={() => tabHandle(isTabActive ? tabType : null)}
              >
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <img
                      src={currentUser.photoSrc}
                      className="group-hover:scale-105 transition-all duration-150 rounded-full"
                      width="24"
                      height="24"
                    />
                    <div
                      className={
                        "hidden items-center " + (isTabActive ? "" : "lg:flex")
                      }
                    >
                      <span
                        className={
                          "pl-4 text-[15px] tracking-wide" +
                          (isActive ? " font-semibold" : "")
                        }
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
                    <div
                      className={
                        "hidden items-center " + (isTabActive ? "" : "lg:flex")
                      }
                    >
                      <span
                        className={
                          "pl-4 text-[15px] tracking-wide" +
                          (isActive ? " font-semibold" : "")
                        }
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
        <div
          className={
            "absolute w-[244px] h-screen top-0 left-[73px] bg-white shadow-[6px_0_24px_-12px_rgba(0,0,0,0.15)]" +
            (isTabActive ? "" : "lg:left-[244px] hidden")
          }
        >
          {tabType === "search" ? <SearchContent /> : <NotificationsContent />}
        </div>
      </aside>
      <main className="w-full ml-[73px] lg:ml-[244px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
