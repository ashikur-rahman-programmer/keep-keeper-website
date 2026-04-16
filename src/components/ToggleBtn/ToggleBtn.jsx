"use client";
import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms, MdOutlineWifiCalling3 } from "react-icons/md";

const ToggleBtn = () => {
  const handleToggleBtn = () => {
    console.log("clicked");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <button
        onClick={handleToggleBtn}
        className="flex flex-col items-center justify-center py-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
      >
        <MdOutlineWifiCalling3 size={32} />
        <span className="mt-2 text-lg font-semibold">Call</span>
      </button>

      <button
        onClick={handleToggleBtn}
        className="flex flex-col items-center justify-center py-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
      >
        <MdOutlineTextsms size={32} />
        <span className="mt-2 text-lg font-semibold">Text</span>
      </button>

      <button
        onClick={handleToggleBtn}
        className="flex flex-col items-center justify-center py-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
      >
        <IoVideocamOutline size={32} />
        <span className="mt-2 text-lg font-semibold">Video</span>
      </button>
    </div>
  );
};

export default ToggleBtn;
