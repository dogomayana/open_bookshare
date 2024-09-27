import Link from "next/link";

export default function FoundItem({ isOpen, onClose, item }) {
  if (!isOpen) return null;
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 backdrop-opacity-10 backdrop-invert-0 bg-black/80 grid place-content-center"
        onClick={onClose}
      >
        <div
          className="w-full md:w-[620px] p-3 bg-white rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-lg p-3 font-medium text-center">
            {" "}
            Book Availability
          </h1>
          <hr />
          {item.map((cat, index) => (
            <div key={index}>
              <p className="mt-5 text-center text-[15px]">
                Book Title:{" "}
                <span className="text-gray-500">{cat.bookName}</span>
              </p>
              <p className="mt-5 text-center text-[15px]">
                Book Availabilty:{" "}
                <span className="text-gray-500">Available</span>
              </p>
              <Link
                href={`/pages/bookDetails/${cat.slug}`}
                className="p-3 my-3 text-center bgColor block rounded-md text-sm text-white"
              >
                Download Book
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
