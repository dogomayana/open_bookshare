/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

import { getAllBooks } from "@/app/service/fetcher";

export default async function AllBooks() {
  const data = await getAllBooks();

  return (
    <article className="w-full p-4 bg-white my-4 rounded-md">
      <div className="w-full mt-10 mx-auto bg-[#f3f4f6] p-3 grid grid-cols-2 md:grid-cols-5 gap-5 place-content-center border-gray-950 border">
        {data?.map((book, index) => (
          <div key={index} className="block border-gray-900 border">
            <Link href={`/pages/bookDetails/${book.slug}`}>
              <span className="block mx-auto">
                <img
                  src={book?.bookImage}
                  alt="bannerImage"
                  width={171}
                  height={170}
                  // priority={true}
                />
              </span>
            </Link>

            <h1 className="text-ellipsis text-[15px] mt-2">{book.bookName}</h1>
            <h3 className="mb-4 text-gray-500 text-sm">{book.authorName}</h3>

            <Link
              href={`/pages/bookDetails/${book.slug}`}
              className="px-3 block text-center py-2 my-3 rounded-md text-sm font-semibold text-[#0095eb] bg-blue-200 hover:text-gray-100 hover:bg-[#0095eb]"
            >
              Download
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
}
