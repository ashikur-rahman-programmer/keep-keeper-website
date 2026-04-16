"use client";
import React, { createContext, useState } from "react";

export const allFriendsContext = createContext();

const FriendContextProvider = ({ children }) => {
  const [active, setActive] = useState([]);
  const data = { active, setActive };

  return (
    <allFriendsContext.Provider value={data}>
      {children}
    </allFriendsContext.Provider>
  );
};

export default FriendContextProvider;
