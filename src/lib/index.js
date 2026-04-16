import FriendContextProvider from "@/context/FriendContext";
import React from "react";

const Providers = ({ children }) => {
  return <FriendContextProvider>{children}</FriendContextProvider>;
};

export default Providers;
