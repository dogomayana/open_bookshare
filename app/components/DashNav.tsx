/* eslint-disable @next/next/no-img-element */
"use client";

import { useUser } from "@/app/context/userContext";
import { supabase } from "../config/supabase";
import useSWR from "swr";

export default function DashNav() {
  const { user } = useUser();
  let userName: string = user?.displayName;
  const fEmail: any | null = user?.email;

  const getUserDetails = async () => {
    const { data, error }: any = await supabase
      .from(`bookshare_users`)
      .select(`email,fullName`)
      .eq("email", fEmail);

    if (error) {
      // console.log(error);
    }

    return data[0]?.fullName;
  };
  const { data: fullName, error }: any = useSWR("/api/todos", getUserDetails, {
    refreshInterval: 1000,
  });
  return (
    <>
      <nav className="hidden w-full p-3 md:flex justify-between border border-b-red-600">
        <div className="">
          <h1 className="text-[15px] font-semibold">
            Hello{" "}
            {fullName == undefined
              ? userName.split(" ")[0]
              : fullName?.split(" ")[0]}
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
          {/* <img width="80" height="80" src="https://img.icons8.com/officel/80/user.png" alt="user"/> */}
          <img
            src={
              user?.photoURL == undefined
                ? "https://img.icons8.com/officel/80/user.png"
                : user?.photoURL
            }
            alt="userImage"
            className="h-[50px] w-[50px] rounded-full"
          />
        </div>
      </nav>
    </>
  );
}
