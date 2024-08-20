"use client";
import CatNav from "@/app/components/CatNav";
import NavBar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page({ params }: { params: { category: string } }) {
  //   const pathname = usePathname();

  const catSlug = params.category;

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

  return (
    <>
      <NavBar />
      {/* <CatNav /> */}
      <div className="bg-white mx-auto w-full p-3 mt-5 md:mt-0 rounded-md">
        <nav className="flex mt-8">
          <Link className="block mr-1" href={"/"}>
            Home
          </Link>
          /<span className="ml-1 capitalize">{catSlug}</span>
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
                    priority={true}
                  />
                </span>

                <h1 className="pl-3 text-ellipsis text-sm font-medium">
                  What i learned from trees
                </h1>
              </Link>

              <h3 className="pl-3 mb-4 text-gray-500 text-sm">Author Name</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
