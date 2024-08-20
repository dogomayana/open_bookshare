import Link from "next/link";

export default function NoItem({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 backdrop-opacity-10 backdrop-invert-0 bg-black/80 grid place-content-center"
        onClick={onClose}
      >
        <div
          className="w-11/12 md:w-[620px] mx-auto p-3 bg-white rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-lg p-3 font-medium text-center">
            {" "}
            Book Availability
          </h1>
          <hr />

          <p className="mt-5 text-center text-[15px]">
            Book Title: <span className="text-gray-500">The Alchemist</span>
          </p>
          <p className="mt-5 text-center text-[15px]">
            Book Availabilty:{" "}
            <span className="text-gray-500">Not Available</span>
          </p>
          <p className="mt-5 text-center text-[15px]">
            Sorry, this book is currently not available. Please try searching
            for another book
          </p>
          <span className="flex mt-5 w-10/12 mx-auto justify-center">
            <button
              className="w-4/12 p-3 text-white font-medium text-sm  bgColor block rounded-md"
              onClick={onClose}
            >
              Close
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
