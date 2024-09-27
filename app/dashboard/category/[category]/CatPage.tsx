/* eslint-disable @next/next/no-img-element */
"use client";
import CatNav from "@/app/components/CatNav";
import NavBar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CatPage({ data }: { data: any[] }) {
  const pathname = usePathname();

  const catSlug = data[0]?.categories;

  const categories = ["finance", "tech", "travel", "education"];

  return (
    <>
      <CatNav />
      <div className="bg-white w-11/12 mx-auto md:w-full p-3 mt-5 md:mt-0 rounded-md">
        <nav className=" w-full p-2 flex flex-wrap gap-3 md:space-x-5 justify-center">
          <Link
            href={`/dashboard/category/`}
            className="p-3 rounded-md capitalize border border-[#0095eb]"
          >
            All
          </Link>
          {categories.map((cat: any, index: any) => (
            <Link
              key={index}
              href={`/dashboard/category/${cat}`}
              className={`link ${
                pathname.includes(catSlug) && categories[index] == catSlug
                  ? "px-5 py-3 rounded-md capitalize bgColor text-white border border-[#0095eb]"
                  : "px-5 py-3 rounded-md capitalize border border-[#0095eb]"
              }`}
            >
              {cat}
            </Link>
          ))}
        </nav>
        {data.length < 1 ? (
          <div className="grid my-8 place-items-center border border-[#0095eb]">
            <p className="p-10 font-semibold text-base">
              No Book for this Category
            </p>
          </div>
        ) : (
          <div className="w-full my-8 mx-auto p-3 grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-5">
            {data.map((book: any, index: any) => (
              <div key={index} className="block">
                <Link href={`/pages/bookDetails/${book.slug}`}>
                  <span className="block">
                    <img
                      src={book.bookImage}
                      alt="bannerImage"
                      width={171}
                      height={170}
                      // style={{
                      //   width: "100%",
                      //   height: "100%",
                      //   objectFit: "fill",
                      // }}
                      // priority={true}
                    />
                  </span>

                  <h1 className="mt-1 text-ellipsis text-sm font-medium">
                    {book.bookName}
                  </h1>
                </Link>

                <h3 className="my-1 text-gray-500 text-sm">
                  {book.authorName}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
