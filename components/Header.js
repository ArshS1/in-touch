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
import { useRecoilState } from "recoil";
import { stateModal } from "../atoms/modalAtom";
// component for the header of the website
// included all 3 sides (search bar, logo, profile icon)

function Header() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useRecoilState(stateModal);
  const router = useRouter();
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-5 xl:mx-auto">
        {/* LEFT SECTION aka LOGO */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 h-24"
        >
          <p className="flex items-center hover:cursor-pointer">inTouch</p>
        </div>

        {/* LEFT SECTION ENDS */}

        {/* RIGHT SECTION aka PROFILE PIC */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />

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
