import { useSelector } from "react-redux";
import Icons from "../assets/Icons";

const Inbox = () => {
  const user = useSelector((state) => state.data.user);

  return (
    <div className="page_wrapper w-full h-full">
      <div className="flex justify-center items-stretch h-full">
        <div className="flex bg-white rounded border w-[350px] md:w-full max-w-[935px]">
          <div className="flex flex-col w-[350px] min-w-[350px] border-r">
            <div className="flex items-center justify-center h-[60px] border-b px-5">
              <div className="flex items-center cursor-pointer">
                <span className="font-semibold">{user.username}</span>
                <div className="p-2">
                  <Icons name="downArrow" size="20" />
                </div>
              </div>
            </div>
            <div className="flex border-b">
              <div className="cursor-pointer p-3 border-b border-black">
                <span className="text-sm font-semibold">PRIMARY</span>
              </div>
              <div className="cursor-pointer p-3">
                <span className="text-sm font-semibold text-gray-400">
                  GENERAL
                </span>
              </div>
            </div>
            <div className="flex flex-col pt-2">
              <div className="py-2 px-4">
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
                  <div className="flex flex-col gap-1">
                    <div className="w-28 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
                    <div className="w-20 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
                  </div>
                </div>
              </div>
              <div className="py-2 px-4">
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
                  <div className="flex flex-col gap-1">
                    <div className="w-28 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
                    <div className="w-20 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
                  </div>
                </div>
              </div>
              <div className="py-2 px-4">
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
                  <div className="flex flex-col gap-1">
                    <div className="w-28 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
                    <div className="w-20 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
                  </div>
                </div>
              </div>
              <div className="py-2 px-4">
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
                  <div className="flex flex-col gap-1">
                    <div className="w-28 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
                    <div className="w-20 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center h-full w-full">
            <svg
              aria-label="Direct"
              class="_ab6-"
              color="#262626"
              fill="#262626"
              height="96"
              role="img"
              viewBox="0 0 96 96"
              width="96"
            >
              <circle
                cx="48"
                cy="48"
                fill="none"
                r="47"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="69.286"
                x2="41.447"
                y1="33.21"
                y2="48.804"
              ></line>
              <polygon
                fill="none"
                points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
            <span className="mt-4 text-gray-500 text-xl">Your messages</span>
            <span className="mt-2 text-sm text-gray-400">
              Send private photos and messages to a friend or group.
            </span>
            <button className="rounded bg-[#0095f6] text-white text-base leading-[18px] px-[9px] py-[5px] active:opacity-90 focus:outline-none mt-6">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
