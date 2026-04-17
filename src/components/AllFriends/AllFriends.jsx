import React from "react";
import FriendCard from "./FriendCard";
import fs from "fs/promises";
import path from "path";

const AllFriends = async () => {
  const filePath = path.join(process.cwd(), "public/friendsData.json");
  const file = await fs.readFile(filePath, "utf-8");
  const friends = JSON.parse(file);

  return (
    <div className="container mx-auto pt-10">
      <h3 className="text-3xl font-semibold ">Your Friends</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-6 pt-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
