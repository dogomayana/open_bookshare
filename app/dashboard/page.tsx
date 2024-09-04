/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import DashNav from "../components/DashNav";
import Image from "next/image";
import CatNav from "../components/CatNav";
import NoDownloadYet from "../components/NoDownload";
import FeaturedPopular from "../components/FeaturedPopular";
import { getDownloadedBooks, getFeaturedBooks } from "@/app/service/fetcher";
import DownlaodedBooks from "./DownloadedBooks";

export default async function Kop() {
  const data: any | null = await getFeaturedBooks();
  // const dBooks = await getDownloadedBooks();
  // const [bookDetails, relatedBooks] = await Promise.all([data, dBooks]);
  let sideBook = data[0];
  return (
    <>
      <CatNav />

      <DashNav />
      <main className="w-full p-3 mx-auto md:w-full md:mt-6 md:flex md:justify-between md:space-x-4">
        <div className="w-full md:w-9/12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <span className="flex space-x-1 rounded-md shadow-md bg-white p-1">
              <Image
                src={"/btw2.png"}
                alt={"book of the week"}
                width={50}
                height={50}
              />

              <span className="text-sm text-[#0066FF] my-auto">
                Book of the Week
              </span>
            </span>
            <span className="flex space-x-1 rounded-md shadow-md bg-white p-1">
              <Image
                src={"/bookdonor.png"}
                alt={"book of the week"}
                width={70}
                height={50}
              />

              <span className="text-sm text-[#0066FF] my-auto">
                30 Book Donors
              </span>
            </span>
            <span className="flex space-x-1 rounded-md shadow-md bg-white p-1">
              <Image
                src={"/bookreaders.png"}
                alt={"book of the week"}
                width={50}
                height={50}
              />

              <span className="text-sm text-[#0066FF] my-auto">
                20 Book Readers{" "}
              </span>
            </span>
          </div>
          <article className="bg-white p-3 mt-10">
            <h1 className="text-lg">Downloaded Books</h1>
            <DownlaodedBooks />
          </article>

          {/* Popular Books */}
          <article className="bg-white mt-10 p-2">
            <h1 className="text-lg">Popular Books</h1>
            <FeaturedPopular data={data} />
          </article>
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
