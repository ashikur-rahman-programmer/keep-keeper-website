import React from "react";
import Image from "next/image";
import instagramIcon from "@/assets/instagram.png";
import facebookIcon from "@/assets/facebook.png";
import twitterIcon from "@/assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] px-2">
      <div className="container mx-auto pt-20  text-center space-y-20">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            KeenKeeper
          </h2>
          <p className="text-gray-400">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <p className="text-xl text-white mb-1.5">Social Links</p>
          <div className="flex justify-center items-center gap-2">
            <Image
              src={instagramIcon}
              width={30}
              height={30}
              alt="instagram  "
            />
            <Image src={facebookIcon} width={30} height={30} alt="facebook " />
            <Image src={twitterIcon} width={30} height={30} alt="twitter " />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 py-10 border-t border-gray-600">
          <p className="text-gray-400">
            &copy; 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
            <p className="text-gray-400">Privacy Policy</p>
            <p className="text-gray-400">Terms of Service</p>
            <p className="text-gray-400">Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
