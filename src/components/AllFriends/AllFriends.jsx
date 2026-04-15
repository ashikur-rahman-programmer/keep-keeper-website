"use client";
import React from "react";
import useFriends from "@/hook/useFriends";

const AllFriends = () => {
  const { friends, loading } = useFriends();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h2>this is friends page</h2>
    </div>
  );
};

export default AllFriends;
