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
  const [search, setSearch] = useState("");

  if (loading) {
    return (
      <div className="flex justify-center items-center py-60">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }

  const searchText = search.toLowerCase();

  const filteredData = active
    .filter((i) => (filtered === "all" ? true : i.type === filtered))
    .filter((item) => {
      const name = item.name.toLowerCase();
      const type = item.type.toLowerCase();

      return name.includes(searchText) || type.includes(searchText);
    });

  return (
    <div className="bg-base-200 px-2">
      <div className="container mx-auto py-20 space-y-6">
        {/* title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-black">
          Timeline
        </h2>

        {/* dropdown and search*/}
        <div className="flex justify-between items-center flex-col md:flex-row gap-4">
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
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
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
