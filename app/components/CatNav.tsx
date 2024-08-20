"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";

import { usePathname } from "next/navigation";
import HamburgerIcon from "./HamburgerIcon";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { app } from "../config/firebase";

export default function CatNav() {
  const auth = getAuth(app);

  const pathname = usePathname();

  const [reveal, setReveal] = React.useState(false);

  function showDropdownContent() {
    setReveal(!reveal);
  }
  async function logOut() {
    try {
      Swal.fire({
        title: "You are about to log out?",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log Out",
      }).then((result: any) => {
        signOut(auth);
        if (result.isConfirmed) {
          Swal.fire({
            title: "Logged Out",
            icon: "success",
          });
        }
      });
    } catch (error) {}
  }
  return (
    <>
      <div className="md:hidden md:mb-0">
        <nav className="w-full py-3 px-4 md:px-8 flex justify-between border-blue-50 border  bg-white">
          <Link href={"/"} className="text-base my-auto hover:text-[#0095eb]">
            <Image
              src="/jlogo.png"
              alt="logo"
              width={150}
              height={50}
              // className="borderr border-green-700"
            />
          </Link>

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
            className="px-2 bg-white w-full absolute top-0 md:hidden lg:hidden border border-gray-50"
          >
            {/* <div className=""> */}
            <nav className="w-full py-3 md:px-8 flex justify-between bg-white">
              <Link
                href={"/"}
                className="text-base my-auto hover:text-[#0095eb]"
              >
                <Image src="/jlogo.png" alt="logo" width={150} height={50} />
              </Link>

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

            <div className="mt-8">
              <h1 className="text-lg font-medium mb-5">Navigation</h1>
              <Link
                className={`link ${
                  pathname === "/dashboard"
                    ? "flex my-2 text-[14px] p-2 bg-blue-100"
                    : "flex my-2 p-2 text-[14px]"
                }`}
                href={"/dashboard"}
              >
                <span className="mr-2">
                  <Icon
                    icon="mdi-light:view-dashboard"
                    width={20}
                    height={20}
                  />
                </span>
                <span className="my-auto block">Dashboard</span>
              </Link>
              <Link
                className={`link ${
                  pathname.includes("/dashboard/category")
                    ? "flex my-2 text-[14px] p-2 bg-blue-100"
                    : "flex my-2 p-2 text-[14px]"
                }`}
                href={"/dashboard/category"}
              >
                <span className="mr-2">
                  <Icon
                    icon="material-symbols-light:category-outline"
                    width={20}
                    height={20}
                  />
                </span>
                <span className="my-auto block">Categories</span>
              </Link>

              <Link
                className={`link ${
                  pathname.includes("/dashboard/category")
                    ? "flex my-2 text-[14px] p-2 bg-blue-100"
                    : "flex my-2 p-2 text-[14px]"
                }`}
                href={"/pages/donateBook"}
              >
                <span className="mr-2">
                  <Icon
                    icon="fluent:book-add-28-regular"
                    width={20}
                    height={20}
                  />
                </span>
                <span className="my-auto block">Donate Book</span>
              </Link>
              {/* Book Management */}
              <h1 className="text-lg font-medium mt-6">Book Management</h1>
              <Link
                href={"/pages/dashboard"}
                className={`link ${
                  pathname === "/dashboard/mybooks"
                    ? "flex my-2 text-[14px] p-2 bg-blue-100"
                    : "flex my-2 p-2 text-[14px]"
                }`}
              >
                <span className="mr-2">
                  <Icon
                    icon="iconamoon:cloud-download-thin"
                    width={20}
                    height={20}
                  />
                </span>
                <span className="my-auto block ">Download Bookk</span>
              </Link>

              <Link
                href={"/dashboard/mybooks"}
                className={`link ${
                  pathname === "/dashboard/mybooks"
                    ? "flex my-2 text-[14px] p-2 bg-blue-100"
                    : "flex my-2 p-2 text-[14px]"
                }`}
              >
                <span className="mr-2">
                  <Icon icon="pepicons-pencil:book" width={20} height={20} />
                </span>
                <span className="my-auto block text-[14px]">My Book</span>
              </Link>
            </div>

            {/* Settings Section */}
            <div className="w-full mt-10">
              <hr />
              <Link href={"#"} className="block my-2 p-2 text-[14px]">
                Help/Support
              </Link>
              <Link href={"#"} className="block my-2 p-2 text-[14px]">
                Settings
              </Link>
              <button onClick={logOut} className="block my-2 p-2 text-[14px]">
                Log Out
              </button>
            </div>
            {/* </div> */}
          </div>
        )}
      </div>
    </>
  );
}
