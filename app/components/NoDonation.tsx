import Link from "next/link";

export default function NoDonationsYet() {
  return (
    <>
      <div className="w-full md:w-[600px] mx-auto mt-10 p-4 rounded-md shadow-md bg-white">
        <h1 className="text-lg mb-10">
          Be part of the Bookshare campaign by donating a book
        </h1>
        <Link
          href={"/pages/donateBook"}
          className="text-base text-blue-500 block underline text-center"
        >
          Donate a book
        </Link>
      </div>
    </>
  );
}
