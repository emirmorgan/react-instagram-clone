import React from "react";
import Icons from "../../assets/Icons";

const NotificationsContent = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex px-6 pt-4 pb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>
      <div className="flex flex-col h-full items-center justify-center px-8">
        <div className="flex items-center justify-center rounded-full border border-black w-[48px] h-[48px] ">
          <Icons name="notifications" size={28} />
        </div>
        <h2 className="text-sm mt-4">Activity On Your Posts</h2>
        <h3 className="text-sm mt-4 text-center">
          When someone likes or comments on one of your posts, you'll see it
          here.
        </h3>
      </div>
    </div>
  );
};

export default NotificationsContent;
