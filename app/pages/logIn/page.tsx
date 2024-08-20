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
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "@/app/config/firebase";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/userContext";

export default function LogIn() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  auth.languageCode = "en";
  const router = useRouter();
  const { user } = useUser();
  if (typeof document !== undefined && user) {
    router.push("/dashboard");
  }
  const supabase = createClient();
  const [userInfo, setUserInfo] = React.useState<any>({
    emailAddress: "",
    password: "",
  });
  const [isShown, setIsShown] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleParagraphClick: ParagraphClickHandler = () => {
    setIsShown(!isShown);
  };

  const googleLogIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, userInfo.emailAddress, userInfo.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    setIsLoading(false);
  };
  function googlePop() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        const user = result.user;

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
    setIsLoading(false);
  }
  const handleChange: ChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev: any) => ({ ...prev, [name]: value }));
  };
  const data = {
    email: userInfo.emailAddress,
    password: userInfo.password,
  };

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword(data);
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
          <h2 className="text-center text-lg text-gray-600">Welcome back!</h2>
          <p className="text-center text-xs py-1 text-gray-400">
            Continue with BookShare
          </p>
        </div>
        <form
          onSubmit={googleLogIn}
          className="w-full p-1 md:w-6/12 mx-auto md:p-2"
        >
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
            {isLoading ? "Logining.." : "Login"}
          </button>
          <Link
            href={"/pages/resetPassword"}
            className="float-right text-xs py-1 text-red-600 cursor-pointer"
          >
            Forgot Password?
          </Link>
        </form>
        <span className="w-full md:w-5/12 mt-4" onClick={googlePop}>
          <GoogleBtn text={"Login with Google"} />
        </span>
        <p className="text-center mb-5 mt-4 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/pages/signUp" className="text-blue-500">
            Create Account
          </Link>
        </p>
      </main>
    </>
  );
}
