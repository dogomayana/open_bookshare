"use client";

import { ChangeHandler } from "@/app/eventTypes";

import React from "react";
import Link from "next/link";
import NavBar from "@/app/components/Navbar";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "@/app/config/firebase";

export default function ResetPassword() {
  const auth = getAuth(app);
  const actionCodeSettings = {
    url: "https://book-share-mu.vercel.app/dashboard",
    // Optional other settings
  };
  const [emailAddress, setEmailAddress] = React.useState<any>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const handleChange: ChangeHandler = (event) => {
    setEmailAddress(event.target.value);
  };

  async function resetPassword(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, emailAddress, actionCodeSettings);
      alert("email sent");
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage);
    }
    setIsLoading(false);
  }

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
        <form
          onSubmit={resetPassword}
          className="w-full p-1 md:w-6/12 mx-auto md:p-2"
        >
          <label htmlFor="Email Address" className="block my-5">
            <span className="my-2 block text-gray-600 text-[15px]">Email</span>
            <input
              type="email"
              name="emailAddress"
              id="email"
              onChange={handleChange}
              required
              value={emailAddress}
              className="p-3 w-full block border rounded-md border-gray-400 placeholder:text-sm"
              placeholder="user@gmail.com"
            />
          </label>

          <button
            type="submit"
            className="p-3 bg-[#0095eb] hover:bg-black tColor w-full my-3 rounded-md text-sm"
          >
            {isLoading ? "Sending mail" : "Send Mail"}
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
