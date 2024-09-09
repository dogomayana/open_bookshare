/* eslint-disable @next/next/no-img-element */
"use client";
import NavBar from "@/app/components/Navbar";
import { supabase } from "@/app/config/supabase";
import Image from "next/image";
import Link from "next/link";

import { useUser } from "@/app/context/userContext";

export default function Page({
  data,
  relatedBooks,
}: {
  data: any;
  relatedBooks: any;
}) {
  const { user, fullName } = useUser();
  const fName: any | null = user?.displayName;
const bookPDF="book_file/SMB_University_120307_Networking_Fundamentals.pdf";
  //const bookPDF = "book_image/test3.jpg";

  async function download(
    event: React.MouseEvent<HTMLButtonElement>
    // bookPDF: any,
  ) {
    let bookName = bookPDF.split("/")[1].split(".")[0];

    let fileName = bookPDF.split("/")[1];
    const { data, error }: any = await supabase.storage
      .from("book_share")
      .download(bookPDF);
    if (error) {
      alert("from storage");
      console.log(error);

      return;
    }

    const url = URL.createObjectURL(data);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;

    // Append the anchor to the document and trigger the download
    document.body.appendChild(a);
    a.click();

    // Cleanup: remove the anchor and revoke the object URL
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    const { error: err } = await supabase
      .from("bookshare_download")
      .insert({ bookName: bookName, fullName: fName ?? fullName });
    if (err) {
      console.log(err.message);
      return;
    }
  }
  return (
    <>
      <NavBar />
      <div className="w-full bg-white md:flex md:justify-between mt-10">
        <div className="md:w-4/12 md:h-screen md:grid md:place-item-center">
          <Link
            href={"/pages/allBooks"}
            className="md:pl-10 pl-2 pt-3 pb-5 md:pb-0 block my-auto md:my-0 text-lg font-medium"
          >
            {" < "}See more books
          </Link>
          <span className="block h-[400px] w-[280px] md:w-[320px] mx-auto">
            <img
              src={data?.bookImage}
              alt="bannerImage"
              width={320}
              height={160}
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
              // priority={true}
            />
          </span>
        </div>

        <div className="md:w-7/12 p-4">
          <h1 className="text-2xl font-semibold">{data?.bookName}</h1>
          <div className="flex space-x-2 my-6">
            <p className="text-gray-500 my-auto">
              <span>Author: </span>
              {data?.authorName}
            </p>
          </div>
          <div className="md:w-10/12">
            <p className="text-sm">{data?.bookBrief}</p>
          </div>

          <div className="md:w-10/12 my-8 space-y-2">
            <span className="w-full flex">
              <p className="w-6/12 font-semibold md:inline-block">Publisher</p>{" "}
              <p className="w-6/12 md:inline-block">{data?.donorName}</p>
            </span>{" "}
            <span className="w-full flex">
              <p className="w-6/12 font-semibold md:inline-block">
                Book Category
              </p>{" "}
              <p className="w-6/12 md:inline-block capitalize">
                {data?.categories}
              </p>
            </span>
            <span className="w-full flex">
              <p className="w-6/12 font-semibold md:inline-block">Language</p>{" "}
              <p className="w-6/12 md:inline-block">English</p>
            </span>
            <span className="w-full flex">
              <p className="w-6/12 font-semibold md:inline-block">ISBN</p>{" "}
              <p className="w-6/12 md:inline-block">{data?.isbn}</p>
            </span>
          </div>
          <button
            className="py-3 w-full mt-5 px-5 rounded-sm bgColor tColor"
            onClick={(event) => download(event)}
          >
            Download
          </button>
        </div>
      </div>
      <article className="w-full p-3 mx-auto mt-20 bg-white">
        <h1 className="text-base font-semibold ml-4">Related Books</h1>
        {/*}  <div className="w-full my-8 mx-auto bg-[#f3f4f6] p-3 grid grid-cols-2 md:grid-cols-5 gap-5 place-content-center">
          {typeof relatedBooks != undefined &&
            relatedBooks?.map((book: any, index: any) => (
              <div key={index} className="block">
                
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

                <h1 className="text-ellipsis mt-4 text-[15px]">
                  {book.bookName}
                </h1>
                <h3 className="mb-4 text-gray-500 text-sm">
                  {book.authorName}{" "}
                </h3>

                <Link
                  href={`/pages/bookDetails/${book.slug}`}
                  // onClick={(event) =>download (event,bookPDF)}
                  className="px-3 block text-center py-2 my-3 rounded-md text-sm font-semibold text-[#0095eb] bg-blue-200 hover:text-gray-100 hover:bg-[#0095eb]"
                >
                  Download
                </Link>
              
              </div>
            ))}
        </div>*/}
      </article>
    </>
  );
}
