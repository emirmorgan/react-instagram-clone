import { useSelector } from "react-redux";

const Stories = () => {
  const user = useSelector((state) => state.data.user);

  return (
    <div className="bg-white rounded-lg border py-4">
      <div className="flex gap-3 ml-3">
        <div className="flex flex-col items-center cursor-pointer">
          <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-white rounded-full">
              <img
                className="rounded-full"
                src={user.photoSrc}
                alt="Story Image"
                width="56px"
                height="56px"
              />
            </div>
          </div>
          <span className="mt-2 text-sm">{user.username}</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-white rounded-full">
              <img
                className="rounded-full"
                src={user.photoSrc}
                alt="Story Image"
                width="56px"
                height="56px"
              />
            </div>
          </div>
          <span className="mt-2 text-sm">{user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
