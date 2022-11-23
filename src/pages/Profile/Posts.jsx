import { useSelector } from "react-redux";
import Icons from "../../assets/Icons";

const Posts = () => {
  const user = useSelector((state) => state.data.user);

  return (
    <div className="flex flex-wrap">
      {user.posts
        .slice(0)
        .reverse()
        .map((post, id) => (
          <div
            key={id}
            className="relative flex-shrink-0 flex-grow-0 group basis-1/2 md:basis-1/3 h-[260px] p-1"
          >
            <div className="hidden absolute bg-black w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)] group-hover:block group-hover:bg-opacity-50 bg-opacity-0 cursor-pointer text-white">
              <div className="flex items-center justify-center w-full h-full">
                <span className="flex gap-2">
                  <Icons name="notificationsActive" />
                  {post.likes}
                </span>
              </div>
            </div>
            <img
              src={post.imgSrc}
              alt={post.desc}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
    </div>
  );
};

export default Posts;
