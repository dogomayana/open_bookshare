/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import CatNav from "@/app/components/CatNav";
import { getFeaturedBooks } from "@/app/service/fetcher";
import MyBo from "./MyBooks";

export default async function Mybooks() {
  const data: any | null = await getFeaturedBooks();

  let sideBook = data[0];
  return (
    <>
      <CatNav />

      <main className="w-full mt-8 md:mt-2 md:flex md:justify-between md:space-x-4">
        {/* Left content */}
        <div className="p-3 md:w-9/12 bg-white">
          <h1 className="text-lg font-semibold md:pl-5 md:py-3">
            Donated Books
          </h1>
          <MyBo />
        </div>
        {/* Side content */}
        <div className="w-full mt-2 md:mt-0 md:w-3/12">
          <div className="bgColor rounded-md p-4">
            <p className="text-center text-white">
              Donate books and help us spread knowledge around the world
            </p>
            <Link
              href={"/pages/donateBook"}
              className="p-3 bg-white block my-4 rounded-sm text-center"
            >
              Give Today
            </Link>
          </div>
          <div className="mt-8 p-3 bg-white rounded-md">
            <h1 className="text-center text-base">Book Details</h1>
            <span className="my-3 block w-[180px] mx-auto overflow-hidden">
              <img
                src={sideBook?.bookImage}
                alt="bannerImage"
                width={171}
                height={170}
                style={{ width: "auto", objectFit: "fill" }}
                // priority={true}
              />
            </span>
            <h1 className="text-center text-[15px] font-semibold">
              Steal Like an Artist{sideBook?.bookName}
            </h1>
            <h2 className="text-center text-sm text-gray-600">
              {sideBook?.authorName}
            </h2>
            <p className="my-2 text-sm">{sideBook?.bookBreif}</p>
            <Link
              href={`/pages/bookDetails/${sideBook?.slug}`}
              className="p-3 bgColor text-white block my-4 rounded-md  text-center"
            >
              Download
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
