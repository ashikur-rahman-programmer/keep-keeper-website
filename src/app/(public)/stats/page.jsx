"use client";
import { allFriendsContext } from "@/context/FriendContext";
import useFriends from "@/hook/useFriends";
import React, { useContext } from "react";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const { active } = useContext(allFriendsContext);

  const { loading } = useFriends();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-60">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }

  const callCount = active.filter((i) => i.type === "call").length;
  const textCount = active.filter((i) => i.type === "text").length;
  const videoCount = active.filter((i) => i.type === "video").length;

  const isEmpty = callCount === 0 && textCount === 0 && videoCount === 0;

  const data = [
    { name: "Call", value: callCount, fill: "#244d3f" },
    { name: "Text", value: textCount, fill: "#7f36f5" },
    { name: "Video", value: videoCount, fill: "#37a163" },
  ];
  return (
    <div className="bg-base-200 px-2">
      <div className="container mx-auto py-20 space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold">Friendship Analytics</h2>
        <div className="p-8 bg-white shadow-sm  rounded-2xl">
          <p className="text-center md:text-start font-medium pb-3">
            By Interaction Type
          </p>
          {isEmpty ? (
            <div className="flex flex-col justify-center items-center gap-6 py-10 text-gray-500">
              <p className="text-red-600 text-6xl">
                <MdDoNotDisturbAlt />
              </p>
              <p className="text-lg">No interaction data available</p>
            </div>
          ) : (
            <PieChart
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "50vh",
                margin: "auto",
                paddingBottom: "20px",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend />
              <Tooltip />
            </PieChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
