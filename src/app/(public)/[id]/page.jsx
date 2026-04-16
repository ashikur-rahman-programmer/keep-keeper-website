import friends from "@/../public/friendsData.json";

import React from "react";

const FriendsDetails = async ({ params }) => {
  const { id } = await params;
  const friend = friends.find((f) => f.id === parseInt(id));
  console.log(friend, "friend ");
  return (
    <div>
      <h2>this is friends details</h2>
    </div>
  );
};

export default FriendsDetails;
