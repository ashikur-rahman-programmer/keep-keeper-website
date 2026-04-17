"use client";
import { allFriendsContext } from "@/context/FriendContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import callImg from "@/assets/call.png";
import textImg from "@/assets/text.png";
import videoImg from "@/assets/video.png";
import { RiFlagOffLine } from "react-icons/ri";
import useFriends from "@/hook/useFriends";

const TimelinePage = () => {
  const { active } = useContext(allFriendsContext);
  const { loading } = useFriends();
  const [filtered, setFiltered] = useState("all");

  if (loading) {
    return (
      <div className="flex justify-center items-center py-60">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }

  const filteredData =
    filtered === "all" ? active : active.filter((i) => i.type === filtered);

  // console.log(active);
  return (
    <div className="bg-base-200 px-2">
      <div className="container mx-auto py-20 space-y-6">
        {/* title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-black">
          Timeline
        </h2>
        {/* dropdown */}
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter Timeline <IoIosArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setFiltered("all")}>
              <a>All</a>
            </li>
            <li onClick={() => setFiltered("call")}>
              <a>Call</a>
            </li>
            <li onClick={() => setFiltered("text")}>
              <a>Text</a>
            </li>
            <li onClick={() => setFiltered("video")}>
              <a>Video</a>
            </li>
          </ul>
        </div>
        {/* cards */}
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4  bg-white shadow rounded-xl"
            >
              {/* sob image */}
              <div className="w-10 h-10">
                {item.type === "call" && (
                  <Image src={callImg} alt="call" width={40} height={40} />
                )}
                {item.type === "text" && (
                  <Image src={textImg} alt="text" width={40} height={40} />
                )}
                {item.type === "video" && (
                  <Image src={videoImg} alt="video" width={40} height={40} />
                )}
              </div>
              {/* content */}
              <div>
                <p className=" flex items-center gap-1 text-[16px]  text-gray-500">
                  <span className="text-black text-lg font-semibold capitalize">
                    {item.type}
                  </span>
                  <span>with {item.name}</span>
                </p>

                {/* date */}
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200 mb-4 text-3xl">
              <RiFlagOffLine />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-semibold text-gray-700">
              No Timeline Activity Found
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
