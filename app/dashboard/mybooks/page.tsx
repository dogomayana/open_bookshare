import AllBooks from "@/app/components/AllBooks";
import Link from "next/link";
import Image from "next/image";
import NoDonationYet from "@/app/components/NoDonation";
import DashNav from "@/app/components/DashNav";
import CatNav from "@/app/components/CatNav";

export default function Mybooks() {
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
      <CatNav />

      <main className="w-full mt-8 md:mt-2 md:flex md:justify-between md:space-x-4">
        {/* Left content */}
        <div className="p-3 md:w-9/12 bg-white">
          <h1 className="text-lg font-semibold md:pl-5 md:py-3">
            Donated Books
          </h1>
          <NoDonationYet />

          {/* <div className="w-full mt-10 md:w-11/12 mx-auto bg-[#f3f4f6] p-3 grid grid-cols-2 md:grid-cols-4 gap-5 place-content-center">
            {booksCatt.map((book, index) => (
              <div key={index} className="block">
                <Link href={`/pages/bookDetails/${pol}`}>
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
                  href={`/pages/bookDetails/${pol}`}
                  className="px-3 block text-center py-2 my-3 rounded-md text-sm font-medium text-[#0095eb] bg-blue-200 hover:text-gray-100 hover:bg-[#0095eb]"
                >
                  Download
                </Link>
              </div>
            ))}
          </div> */}
        </div>
        {/* Side content */}
        <div className="w-full p-3 md:w-3/12 mt-8 md:p-0 md:mt-0">
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

            <span className="my-3 block">
              <Image
                src={"/book2.png"}
                alt="bannerImage"
                width={170}
                height={171}
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
              href={`/pages/${"bookslug"}`}
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
