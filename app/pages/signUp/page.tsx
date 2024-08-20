"use client";

import { ChangeHandler, ParagraphClickHandler } from "@/app/eventTypes";
import GoogleBtn from "../../components/GoogleBtn";
import React from "react";
import Link from "next/link";
import NavBar from "@/app/components/Navbar";
import { createClient } from "@/app/utils/supabase/client";
import Swal from "sweetalert2";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { app } from "@/app/config/firebase";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const supabase = createClient();
  const [userInfo, setUserInfo] = React.useState<any>({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
  });

  const [isShown, setIsShown] = React.useState<boolean>(false);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const handleChange: ChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleParagraphClick: ParagraphClickHandler = () => {
    setIsShown(!isShown);
  };
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  auth.languageCode = "en";

  const googleEmail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userInfo.emailAddress,
        userInfo.password
      );
      // Signed in
      const user = userCredential.user;

      const { error }: any = await supabase.from("bookshare_users").insert({
        email: userInfo.emailAddress,
        fullName: userInfo.fullName,
        phoneNum: userInfo.phoneNumber,
      });
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${error?.message}`,
        });
      }
      console.log("User signed in:", user);
      if (user) {
        router.push("/dashboard");
      }
      //
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in:", errorCode, errorMessage);
    }
    // createUserWithEmailAndPassword(
    //   auth,
    //   userInfo.emailAddress,
    //   userInfo.password
    // )
    //   .then((userCredential) => {
    //     // Signed up
    //     const user = userCredential.user;
    //     const { error }: any = supabase.from("bookshare_users").insert({
    //       email: userInfo.emailAddress,
    //       fullName: userInfo.fullName,
    //       phoneNum: userInfo.phoneNumber,
    //     });
    //     if (error) {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: `Something went wrong! ${error?.message}`,
    //       });
    //     }
    //     if (user) {
    //       router.push("/dashboard");
    //     }
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });

    setIsLoading(false);
  };
  function googlePop() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(user);
        if (user) {
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  const data = {
    email: userInfo.emailAddress,
    password: userInfo.password,
  };
  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await supabase.auth.signUp(data);
    if (error?.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${error?.message}`,
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      <NavBar />
      <main className="bg-white w-full p-2 grid place-items-center my-10">
        <div className="w-full md:w-5/12 mx-auto p-2 my-2">
          <h2 className="text-center text-lg text-gray-600">
            Let&apos; get started!
          </h2>
          <p className="text-center text-xs py-1 text-gray-400">
            Unlock a World of Books: Sign Up for BookShare Today
          </p>
        </div>
        <form
          onSubmit={googleEmail}
          className="w-full p-1 md:w-6/12 mx-auto md:p-2"
        >
          <label htmlFor="Full Name" className="block">
            <span className="my-2 block text-gray-600 text-[15px]">
              Full Name
            </span>
            <input
              type="text"
              name="fullName"
              id=""
              onChange={handleChange}
              className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
              placeholder="Enter full name"
            />
          </label>
          <label htmlFor="Phone Number" className="block my-5">
            <span className="my-2 block text-gray-600 text-[15px]">
              Phone Number
            </span>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              onChange={handleChange}
              className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm"
              placeholder="Enter your phone number"
            />
          </label>
          <label htmlFor="Email Address" className="block my-5">
            <span className="my-2 block text-gray-600 text-[15px]">
              Email Address
            </span>
            <input
              type="email"
              name="emailAddress"
              id="email"
              onChange={handleChange}
              required
              className="p-3 w-full block border rounded-md border-gray-400 placeholder:text-sm"
              placeholder="user@gmail.com"
            />
          </label>
          <label htmlFor="Password" className="block">
            <span className="my-2 block text-gray-600 text-[15px]">
              Password
            </span>
            <input
              type={isShown ? "text" : "password"}
              name="password"
              id="Password"
              onChange={handleChange}
              className="p-3 w-full block border rounded-md border-gray-400 placeholder:text-sm"
              placeholder="Enter your password"
            />
          </label>
          <p
            onClick={handleParagraphClick}
            className="float-right text-xs py-1 text-blue-600 cursor-pointer"
          >
            {isShown ? "hide password" : "show password"}
          </p>

          <button
            type="submit"
            value="Creat Account"
            className="p-3 bg-[#0095eb] hover:bg-black tColor w-full my-3 rounded-md text-sm"
          >
            {isLoading ? "Signing In..." : "Create Account"}
          </button>
        </form>
        <span className="w-full md:w-5/12 mt-4" onClick={googlePop}>
          <GoogleBtn text={"Sign up with Google"} />
        </span>
        <p className="text-center mb-5 mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/pages/logIn" className="text-blue-500">
            Log In
          </Link>
        </p>
      </main>
    </>
  );
}
