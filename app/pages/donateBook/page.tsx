"use client";

import NavBar from "@/app/components/Navbar";
import { supabase } from "@/app/config/supabase";
import React from "react";

function DonateBook() {
  const [bookDetails, setBookDetails] = React.useState<any>({
    bookName: "",
    isbn: "",
    authorName: "",
    donorName: "",
  });

  const [selectedOption, setSelectedOption] = React.useState<string>("");
  const [bookBrief, setBookBrief] = React.useState<string>("");
  const [imgChecker, setImgChecker] = React.useState<any>("");
  const [fileChecker, setFileChecker] = React.useState<any>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const bookChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookDetails((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  const bookImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImgChecker(file);
  };

  const bookPDFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileChecker(file);
  };
  const bookSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { data: imgC, error: errC } = await supabase.storage
        .from("book_share")
        .upload(`book_image/${imgChecker.name}`, imgChecker, {
          cacheControl: "3600",
          upsert: true,
        });

      const { data: bookPath, error: err } = await supabase.storage
        .from("book_share")
        .upload(`book_file/${fileChecker.name}`, fileChecker, {
          cacheControl: "3600",
          upsert: true,
        });

      const { data: imgI } = supabase.storage
        .from("book_share")
        .getPublicUrl(`book_image/${imgChecker.name}`);

      const { error } = await supabase.from("book_share").insert({
        bookName: bookDetails.bookName,
        authorName: bookDetails.authorName,
        isbn: bookDetails.isbn,
        donorName: bookDetails.donorName,
        categories: selectedOption,
        bookImage: imgI.publicUrl,
        bookBrief: bookBrief,
        bookPDF: bookPath?.path,
        slug: bookDetails.bookName.split(" ").join("_"),
      });
      if (error) {
        alert("Error fetching product: " + error.message);
        return;
      } else {
        alert("Successful");
      }
    } catch (error) {}
    setIsLoading(false);
  };
  return (
    <>
      <NavBar />
      <form
        onSubmit={bookSubmit}
        className="w-full px-3 py-8 my-8 md:w-6/12 mx-auto bg-white"
      >
        <label htmlFor="bookName" className="block">
          <span className="my-3 block text-gray-600 text-[15px]">
            Book Name
          </span>
          <input
            type="text"
            name="bookName"
            id="bookName"
            value={bookDetails.bookName}
            onChange={bookChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter book name"
          />
        </label>
        <select
          className="block my-4 w-full p-2 text-gray-600 text-[15px] border border-gray-400 rounded"
          onChange={selectChange}
          value={selectedOption}
          required
        >
          <option value={""} className="text-gray-600 text-[15px]">
            Book Categories
          </option>
          <option value="finance">Finance</option>
          <option value="tech">Tech</option>
          <option value="travel">Travel</option>
          <option value="education">Education</option>
        </select>
        <label htmlFor="isbn" className="block">
          <span className="my-3 block text-gray-600 text-[15px]">ISBN</span>
          <input
            type="text"
            name="isbn"
            id="isbn"
            value={bookDetails.isbn}
            onChange={bookChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter ISBN"
          />
        </label>
        <label htmlFor="authorName" className="block">
          <span className="my-3 block text-gray-600 text-[15px]">
            Author Name
          </span>
          <input
            type="text"
            name="authorName"
            id="authorName"
            value={bookDetails.authorName}
            onChange={bookChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter Author Name"
          />
        </label>

        <label htmlFor="donorName" className="block">
          <span className="my-3 block text-gray-600 text-[15px]">
            Donor Name
          </span>
          <input
            type="text"
            name="donorName"
            id="donorName"
            value={bookDetails.donorName}
            onChange={bookChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter Donor Name"
          />
        </label>
        <label htmlFor="bookReview" className="block">
          <span className="my-3 block text-gray-600 text-[15px]">
            Book review
          </span>
          <textarea
            id="bookReview"
            name="bookReview"
            required
            rows={4}
            cols={60}
            value={bookBrief}
            onChange={(e) => setBookBrief(e.target.value)}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter full name"
          />{" "}
        </label>
        <label htmlFor="bookImage" className="block my-5">
          <span className="my-2 text-sm after:content-['*'] after:ml-0.5 after:text-red-700 block after:text-lg">
            Book Cover
          </span>
          <input
            required
            type="file"
            id="bookImage"
            accept="image/*"
            onChange={bookImgChange}
            className="w-full p-3 border border-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
          />
        </label>
        {imgChecker != undefined && imgChecker.size / 1e3 > 400 && (
          <p className="text-sm text-red-700">
            Cover Image should be below 400kb !
          </p>
        )}

        <label htmlFor="bookPDF" className="block my-5">
          <span className="my-2 text-sm after:content-['*'] after:ml-0.5 after:text-red-700 block after:text-lg">
            Upload ebook File (PDF)
          </span>
          <input
            required
            type="file"
            id="bookPDF"
            accept=".pdf"
            onChange={bookPDFChange}
            className="w-full p-3 border border-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
          />
        </label>
        {fileChecker != undefined && fileChecker.size / 1e6 > 5 && (
          <p className="text-sm text-red-700">File should be below 5MB !</p>
        )}
        <button
          className="p-3 bg-blue-200 text-blue-700 w-5/12 mx-auto my-8 block"
          type="submit"
          disabled={fileChecker.size / 1e6 > 5 || imgChecker.size / 1e3 > 4}
        >
          {isLoading ? "Submiting..." : "Submit"}
        </button>
        <h1 className="text-lg text-center my-4">Security Measures</h1>
        <p className="text-sm text-center md:px-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
          asperiores voluptatum quibusdam nisi assumenda recusandae numquam
          nulla. Adipisci, id nihil.
        </p>
      </form>
    </>
  );
}

export default DonateBook;
