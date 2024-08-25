/* eslint-disable @next/next/no-img-element */
"use client";

import { useUser } from "@/app/context/userContext";

import React from "react";

export default function DashNav() {
  const { user, fullName } = useUser();

  let userName: string = user?.displayName;

  return (
    <>
      <nav className="hidden w-full p-3 md:flex justify-between border border-b-red-600">
        <div className="">
          <h1 className="text-[15px] font-semibold">
            Hello{" "}
            {fullName == null
              ? userName?.split(" ")[0]
              : fullName?.split(" ")[0]}
            {"   "}&#128075;
          </h1>
          <p className="text-[12px] text-gray-600">
            Welcome back to your Bookshare Account!
          </p>
        </div>

        <div className="flex space-x-8">
          <input
            type="text"
            placeholder="search"
            readOnly
            disabled
            className="w-[300px] p-1 rounded-md border border-gray-400 bg-white placeholder:pl-2"
          />
          {/* <img width="80" height="80" src="https://img.icons8.com/officel/80/user.png" alt="user"/> */}
          <img
            src={
              user?.photoURL == undefined
                ? "https://img.icons8.com/officel/80/user.png"
                : user?.photoURL
            }
            alt="userImage"
            className="h-[40px] w-[40px] rounded-full"
          />
        </div>
      </nav>
    </>
  );
}
