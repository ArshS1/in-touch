import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <div>
        <img className="rounded-full border p-[2px] w-16 h-16" src="" alt="" />
      </div>

      <div className="flex-1 mx-4 ">
        <h2 className="font-bold">arsh</h2>
        <h3 className="text-sm text-gray-400">Welcome to inTouch</h3>
      </div>

      <button className="text-sm font-semibold text-blue-400">Log Out</button>
    </div>
  );
}

export default MiniProfile;
