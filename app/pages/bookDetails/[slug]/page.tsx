"use client";
import NavBar from "@/app/components/Navbar";
import { supabase } from "@/app/config/supabase";
import Image from "next/image";
import Link from "next/link";
export default function Page({ params }: { params: { slug: string } }) {
  const booksCatt = [
    "/book3.png",
    "/book4.png",
    "/book_1.png",
    "/book2.png",
    "/book1.png",
  ];
  const pol = "lop";

  async function download() {
    const { data, error } = await supabase.storage
      .from("book_share")
      .download("book_image/test3.jpg");
    console.log(data);
    console.log(error);
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
            <Image
              src={"/book3.png"}
              alt="bannerImage"
              width={320}
              height={160}
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
              priority={true}
            />
          </span>
        </div>

        <div className="md:w-7/12 p-4">
          <h1 className="text-2xl font-semibold">Psychology of Money</h1>
          <div className="flex space-x-2 my-6">
            {/* <Image
              src={"/Stephan.png"}
              alt="bannerImage"
              width={50}
              height={50}
              priority={true}
            /> */}
            <p className="text-gray-500 my-auto">
              <span>Author: </span>Morgan Housel
            </p>
          </div>
          <div className="md:w-10/12">
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus ad ex voluptatum incidunt, aspernatur blanditiis hic,
              debitis cupiditate totam cumque dolorem nihil. Ullam voluptas unde
              harum aperiam tenetur quae molestiae odio accusamus fugit
              delectus, eveniet error doloremque ab, quis minus dolor nostrum
              sapiente quos facilis similique saepe adipisci, porro nisi!
            </p>
          </div>

          <div className="md:w-10/12 my-8 space-y-2">
            <span className="w-full flex">
              <p className="w-6/12 font-semibold md:inline-block">Publisher</p>{" "}
              <p className="w-6/12 md:inline-block">Hariman House</p>
            </span>{" "}
            <span className="w-full flex">
              <p className="w-6/12 font-semibold md:inline-block">
                Book Category
              </p>{" "}
              <p className="w-6/12 md:inline-block">Finance</p>
            </span>
            <span className="w-full flex">
              <p className="w-6/12 font-semibold md:inline-block">
                Book Publication
              </p>{" "}
              <p className="w-6/12 md:inline-block">20659900058</p>
            </span>
            <span className="w-full flex">
              <p className="w-6/12 font-semibold md:inline-block">Language</p>{" "}
              <p className="w-6/12 md:inline-block">English</p>
            </span>
            <span className="w-full flex">
              <p className="w-6/12 font-semibold md:inline-block">ISBN</p>{" "}
              <p className="w-6/12 md:inline-block">9995659999499</p>
            </span>
          </div>
          <button
            className="py-3 w-full mt-5 px-5 rounded-sm bgColor tColor"
            onClick={download}
          >
            Download
          </button>
        </div>
      </div>
      <article className="w-full p-3 mx-auto mt-20 bg-white">
        <h1 className="text-base font-semibold ml-4">Related Books</h1>
        <div className="w-full my-8 mx-auto bg-[#f3f4f6] p-3 grid grid-cols-2 md:grid-cols-5 gap-5 place-content-center">
          {booksCatt.map((book, index) => (
            <div key={index} className="block">
              {/* <Link href={`/pages/${pol}`}> */}
              <span className="block">
                <Image
                  src={book}
                  alt="bannerImage"
                  width={171}
                  height={170}
                  // style={{
                  //   width: "100%",
                  //   height: "100%",
                  //   objectFit: "fill",
                  // }}
                  priority={true}
                />
              </span>

              <h1 className="pl-3 text-ellipsis text-[15px]">
                What i learned from trees
              </h1>
              <h3 className="pl-3  mb-4 text-gray-500 text-sm">Author Name</h3>

              <Link
                href={`/pages/bookDetails/${"lop"}`}
                onClick={download}
                className="px-3 block text-center py-2 my-3 rounded-md text-sm font-semibold text-[#0095eb] bg-blue-200 hover:text-gray-100 hover:bg-[#0095eb]"
              >
                Download
              </Link>
              {/* </span> */}
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
