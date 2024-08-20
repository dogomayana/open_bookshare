/* eslint-disable @next/next/no-img-element */
"use client";

import { useUser } from "@/app/context/userContext";

export default function DashNav() {
  const { user } = useUser();
  let userName: string = user?.displayName;

  return (
    <>
      <nav className="hidden w-full p-3 md:flex justify-between border border-b-red-600">
        <div className="">
          <h1 className="text-[15px] font-semibold">
            Hello {userName?.split(" ")[1]}
            {"   "}&#128075;
          </h1>
          <p className="text-sm text-gray-600">
            Welcome back to your Bookshare Account!
          </p>
        </div>

        <div className="flex space-x-8">
          <input
            type="text"
            placeholder="search"
            readOnly
            disabled
            className="w-[300px] p-1 rounded-md border border-gray-400 bg-white"
          />

          <img
            src={user?.photoURL}
            alt="userImage"
            className="h-[50px] w-[50px] rounded-full"
          />
        </div>
      </nav>
    </>
  );
}
