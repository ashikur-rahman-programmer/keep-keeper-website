import Image from "next/image";
import React from "react";

const FriendCard = ({ friend }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full sm:w-[300px] text-center border border-white">
      <div className="flex justify-center">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={96}
          height={96}
          className="rounded-full object-cover"
        />
      </div>

      <h2 className="text-xl font-semibold mt-4">{friend.name}</h2>

      <p className="text-gray-500 text-sm mt-1">
        {friend.days_since_contact}d ago
      </p>

      <div className="mt-3 flex justify-center flex-wrap gap-2">
        {friend.tags?.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <span
          className={`px-4 py-1 text-sm rounded-full text-white font-medium ${
            friend.status === "overdue"
              ? "bg-[#EF4444]"
              : friend.status === "on-track"
                ? "bg-[#244D3F]"
                : "bg-[#EFAD44]"
          }`}
        >
          {friend.status}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;
