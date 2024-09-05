/* eslint-disable @next/next/no-img-element */
"use client";
import NoDonationsYet from "@/app/components/NoDonation";
import { supabase } from "@/app/config/supabase";
import { useUser } from "@/app/context/userContext";
import Link from "next/link";
import useSWR from "swr";

export default function MyB() {
  const { user, fullName } = useUser();

  const fName: any | null = user?.displayName ?? fullName;
  const getDownloadedBooks = async () => {
    const { data, error } = await supabase
      .from("book_share")
      .select(
        `bookName,authorName,donorName,bookImage,slug,categories,bookBrief,bookPDF,isbn`
      )
      .eq("donorName", fName);
    if (error) {
      // console.log(error);

      return;
    }

    return data;
  };
  const { data, error } = useSWR("/api/data", getDownloadedBooks, {
    refreshInterval: 1000,
  });

   
  return (
    <>
      {error ? (
        <NoDonationsYet />
      ) : (
        <div className="w-full mt-10 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 place-content-center">
          {data?.map((book: any, index: any) => (
            <div key={index} className="block">
              <Link href={`/pages/bookDetails/${book.slug}`}>
                <span className="block">
                  <img
                    src={book.bookImage}
                    alt="bannerImage"
                    width={171}
                    height={100}
                    // priority={true}
                  />
                </span>
              </Link>

              <h1 className="text-ellipsis text-[15px] mt-2">
                {book.bookName}
              </h1>
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
      )}
    </>
  );
}
