/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function FeaturedPopular({ data }: { data: any }) {
  return (
    <>
      <div className="w-full mx-auto my-8 bg-[#f3f4f6] p-2 grid grid-cols-2 md:grid-cols-5 gap-5 place-content-center">
        {data?.map((book: any, index: any) => (
          <div key={index} className="block shadow-md p-1">
            <Link
              href={`/pages/bookDetails/${book.slug}`}
              className="cursor-pointer "
            >
              <span key={index} className="block p-3">
                <img
                  src={book?.bookImage}
                  alt="bannerImage"
                  width={170}
                  height={171}
                  // priority={true}
                />
              </span>
            </Link>

            <h1 className="pl-3 py-1 text-ellipsis text-[15px]">
              {book.bookName}
            </h1>
            <h3 className="pl-3  mb-4 text-gray-500 text-sm">
              {book.authorName}
            </h3>

            <Link
              href={`/pages/bookDetails/${book.slug}`}
              className="px-3 block text-center py-2 my-3 rounded-md cursor-pointer text-sm font-semibold text-[#0095eb] bg-blue-200 hover:text-gray-100 hover:bg-[#0095eb]"
            >
              Download
            </Link>
            {/* </span> */}
          </div>
        ))}
      </div>
    </>
  );
}
