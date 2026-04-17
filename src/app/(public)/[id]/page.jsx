import friends from "@/../public/friendsData.json";
import ToggleBtn from "@/components/ToggleBtn/ToggleBtn";
import Image from "next/image";

import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import {
  MdOutlineNotificationsPaused,
  MdOutlineTextsms,
  MdOutlineWifiCalling3,
} from "react-icons/md";
import { PiArchiveBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

const FriendsDetails = async ({ params }) => {
  const { id } = await params;
  const friend = friends.find((f) => f.id === parseInt(id));
  return (
    <div className="bg-base-200 px-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-20 ">
        {/* left side  */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white shadow-md rounded-2xl p-6 w-full  text-center border border-white">
            <div className="flex justify-center">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={96}
                height={96}
                className="rounded-full object-cover mx-auto"
              />
            </div>

            <h2 className="text-xl font-semibold mt-4">{friend.name}</h2>

            <div className="mt-4">
              <span
                className={`px-4 py-1 text-sm rounded-full text-white font-medium ${
                  friend.status === "overdue"
                    ? "bg-[#EF4444]"
                    : friend.status === "on-track"
                      ? "bg-[#244D3F]"
                      : "bg-[#EFAD44]"
                }`}
              >
                {friend.status}
              </span>
            </div>

            <div className="mt-3 flex justify-center flex-wrap gap-2">
              {friend.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <p className="text-gray-500 text-sm mt-1 line-clamp-2">{`"${friend.bio}"`}</p>
            <p className="text-gray-400 text-xs mt-1">Preferred: email</p>
          </div>
          <div className="space-y-4">
            <button className="btn w-full">
              <MdOutlineNotificationsPaused />
              Snooze 2 Weeks
            </button>
            <button className="btn w-full">
              <PiArchiveBold />
              Archive
            </button>
            <button className="btn w-full text-red-500 ">
              <RiDeleteBinLine />
              Delete
            </button>
          </div>
        </div>

        {/* right side  */}
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow px-4 py-10 text-center">
              <h2 className="text-2xl font-bold">62</h2>
              <p className="text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl shadow px-4 py-10 text-center">
              <h2 className="text-2xl font-bold">30</h2>
              <p className="text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow px-4 py-10 text-center">
              <h2 className="text-xl font-bold">Feb 27, 2026</h2>
              <p className="text-gray-500">Next Due</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow px-6 py-8 ">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Relationship Goal</h3>

              <button className="btn">Edit</button>
            </div>
            <p className="text-gray-500">
              Connect every <span className="font-bold">30 days</span>
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-4">Quick Check-In</h3>
            <ToggleBtn friend={friend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
