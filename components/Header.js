import Image from "next/image";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
// component for the header of the website
// included all 3 sides (search bar, logo, profile icon)

function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-5 xl:mx-auto">
        {/* LEFT SECTION aka LOGO */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 h-24"
        >
          <Image
            src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg"
            // prevent stretching out image
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push("/")}
          className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer"
        >
          <Image
            src="https://i.ibb.co/w7m7ssc/hands-removebg-preview.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* LEFT SECTION ENDS */}

        {/* MIDDLE SECTION aka SEARCH */}
        <div>
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute pl-3 flex inset-y-0 items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black"
            />
          </div>
        </div>
        {/* MIDDLE SECTION ENDS */}

        {/* RIGHT SECTION aka PROFILE PIC */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <PaperAirplaneIcon className="navBtn" />
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                src={session?.user?.image}
                alt="Profile Pic"
                className="h-10 w-10 rounded-full cursor-pointer"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>

        {/* RIGHT SECTION ENDS */}
      </div>
    </div>
  );
}

export default Header;
