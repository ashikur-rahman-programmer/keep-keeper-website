"use client";
import React from "react";
import StatsCards from "./StatsCards";
import useFriends from "@/hook/useFriends";

const AllFriends = () => {
  const { friends, loading } = useFriends();
  console.log(friends, loading);

  return (
    <div className="container mx-auto">
      <StatsCards friends={friends} />
      <h2>this is friends page</h2>
    </div>
  );
};

export default AllFriends;
