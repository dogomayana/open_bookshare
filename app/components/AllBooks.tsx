import Link from "next/link";
import Image from "next/image";
export default function AllBooks({ allBooks }: { allBooks: any }) {
  const booksCatt = [
    "/book3.png",
    "/book4.png",
    "/book_1.png",
    "/book2.png",
    "/book1.png",
  ];
  const pol = "lop";

  return (
    <article className="w-full bg-white border-gray-500 border my-4 rounded-md">
      <div className="w-full mt-10 md:w-11/12 mx-auto bg-[#f3f4f6] p-3 grid grid-cols-2 md:grid-cols-5 gap-5 place-content-center">
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
            <h3 className="pl-3  mb-4 text-gray-500 text-sm">Author Name</h3>

            <Link
              href={`/pages/${pol}`}
              className="px-3 block text-center py-2 my-3 rounded-md text-sm font-semibold text-[#0095eb] bg-blue-200 hover:text-gray-100 hover:bg-[#0095eb]"
            >
              Download
            </Link>
            {/* </span> */}
          </div>
        ))}
      </div>
    </article>
  );
}
