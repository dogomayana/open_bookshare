"use client";
import Link from "next/link";
import HamburgerIcon from "./HamburgerIcon";
import React from "react";
import Image from "next/image";
import { useUser } from "@/app/context/userContext";

export default function NavBar() {
  const { user } = useUser();

  const [reveal, setReveal] = React.useState(false);

  function showDropdownContent() {
    setReveal(!reveal);
  }
  return (
    <>
      <nav className="w-full py-3 px-4 md:px-8 flex justify-between border-blue-50 border  bg-white">
        <Link href={"/"} className="text-base my-auto hover:text-[#0095eb]">
          <Image src="/jlogo.png" alt="logo" width={150} height={50} />
        </Link>
        <span className="hidden md:inline-flex md:justify-evenly  w-full md:space-x-10 ">
          <div className="flex space-x-5 my-auto">
            <Link
              className="text-sm font-medium text-gray-900 hover:text-[#0095eb]"
              href={user ? "/dashboard" : "/pages/signUp"}
            >
              Dashboard
            </Link>
            <Link
              className="text-sm font-medium text-gray-900 hover:text-[#0095eb]"
              href={user ? "/pages/donateBook" : "/pages/signUp"}
            >
              Donate Book
            </Link>
            <Link
              className="text-sm font-medium text-gray-900 hover:text-[#0095eb]"
              href={"/pages/about"}
            >
              About
            </Link>
            <Link
              className="text-sm font-medium text-gray-900 hover:text-[#0095eb]"
              href={"/pages/contact"}
            >
              Contact
            </Link>
          </div>

          <div className={user ? "hidden" : `flex space-x-8 my-auto`}>
            <Link
              className="text-sm font-medium p-2 rounded-md text-gray-900 hover:bg-[#0095eb] hover:text-gray-100"
              href={"/pages/signUp"}
            >
              SignUp
            </Link>
            <Link
              className="text-sm font-medium p-2 rounded-md bg-[#0095eb] text-gray-100 hover:bg-white hover:text-[#0095eb]"
              href={"/pages/logIn"}
            >
              Login
            </Link>
          </div>
          {/* )} */}
        </span>

        <button
          aria-label="nav_button"
          id="buttonTitle"
          className="block md:hidden lg:hidden"
          onClick={showDropdownContent}
        >
          {reveal ? (
            "X"
          ) : (
            <HamburgerIcon
              aria-label="nav_button"
              className={"h-7 w-6 text-black font-bold "}
            />
          )}
        </button>
      </nav>

      {/* Mobile */}
      {reveal && (
        <div
          onClick={showDropdownContent}
          className="px-2 bg-white w-full md:hidden lg:hidden border border-gray-50"
        >
          <span className="block flex-col my-4 justify-items-center space-y-3 w-full">
            <Link
              href={user ? "/dashboard" : "/pages/signUp"}
              className="text-sm font-medium text-center block "
            >
              Dashboard
            </Link>
            <Link
              href={user ? "/pages/donateBook" : "/pages/signUp"}
              className="text-sm font-medium text-center block py-2"
            >
              Donate Book
            </Link>
          </span>
          {!user && (
            <div className="w-full flex justify-between my-4">
              <Link
                href={"/pages/logIn"}
                className="w-5/12 bg-blue-100 text-[#0095eb] text-center text-sm font-semibold rounded-md p-3 block"
              >
                Log in
              </Link>
              <Link
                href={"/pages/signUp"}
                className="w-5/12 bg-[#0095eb] text-gray-100 text-center text-sm font-semibold rounded-md p-3 block"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}
