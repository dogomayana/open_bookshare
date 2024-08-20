import AllBooks from "@/app/components/AllBooks";
import Link from "next/link";
import Image from "next/image";

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
      <h1 className="text-lg font-medium">My Books</h1>
      <main className="w-full mt-2 flex justify-between space-x-4">
        <div className="w-9/12 border-green-500 border ">
          <AllBooks allBooks={undefined} />
          <article className="w-full bg-white border-gray-500 border my-5 rounded-md">
            <h1 className="text-lg font-medium pl-5 py-3">Downloaded Books</h1>

            <div className="w-full mt-10 md:w-11/12 mx-auto bg-[#f3f4f6] p-3 grid grid-cols-2 md:grid-cols-4 gap-5 place-content-center">
              {booksCatt.map((book, index) => (
                <div key={index} className="block">
                  <Link href={`/pages/bookDetails/${pol}`}>
                    <span className="block">
                      <Image
                        src={book}
                        alt="bannerImage"
                        width={171}
                        height={170}
                        // style={{ width: "100%", height: "100%", objectFit: "fill" }}
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
                    href={`/pages/${pol}`}
                    className="px-3 block text-center py-2 my-3 rounded-md text-sm font-medium text-[#0095eb] bg-blue-200 hover:text-gray-100 hover:bg-[#0095eb]"
                  >
                    Download
                  </Link>
                </div>
              ))}
            </div>
          </article>
        </div>
        {/* Side content */}
        <div className="w-3/12">
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
            <span className="my-3 block h-[171px]">
              <Image
                src={"/book2.png"}
                alt="bannerImage"
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
              Read Now
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
