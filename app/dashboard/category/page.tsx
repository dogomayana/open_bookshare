/* eslint-disable @next/next/no-img-element */
import CatNav from "@/app/components/CatNav";
import Link from "next/link";
import Image from "next/image";
import { getAllBooks } from "@/app/service/fetcher";

export default async function catPage() {
  const dashCat = await getAllBooks();
  const categories = ["finance", "tech", "travel", "education"];

  return (
    <>
      <CatNav />
      <div className="bg-white w-full mx-auto md:w-full mt-5 md:mt-0 p-3 rounded-md">
        <nav className="w-full p-2 flex flex-wrap gap-3 md:space-x-5 justify-center">
          <span className="p-3 rounded-md capitalize bgColor text-white border border-[#0095eb]">
            All
          </span>
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={`/dashboard/category/${cat}`}
              className="px-5 py-3 rounded-md capitalize border border-[#0095eb]"
            >
              {cat}
            </Link>
          ))}
        </nav>

        <div className="my-8 mx-auto p-3 grid grid-cols-2 md:grid-cols-5 gap-5 place-content-center">
          {dashCat?.map((book: any, index: any) => (
            <div key={index} className="block border border-red-700">
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
                {/* <span className="pl-3 block"> */}
                <h1 className="mt-1 text-ellipsis text-sm font-medium">
                  {book.bookName}
                </h1>
                <h3 className="my-1 text-gray-500 text-sm">
                  {book.authorName}
                </h3>
              </Link>

              {/* </span> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
