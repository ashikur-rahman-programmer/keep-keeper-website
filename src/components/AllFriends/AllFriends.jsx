"use client";
import React from "react";
import useFriends from "@/hook/useFriends";
import FriendCard from "./FriendCard";

const AllFriends = () => {
  // async
  // const res = await fetch("/friendsData.json");
  // const friends = await res.json();
  //ei vabe korle url path vul dekhay .. but localhost add korle deploy a problem tai client side korei data fetch korlam.. direct import koreo kora jay but fetch to samne lagbe tai eta diyei try kori ...

  const { friends, loading } = useFriends();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-40">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-10">
      <h3 className="text-3xl font-semibold ">Your Friends</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
