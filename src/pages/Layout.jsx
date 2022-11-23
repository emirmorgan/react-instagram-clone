import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

import { createPost, logout } from "../firebase";
import { addPost } from "../redux/dataSlice";

//Assets
import Icons from "../assets/Icons";

//Components
import NotificationsContent from "../components/Layout/NotificationsContent";
import SearchContent from "../components/Layout/SearchContent";
import Loading from "../components/Loading";

const Layout = () => {
  const currentUser = useSelector((state) => state.data.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalRef = useRef();

  const [tabType, setTabType] = useState("");
  const [isTabActive, setTabActive] = useState(false);
  const [isMenuActive, setMenuActive] = useState(false);
  const [isModalActive, setModalActive] = useState(false);

  const [postImage, setPostImage] = useState("");
  const [postDesc, setPostDesc] = useState("");

  if (currentUser === null) {
    return <Loading />;
  }

  const postHandle = (e) => {
    e.preventDefault();

    const postLikes = Math.floor(Math.random() * 1000);

    createPost(currentUser, postImage, postDesc, postLikes);
    dispatch(addPost({ postImage, postDesc, postLikes }));
  };

  const tabHandle = (tab) => {
    if (tab !== null) {
      setTabActive((current) => !current);
      setTabType(tab);
      setMenuActive(false);
    }
  };

  const navHandle = () => {
    tabHandle(isTabActive ? tabType : null);
    setMenuActive(false);
  };

  const logoutHandle = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex w-full overflow-hidden">
      <aside
        className={
          "fixed z-[50] bg-white h-screen w-[73px] border-r transition-[width] duration-250 select-none " +
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
              <NavLink to="/" className="w-full text-black" onClick={navHandle}>
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons
                        name={
                          isActive &&
                          isTabActive === false &&
                          isModalActive === false
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
                          (isActive &&
                          isTabActive === false &&
                          isModalActive === false
                            ? " font-semibold"
                            : " ")
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
                        isTabActive &&
                        tabType === "search" &&
                        isModalActive === false
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
                        (isTabActive &&
                        tabType === "search" &&
                        isModalActive === false
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
                onClick={navHandle}
              >
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons
                        name={
                          isActive &&
                          isTabActive === false &&
                          isModalActive === false
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
                          (isActive && isModalActive === false
                            ? " font-semibold"
                            : "")
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
                onClick={navHandle}
              >
                {({ isActive }) => (
                  <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                    <div className="group-hover:scale-105 transition-all duration-150">
                      <Icons
                        name={
                          isActive &&
                          isTabActive === false &&
                          isModalActive === false
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
                          (isActive && isModalActive === false
                            ? " font-semibold"
                            : "")
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
                        isTabActive &&
                        tabType === "notifications" &&
                        isModalActive === false
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
              <div
                className="w-full text-black cursor-pointer"
                onClick={() => {
                  setModalActive((current) => !current);
                  setMenuActive(false);
                }}
              >
                <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                  <div className="group-hover:scale-105 transition-all duration-150">
                    <Icons name={isModalActive ? "createActive" : "create"} />
                  </div>
                  <div
                    className={
                      "hidden items-center " + (isTabActive ? "" : "lg:flex")
                    }
                  >
                    <span
                      className={
                        "pl-4 text-[15px] tracking-wide" +
                        (isModalActive ? " font-semibold" : "")
                      }
                    >
                      Create
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <NavLink
                to={`/${currentUser.username}`}
                className="w-full text-black"
                onClick={navHandle}
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
                          (isActive && isModalActive === false
                            ? " font-semibold"
                            : "")
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
            <div className="flex relative">
              <div
                className="w-full text-black cursor-pointer"
                type="button"
                onClick={() => setMenuActive((current) => !current)}
              >
                <div className="flex w-full hover:bg-slate-50 group rounded-full p-3 my-2">
                  <div className="group-hover:scale-105 transition-all duration-150">
                    <Icons name={false ? "menuActive" : "menu"} />
                  </div>
                  <div
                    className={
                      "hidden items-center " + (isTabActive ? "" : "lg:flex")
                    }
                  >
                    <span
                      className={
                        "pl-4 text-[15px] tracking-wide" +
                        (false ? " font-semibold" : "")
                      }
                    >
                      More
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={
                  "absolute bottom-16 w-[224px] bg-transparent divide-y divide-gray-100" +
                  (isMenuActive ? "" : " hidden")
                }
              >
                <div className="flex flex-col shadow-xl">
                  <Link to="/">
                    <div className="flex justify-between rounded-t py-2 px-4 bg-white hover:bg-gray-100 border-b border-gray-300">
                      <div>
                        <span className="text-black">Settings</span>
                      </div>
                      <div>
                        <Icons name="settings" />
                      </div>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="flex justify-between py-2 px-4 bg-white hover:bg-gray-100 border-b border-gray-300">
                      <div>
                        <span className="text-black">Saved</span>
                      </div>
                      <div>
                        <Icons name="saved" />
                      </div>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="flex justify-between rounded-b py-2 px-4 bg-white hover:bg-gray-100 border-b border-gray-300">
                      <div>
                        <span className="text-black">Report a problem</span>
                      </div>
                      <div>
                        <Icons name="report" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col mt-3 shadow-xl">
                  <Link to="/">
                    <div className="flex rounded-t py-2 px-4 bg-white hover:bg-gray-100 border-b border-gray-300">
                      <span className="text-black">Switch accounts</span>
                    </div>
                  </Link>
                  <Link to="/">
                    <div
                      className="flex rounded-b py-2 px-4 bg-white hover:bg-gray-100 border-gray-300"
                      onClick={() => logoutHandle()}
                    >
                      <span className="text-black">Log out</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "absolute w-[286px] h-screen top-0 left-[73px] rounded-r-3xl bg-white shadow-[6px_0_24px_-12px_rgba(0,0,0,0.15)]" +
            (isTabActive ? "" : " lg:left-[244px] hidden")
          }
        >
          {tabType === "search" ? <SearchContent /> : <NotificationsContent />}
        </div>
      </aside>
      <main className="w-full ml-[73px] lg:ml-[244px]">
        <Outlet />
      </main>
      <div
        className={
          isModalActive
            ? "bg-black bg-opacity-60 fixed z-[60] w-full h-full"
            : "hidden"
        }
        onClick={(e) =>
          !modalRef.current.contains(e.target) ? setModalActive(false) : null
        }
      >
        <div className="flex items-center justify-center h-full">
          <div
            className="flex flex-col bg-white rounded-lg w-5/6 md:w-3/6 min-w-[300px] max-w-[600px] h-1/2 lg:h-5/6 min-h-[400px] max-h-[550px]"
            ref={modalRef}
          >
            <div className="flex items-center justify-center border-b p-2">
              <h1 className="text-base font-semibold">Create new post</h1>
            </div>
            <div className="flex flex-col justify-evenly items-center h-full px-6 py-2">
              <div className="">
                <Icons name="photos" size="128" />
              </div>
              <form
                id="post-form"
                className="flex flex-col w-5/6 gap-5 mb-3"
                onSubmit={postHandle}
              >
                <div className="flex flex-col gap-1">
                  <label>Post Image Link</label>
                  <input
                    type="text"
                    placeholder=".jpg or .png file link"
                    className="border border-gray-400 rounded-lg w-full px-2 focus:outline-none"
                    value={postImage}
                    onChange={(e) => setPostImage(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label>Post Description</label>
                  <input
                    type="text"
                    placeholder="No comment"
                    className="border border-gray-400 rounded-lg w-full px-2 focus:outline-none"
                    value={postDesc}
                    onChange={(e) => setPostDesc(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="flex gap-2 border-t border-gray-400 p-4">
              <button
                type="submit"
                form="post-form"
                className="border border-gray-300 shadow-lg bg-gray-100 text-gray-500 rounded py-2 px-5 hover:bg-blue-500 hover:text-white transition-colors ease-linear"
              >
                Post
              </button>
              <button
                onClick={() => setModalActive(false)}
                className="border border-gray-300 shadow-lg bg-gray-100 text-gray-500 rounded py-2 px-5 hover:bg-red-500 hover:text-white transition-colors ease-linear"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
