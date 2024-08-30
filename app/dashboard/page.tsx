"use client";
import Link from "next/link";
import DashNav from "../components/DashNav";
import Image from "next/image";
import CatNav from "../components/CatNav";
import NoDownloadYet from "../components/NoDownload";
import FeaturedPopular from "../components/FeaturedPopular";

export default function Kop() {
  const booksCatt = ["/book3.png", "/book4.png", "/book_1.png", "/book2.png"];
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

              <span className="text-[17px] text-[#0066FF] my-auto">
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

              <span className="text-[17px] text-[#0066FF] my-auto">
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

              <span className="text-[17px] text-[#0066FF] my-auto">
                20 Book Readers{" "}
              </span>
            </span>
          </div>
          <article className="bg-white p-3 mt-10">
            <h1 className="text-lg">Downloaded Books</h1>
            <NoDownloadYet />
            {/*
            <div className="w-full mt-10 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 place-content-center">
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
                  </Link>

                  <h1 className="pl-3 text-ellipsis text-[15px]">
                    What i learned from trees
                  </h1>
                  <h3 className="pl-3  mb-4 text-gray-500 text-sm">
                    Author Name
                  </h3>

                  <Link
                    href={`/pages/bookDetails/${"pol"}`}
                    className="px-3 block text-center py-2 my-3 rounded-md text-sm font-semibold text-[#0095eb] bg-blue-200 hover:text-gray-100 hover:bg-[#0095eb]"
                  >
                    Download
                  </Link>
                  
                </div>
              ))}
            </div>
            */}
          </article>

          {/* Popular Books */}
          <article className="bg-white p-3 mt-10">
            <h1 className="text-lg">Popular Books</h1>
            <FeaturedPopular />
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
            <h1 className="text-center">Book Details</h1>
            <span className="my-3 block w-[180px] mx-auto overflow-hidden">
              <Image
                src={"/book2.png"}
                alt="bannerImage"
                width={171}
                height={170}
                style={{ width: "auto", objectFit: "fill" }}
                priority={true}
              />
            </span>
            <h1 className="text-center text-[15px] font-semibold">
              Steal Like an Artist
            </h1>
            <h2 className="text-center text-sm text-gray-600">Austin Kleon</h2>
            <p className="my-2 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
              laudantium itaque non doloribus aliquam eveniet sed!
            </p>
            <Link
              href={`/pages/bookDetails/${"bookslug"}`}
              className="p-3 bgColor text-white block my-4 rounded-md  text-center"
            >
              Read Now
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
