"use client";
import { allFriendsContext } from "@/context/FriendContext";
import React, { useContext } from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms, MdOutlineWifiCalling3 } from "react-icons/md";
import { toast } from "react-toastify";

const ToggleBtn = ({ friend }) => {
  const { active, setActive } = useContext(allFriendsContext);

  // console.log(active);
  const handleToggleBtn = (type) => {
    const newData = {
      ...friend,
      type,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };
    setActive([...active, newData]);
    toast.success(`${type} with ${friend.name} added to timeline`);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <button
        onClick={() => handleToggleBtn("call")}
        className="flex flex-col items-center justify-center py-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
      >
        <MdOutlineWifiCalling3 size={32} />
        <span className="mt-2 text-lg font-semibold">Call</span>
      </button>

      <button
        onClick={() => handleToggleBtn("text")}
        className="flex flex-col items-center justify-center py-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
      >
        <MdOutlineTextsms size={32} />
        <span className="mt-2 text-lg font-semibold">Text</span>
      </button>

      <button
        onClick={() => handleToggleBtn("video")}
        className="flex flex-col items-center justify-center py-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
      >
        <IoVideocamOutline size={32} />
        <span className="mt-2 text-lg font-semibold">Video</span>
      </button>
    </div>
  );
};

export default ToggleBtn;
