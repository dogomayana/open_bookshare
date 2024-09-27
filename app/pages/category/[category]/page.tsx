/* eslint-disable @next/next/no-img-element */
import CatNav from "@/app/components/CatNav";
import NavBar from "@/app/components/Navbar";
import CatPage from "@/app/dashboard/category/[category]/CatPage";

import { getBookByCategory } from "@/app/service/fetcher";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;
  const catData: any | undefined = await getBookByCategory(category);
  return (
    <>
      <NavBar />
      <article className="bg-white mt-8">
        <h1 className="p-3 text-gray-600 capitalize text-lg font-medium">
          <Link href={"/"}>Home </Link>/ {catData[0]?.categories}
        </h1>
        {catData.length < 1 ? (
          <div className="grid my-8 place-items-center border border-[#0095eb]">
            <p className="p-10 font-semibold text-base">
              No Book for this Category
            </p>
          </div>
        ) : (
          <div className="w-full mt-2 mb-8 mx-auto p-3 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-5">
            {catData?.map((book: any, index: any) => (
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
                  <h3 className="my-1 text-gray-500 text-sm">
                    {book.authorName}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        )}
      </article>
    </>
  );
}
