import React from "react";

const StatsCards = ({ friends }) => {
  return (
    <div className="container mx-auto flex justify-center lg:justify-between items-center gap-6 py-10 flex-wrap">
      <div className="p-8 space-y-2.5 text-center shadow-md rounded-xl w-full sm:w-[260px] bg-white border border-gray-100">
        <p className="font-bold text-3xl">{friends.length}</p>
        <p className="text-gray-400">Total Friends</p>
      </div>

      <div className="p-8 space-y-2.5 text-center shadow-md rounded-xl w-full sm:w-[260px] bg-white border border-gray-100">
        <p className="font-bold text-3xl">3</p>
        <p className="text-gray-400">On Track</p>
      </div>

      <div className="p-8 space-y-2.5 text-center shadow-md rounded-xl w-full sm:w-[260px] bg-white border border-gray-100">
        <p className="font-bold text-3xl">6</p>
        <p className="text-gray-400">Need Attention</p>
      </div>

      <div className="p-8 space-y-2.5 text-center shadow-md rounded-xl w-full sm:w-[260px] bg-white border border-gray-100">
        <p className="font-bold text-3xl">12</p>
        <p className="text-gray-400">Interactions This Month</p>
      </div>
    </div>
  );
};

export default StatsCards;
