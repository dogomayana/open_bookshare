"use client";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import React from "react";
import { createPortal } from "react-dom";
import { testimonials } from "@/app/testData";
import { Comic_Neue, Lobster } from "next/font/google";
const lobster = Comic_Neue({ weight: "400", subsets: ["latin"] });

export default function HomeMain() {
  const booksCat = [
    { value: "travel", name: "Travel", imgSrc: "/book3.png" },
    { value: "education", name: "Education", imgSrc: "/book4.png" },
    { value: "tech", name: "Tech", imgSrc: "/book3.png" },
    { value: "finance", name: "Finance", imgSrc: "/book3.png" },
  ];
  const booksCatt = [
    "/book3.png",
    "/book4.png",
    "/book_1.png",
    "/book2.png",
    "/book1.png",
  ];
  const pol = "lop";
  return (
    <>
      <div className="bg-white p-3 w-full my-14">
        <h1 className="text-blue-500 my-8 text-center text-lg font-medium">
          Categories
        </h1>
        <div className="w-full my-8 md:w-10/12 mx-auto bg-[#f3f4f6] p-3 grid grid-cols-2 md:grid-cols-4 place-content-center">
          {booksCat.map((book, index) => (
            <span key={index} className="block p-3">
              <Image
                src={book.imgSrc}
                alt="bannerImage"
                width={170}
                height={171}
                priority={true}
              />
              <Link
                href={`/pages/category/${book.value}`}
                className="text-center block"
              >
                {book.name}
              </Link>
            </span>
          ))}
        </div>

        <article className="my-8">
          <h1 className="text-blue-500 my-16 text-center text-lg font-medium">
            Featured
          </h1>

          <div className="w-full md:w-11/12 mx-auto bg-[#f3f4f6] p-3 grid grid-cols-2 md:grid-cols-5 gap-5 place-content-center">
            {booksCatt.map((book, index) => (
              <div key={index} className="block shadow-md p-1">
                <Link href={`/pages/${pol}`} className="cursor-pointer ">
                  <span key={index} className="block p-3">
                    <Image
                      src={book}
                      alt="bannerImage"
                      width={170}
                      height={171}
                      priority={true}
                    />
                  </span>
                </Link>

                <h1 className="pl-3 py-1 text-ellipsis text-[15px]">
                  What i learned from trees
                </h1>
                <h3 className="pl-3  mb-4 text-gray-500 text-sm">
                  Author Name
                </h3>

                <Link
                  href={`/pages/bookDetails/${pol}`}
                  className="px-3 block text-center py-2 my-3 rounded-md cursor-pointer text-sm font-semibold text-[#0095eb] bg-blue-200 hover:text-gray-100 hover:bg-[#0095eb]"
                >
                  Download
                </Link>
                {/* </span> */}
              </div>
            ))}
          </div>
          <Link
            href={"/pages/allBooks"}
            className="pr-12 mt-2 text-blue-600 cursor-pointer float-right block"
          >
            View all
          </Link>
        </article>

        <article className="mt-16">
          <h1 className="text-center my-8 text-lg font-semibold">
            About BookShare
          </h1>
          <div className="md:flex md:w-11/12 w-full mx-auto justify-evenly p-3">
            <div className="block w-full md:w-[520px]">
              <Image
                src={"/Left.png"}
                alt="bannerImage"
                width={320}
                height={160}
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                priority={true}
              />
            </div>

            <div className="w-full md:w-5/12 md:my-auto">
              <p className="text-sm md:text-base p-3">
                BookShare is a platform dedicated to promoting literacy and
                access to books for everyone. We believe that everyone should
                have the opportunity to read and learn, regardless of their
                financial situation. With our vast digital collection and
                user-friendly interface, we make it easy for people to donate
                books and browse our collection. Join us in our mission to
                spread the joy of reading
              </p>
              <Link
                href={"#"}
                className="px-3 w-6/12 block mx-auto text-center py-2 my-3 rounded-md text-sm font-semibold text-blue-100 bg-[#0095eb] hover:text-gray-100 hover:bg-[#0095eb]"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </article>

        {/* Book concept */}
        <section className="bgColor p-3 my-16">
          <h1 className="text-lg font-medium text-center text-white my-3">
            The 3 Concepts for a BookShare
          </h1>
          <div className="space-y-11 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
            <div className="p-3">
              <span className="block h-[100px] w-[100px] mx-auto">
                <Image
                  src={"/give.png"}
                  alt="bannerImage"
                  width={320}
                  height={160}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  priority={true}
                />
              </span>
              <h1 className="text-lg text-center my-4 text-white">
                Easy Book Donation
              </h1>

              <p className="text-center text-sm text-white">
                BookShare makes donating books easy and convenient. Simply
                search for the book you want to donate, click
                &apos;Donate&apos;, and we&apos;ll take care of the rest. Your
                book will find a new home, and you&apos;ll be supporting
                literacy and education.
              </p>
            </div>
            <div className="p-3 ">
              <span className="block h-[100px] w-[100px] mx-auto">
                <Image
                  src={"/book.png"}
                  alt="bannerImage"
                  width={320}
                  height={160}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  priority={true}
                />
              </span>
              <h1 className="text-lg text-center my-4 text-white">
                Vast Digital Collection
              </h1>

              <p className="text-center text-sm text-white">
                BookShare offers a vast digital collection of books, including
                classics, bestsellers, and rare titles. Our collection is
                constantly growing, and you can access it all in one place.
                Whether you&apos;re a reader, researcher, or student, we&apos;ve
                got you covered.
              </p>
            </div>
            <div className="p-3">
              <span className="block h-[100px] w-[100px] mx-auto">
                <Image
                  src={"/light.png"}
                  alt="bannerImage"
                  width={320}
                  height={160}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  priority={true}
                />
              </span>
              <h1 className="text-lg text-center my-4 text-white">
                User-Friendly Interface
              </h1>

              <p className="text-center text-sm text-white">
                Our intuitive and user-friendly interface makes it easy to find
                and discover new books. Browse by genre, author, or title, and
                filter results to find exactly what you&apos;re looking for.
                Reading has never been more enjoyable and accessible.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="w-full md:w-11/12 md:mx-auto p-3 mt-12">
          <h1 className="text-xl">Testimonial</h1>
          <div className="space-y-3 mt-8 w-full md:w-10/12 md:mx-auto md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            {testimonials.map((tm, index) => (
              <div className="p-3" key={index}>
                <span className="rounded-md block py-8 px-3 bgColor shadow-lg">
                  <p className={`${lobster.className} text-sm text-white`}>
                    {tm.quote}
                  </p>
                </span>
                <div className="w-full mt-8 flex">
                  <span className="block h-[100px] w-[100px] rounded-full">
                    <Image
                      src={tm.imageSrc}
                      alt={tm.testName}
                      width={320}
                      height={160}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                      priority={true}
                    />
                  </span>
                  <span className="block my-auto ml-4">
                    <p className={`${lobster.className} text-base`}>
                      {tm.testName}
                    </p>
                    <p className={`${lobster.className} text-sm text-gray-50`}>
                      {tm.occupation}
                    </p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subscription*/}
        <div className="bg-black md:flex md:justify-between w-full p-5 md:w-10/12 mx-auto my-10">
          <div className="my-4 md:my-0 md:w-3/12">
            <p className={`text-center md:text-start text-sm text-gray-100`}>
              Subscribe to Our Newsletter
            </p>
            <p className={`text-center md:text-start text-sm text-gray-100`}>
              Newest Books Updates
            </p>
          </div>
          <div className="md:flex md:space-x-4">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Email"
              className=" p-3 w-full md:w-[500px] placeholder:text-gray-400 placeholder:italic"
            />
            <button className="p-3 block mt-6 md:mt-0 mx-auto md:mx-0 md:text-start bgColor text-white rounded-sm">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
