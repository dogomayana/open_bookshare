import Link from "next/link";

export default function NoDownloadsYet() {
  return (
    <>
      <div className="w-full md:w-[600px] mx-auto mt-10 p-4 rounded-md shadow-md bg-white">
        <h1 className="text-lg mb-10 text-center">No Download Yet</h1>
        <Link
          href={"/dashboard/allBooks"}
          className="text-base text-blue-500 block underline text-center"
        >
          Do you want to download a book?
        </Link>
      </div>
    </>
  );
}
