import React from "react";
import MyLinks from "./MyLinks";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center gap-6 py-4">
        <h2 className="text-2xl font-bold">
          Keep<span className="text-[#244D3F]">Keeper</span>
        </h2>

        <ul className="flex justify-center items-center gap-4">
          <MyLinks />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
