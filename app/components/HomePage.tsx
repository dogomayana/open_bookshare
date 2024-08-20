"use client";

import FoundItem from "@/app/components/FoundItem";
import NoItem from "@/app/components/NoItem";

import HomeMain from "./HomeMain";
import NavBar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useUser } from "@/app/context/userContext";
import { toast } from "sonner";

export default function HomePage() {
  const { user } = useUser();

  const quickLinks = ["Home", "About Us", "Team", "Author", "Help"];
  const legals = ["My Acocunt", "Support", "Privacy Policy", "FAQ", "Terms"];
  const [search, setSearch] = React.useState<string>("");
  const [searchM, setSearchM] = React.useState<string>("");
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    if (typeof document !== undefined) {
      document.body.style.overflow = "hidden";
    }
    setShowModal(true);
  };
  const closeModal = () => {
    if (typeof document !== undefined) {
      document.body.style.overflow = "auto";
    }
    setShowModal(false);
  };

  return (
    <>
      <NavBar />
      <main className="w-full mt-3 md:hidden">
        <div className="w-full p-3">
          <p className="text-center text-sm text-gray-700">
            Let&apos;s make the best investment
          </p>
          <h1 className="text-2xl font-semibold my-8 text-center">
            Unlock a World of Stories.{" "}
            <Link
              href={user ? "/pages/donateBook" : "/pages/signUp"}
              className="text-[#0095eb] underline"
            >
              Donate,
            </Link>{" "}
            <span className="text-[#0095eb]">Access, Read.</span>
            {/* <button onClick={() => toast("This is a sonner toast")}>
              Render my toast
            </button> */}
          </h1>
          <Image
            src="/banner.png"
            alt="bannerImage"
            width={320}
            height={160}
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
            priority={true}
          />
          <p className="text-center text-sm mt-4 text-gray-700">
            Join Bookshare, the free digital library for everyone.
          </p>
          <p className="text-center text-sm mt-1 text-gray-700">
            Millions of audiobooks and ebooks await.
          </p>
          <p className="text-center text-sm mt-1 text-gray-700">
            Donate, Access, Read
          </p>

          <div className="flex w-full border border-blue-50 mt-8">
            <input
              type="text"
              name="searchM"
              value={searchM}
              onChange={(e) => setSearchM(e.target.value)}
              id="searchM"
              placeholder="search"
              className="p-3 w-11/12 block shadow-md rounded-md placeholder:italic"
            />
            <button className="p-3 rounded-md w-auto bg-[#0095eb] text-gray-100">
              &#128269;
            </button>
          </div>
          <button onClick={openModal}>Show modal</button>
          <NoItem isOpen={showModal} onClose={closeModal} />

          <div className="w-full flex justify-between mt-7 mb-4">
            <Link
              href={user ? "/pages/donateBook" : "/pages/signUp"}
              className="w-5/12 bg-[#0095eb] text-gray-100 text-center text-sm font-semibold rounded-md p-3 block"
            >
              Donate now
            </Link>
            <Link
              href={"/pages/allBooks"}
              className="w-5/12 bg-blue-100 text-[#0095eb] text-center text-sm font-semibold rounded-md p-3 block"
            >
              Download a book
            </Link>
          </div>
        </div>
      </main>

      {/* desktop design */}
      <main className="w-full mt-3 hidden md:block">
        <main className="w-full p-3 flex justify-evenly bg-gray-100">
          <div className="w-5/12 p-3">
            <p className="text-sm text-gray-700">
              Let&apos;s make the best investment
            </p>
            <h1 className="text-2xl my-8 ">
              Unlock a World of Stories.{" "}
              <Link
                href={user ? "/pages/donateBook" : "/pages/signUp"}
                className="text-[#0095eb] underline"
              >
                Donate,
              </Link>{" "}
              <span className="text-[#0095eb]">Access, Read.</span>
            </h1>
            <p className="text-sm mt-4 text-gray-700">
              Join Bookshare, the free digital library for everyone. Millions of
              audiobooks and ebooks await. Donate, Access, Read
            </p>

            <div className="flex w-full border border-blue-50 mt-8">
              <input
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search"
                className="p-3 w-11/12 block shadow-md rounded-md placeholder:italic"
              />
              <button className="p-3 rounded-md w-auto bg-[#0095eb] text-gray-100">
                &#128269;
              </button>
              <button onClick={openModal}>Show modal</button>
              <NoItem isOpen={showModal} onClose={closeModal} />
            </div>

            <div className="w-full flex justify-between mt-7 mb-4">
              <Link
                href={user ? "/pages/donateBook" : "/pages/signUp"}
                className="w-5/12 bg-[#0095eb] text-gray-100 text-center text-sm font-semibold rounded-md p-3 block"
              >
                Donate now
              </Link>
              <Link
                href={"/pages/allBooks"}
                className="w-5/12 bg-blue-100 text-[#0095eb] text-center text-sm font-semibold rounded-md p-3 block"
              >
                Download now
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-5/12 p-3">
            <Image
              src="/banner.png"
              alt="bannerImage"
              width={320}
              height={160}
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
              priority={true}
            />
          </div>
        </main>{" "}
        {/*  */}
      </main>
      <HomeMain />

      {/* footer */}
      <footer className="w-full p-4 bg-white">
        <div className="w-11/12 mx-auto md:grid md:grid-cols-3">
          <div className="p-3">
            <span className="p-3 text-center block mx-auto">
              <Image
                src="/jlogo.png"
                alt="logo"
                width={150}
                height={50}
                priority={true}
              />
            </span>
            <p className="text-sm text-center md:text-start mt-2">
              Empowering a community of readers and learners one book at a time
              through seamless sharing and access.
            </p>
          </div>
          <div className="p-3 flex justify-between">
            <span className="block mt-6">
              <h1 className="font-medium text-lg">Quick Links</h1>
              <ol className="block mt-4 text-sm space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ol>
            </span>
            <span className="block mt-6">
              <h1 className="font-medium text-lg">Legals</h1>
              <ol className="block mt-4 space-y-2">
                {legals.map((link, index) => (
                  <li key={index} className="text-sm ">
                    {link}
                  </li>
                ))}
              </ol>
            </span>
          </div>
          <div className="p-3">
            <span className="block mt-6">
              <h1 className="font-medium text-lg text-center md:text-start">
                Socials
              </h1>
            </span>
          </div>
        </div>

        <h1 className="text-center text-gray-600 text-sm mt-6">
          ©2024 BookShare All right reserved
        </h1>
      </footer>
    </>
  );
}
