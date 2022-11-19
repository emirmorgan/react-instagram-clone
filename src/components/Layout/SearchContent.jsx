import React from "react";

const SearchContent = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col border-b">
        <div className="my-2 pt-3 pb-8 px-6">
          <h1 className="text-xl font-semibold">Search</h1>
        </div>
        <div className="mb-6 mx-4">
          <input
            className="w-full bg-gray-100 rounded-lg focus:outline-none px-4 py-2"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex flex-col h-screen px-6 py-4">
        <div className="flex">
          <h2 className="font-semibold text-sm"></h2>
        </div>
        <div className="flex flex-col h-full">
          <div className="font-semibold text-sm">Recent</div>
          <div className="flex flex-col h-full items-center justify-center">
            <span className="font-semibold text-xs text-gray-400">
              No recent searches.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
