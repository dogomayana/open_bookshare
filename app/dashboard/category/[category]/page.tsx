"use client";
import CatNav from "@/app/components/CatNav";
import NavBar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page({ params }: { params: { category: string } }) {
  const pathname = usePathname();

  const catSlug = params.category;

  const categories = ["finance", "tech", "travel", "education"];
  const booksCatt = [
    "/book3.png",
    "/book4.png",
    "/book_1.png",
    "/book2.png",
    "/book4.png",
    "/book4.png",
    "/book2.png",
    "/book3.png",
    "/book_1.png",
    "/book2.png",
  ];
  const pol = "lop";

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
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={`/dashboard/category/${cat}`}
              className={`link ${
                pathname.includes(catSlug) && categories[index] === catSlug
                  ? "px-5 py-3 rounded-md capitalize bgColor text-white border border-[#0095eb]"
                  : "px-5 py-3 rounded-md capitalize border border-[#0095eb]"
              }`}
              // className="px-5 py-3 rounded-md capitalize border border-[#0095eb]"
            >
              {cat}
            </Link>
          ))}
        </nav>

        <div className="w-full my-8 mx-auto p-3 grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-5">
          {booksCatt.map((book, index) => (
            <div key={index} className="block">
              <Link href={`/pages/bookDetails/${"pol"}`}>
                <span className="block">
                  <Image
                    src={book}
                    alt="bannerImage"
                    width={171}
                    height={170}
                    // style={{
                    //   width: "100%",
                    //   height: "100%",
                    //   objectFit: "fill",
                    // }}
                    priority={true}
                  />
                </span>
                {/* <span className="pl-3 block"> */}
                <h1 className="pl-3 text-ellipsis text-sm font-medium">
                  What i learned from trees
                </h1>
              </Link>

              <h3 className="pl-3 mb-4 text-gray-500 text-sm">Author Name</h3>

              {/* </span> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
