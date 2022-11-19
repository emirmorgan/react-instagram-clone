import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Icons from "../../assets/Icons";

const postData = [
  {
    id: 1,
    imgSrc: "https://images8.alphacoders.com/547/547511.jpg",
    desc: "Cosmic Blacksmith",
    likes: 999,
  },
  {
    id: 2,
    imgSrc: "https://images7.alphacoders.com/553/553260.jpg",
    desc: "Bio Hand",
    likes: 888,
  },
  {
    id: 3,
    imgSrc: "https://images4.alphacoders.com/562/562252.jpg",
    desc: "Reborn",
    likes: 777,
  },
];

const Posts = () => {
  const user = useSelector((state) => state.data.user);

  return (
    <div className="flex flex-col mt-4">
      {postData.map((post) => (
        <div className="flex flex-col bg-white rounded-lg border mb-3">
          <div className="flex my-2 ml-3 mr-1">
            <div className="flex cursor-pointer items-center">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-[36px] h-[36px] rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500">
                  <div className="flex items-center justify-center w-[32px] h-[32px] bg-white rounded-full">
                    <img
                      className="rounded-full"
                      src={user.photoSrc}
                      alt="Story Image"
                      width="28px"
                      height="28px"
                    />
                  </div>
                </div>
              </div>
              <span className="ml-[10px] text-sm font-semibold">
                {user.username}
              </span>
            </div>
            <button className="p-2 ml-auto bg-transparent">
              <Icons name="more" />
            </button>
          </div>
          <div className="border-t min-h-[587px] h-[587px] max-h-[587px] w-full max-w-[468px]">
            <img
              className="w-full h-full object-cover"
              src={post.imgSrc}
              alt={post.desc}
            />
          </div>
          <div className="flex px-1 pb-[6px] mt-1">
            <button className="p-2 hover:opacity-70">
              <Icons name="notifications" />
            </button>
            <button className="p-2 hover:opacity-70">
              <Icons name="messages" />
            </button>
            <button className="p-2 hover:opacity-70 ml-auto">
              <Icons name="saved" />
            </button>
          </div>
          <div className="flex flex-col px-3">
            <span className="text-sm font-semibold mb-2">
              {post.likes} Likes
            </span>
            <div className="flex mb-2 break-words">
              <p className="text-sm break-all">
                <Link to={user.username} className="h-max">
                  <span className="font-semibold text-sm text-gray-800 mr-1">
                    {user.username}
                  </span>
                </Link>
                {post.desc}
              </p>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-[10px] text-gray-500">1 HOURS AGO</span>
              <span className="text-xs font-semibold cursor-pointer ml-2">
                See translation
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
