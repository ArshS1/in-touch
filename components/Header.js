import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="">
      <div className="flex justify-between max-w-6xl">
        {/* LEFT SECTION */}
        <div className="relative hidden lg:inline-grid w-24 h-24">
          <Image
            src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg"
            // prevent stretching out image
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-20 h-20 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://i.ibb.co/w7m7ssc/hands-removebg-preview.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* LEFT SECTION ENDS */}

        {/* MIDDLE SECTION */}
        <div>
          <div></div>
          <input type="text" placeholder="Search" />
        </div>
        {/* MIDDLE SECTION ENDS */}

        {/* RIGHT SECTION */}
      </div>

      {/* RIGHT SECTION ENDS */}
    </div>
  );
}

export default Header;
