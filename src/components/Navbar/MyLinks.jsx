"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const MyLinks = () => {
  const pathName = usePathname();
  return (
    <>
      <li>
        <Link
          className={`flex items-center gap-1.5 text-lg py-1.5 px-3.5 rounded-lg  font-semibold  text-[#244d3fb9] ${pathName === "/" && "text-white bg-[#244D3F]"}`}
          href={"/"}
        >
          <RiHome2Line /> Home
        </Link>
      </li>
      <li>
        <Link
          className={`flex items-center gap-1.5 text-lg py-1.5 px-3.5 rounded-lg  font-semibold  text-[#244d3fb9] ${pathName === "/timeline" && "text-white bg-[#244D3F]"}`}
          href={"/timeline"}
        >
          <RiTimeLine /> Timeline
        </Link>
      </li>
      <li>
        <Link
          className={`flex items-center gap-1.5 text-lg py-1.5 px-3.5 rounded-lg  font-semibold  text-[#244d3fb9] ${pathName === "/stats" && "text-white bg-[#244D3F]"}`}
          href={"/stats"}
        >
          <ImStatsDots /> Stats
        </Link>
      </li>
    </>
  );
};

export default MyLinks;
