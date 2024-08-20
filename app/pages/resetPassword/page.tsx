"use client";

import { ChangeHandler } from "@/app/eventTypes";

import React from "react";
import Link from "next/link";
import NavBar from "@/app/components/Navbar";

export default function ResetPassword() {
  const [userInfo, setUserInfo] = React.useState<any>({
    emailAddress: "",
  });

  const handleChange: ChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev: any) => ({ ...prev, [name]: value }));
    console.log(userInfo.fullName);
  };

  return (
    <>
      <NavBar />
      <main className="bg-white w-full p-2 grid place-items-center my-10">
        <div className="w-full md:w-5/12 mx-auto p-2 my-2">
          <h2 className="text-center text-lg text-gray-600">Forgot Password</h2>
          <p className="text-center text-xs py-1 text-gray-400">
            Enter the email address you used to create the account to receive
            instructions on how to reset your password
          </p>
        </div>
        <form className="w-full p-1 md:w-6/12 mx-auto md:p-2">
          <label htmlFor="Email Address" className="block my-5">
            <span className="my-2 block text-gray-600 text-[15px]">Email</span>
            <input
              type="email"
              name="emailAddress"
              id="email"
              onChange={handleChange}
              required
              className="p-3 w-full block border rounded-md border-gray-400 placeholder:text-sm"
              placeholder="user@gamil.com"
            />
          </label>

          <button
            type="submit"
            value="Creat Account"
            className="p-3 bg-[#0095eb] hover:bg-black tColor w-full my-3 rounded-md text-sm"
          >
            Send Email
          </button>
        </form>

        <p className="text-center mb-5 mt-4 text-sm">
          Remember your password?{" "}
          <Link href="/pages/logIn" className="text-blue-500">
            Login
          </Link>
        </p>
      </main>
    </>
  );
}
