const { supabase } = require("../config/supabase");

export const getUserDetails = async (email) => {
  const { data, error } = await supabase
    .from(`book_share`)
    .select(`email,fullName`)
    .eq("email", email);

  if (error) {
    return;
  }

  return data;
};
export const getAllBooks = async () => {
  const { data, error } = await supabase
    .from(`book_share`)
    .select(`bookName,authorName,bookImage,slug`);

  if (error) {
    return;
  }
  return data;
};
export const searchBook = async (bookName) => {
  const { data, error } = await supabase
    .from(`book_share`)
    .select(`bookName,authorName,bookImage,slug`)
    .ilike("bookName", `%${bookName}%`);

  if (error) {
    return;
  }
  return data;
};
export const getFeaturedBooks = async () => {
  const { data, error } = await supabase
    .from(`book_share`)
    .select(`bookName,authorName,bookImage,slug,bookBrief`)
    .limit(4);

  if (error) {
    return;
  }
  return data;
};

export const getBookBySlug = async (slug) => {
  const { data, error } = await supabase
    .from(`book_share`)
    .select(
      `bookName,authorName,donorName,bookImage,slug,categories,bookBrief,bookPDF,isbn`
    )
    .eq(`slug`, slug);

  if (error) {
    // console.log(error);
    return;
  }
  return data[0];
};
export const getBookByCategory = async (category) => {
  const { data, error } = await supabase
    .from(`book_share`)
    .select(
      `bookName,authorName,donorName,bookImage,slug,categories,bookBrief,bookPDF,isbn`
    )
    .eq(`categories`, category);

  if (error) {
    // console.log(error);
    return;
  }
  return data;
};
export const getRelatedBooks = async (category) => {
  const { data, error } = await supabase
    .from(`book_share`)
    .select(`bookName,authorName,slug,bookImage`)
    .eq(`categories`, category);

  if (error) {
    // console.log(error);
    return;
  }
  return data;
};

export const getDownloadedBooks = async (fullName) => {
  const { data, error } = await supabase
    .from("bookshare_download")
    .select("bookName")
    .eq("name", fullName);
  if (error) {
    return;
  }
  let bookName = data[0];
  const { data: down, error: dwnErr } = await supabase
    .from(`book_share`)
    .select(
      `bookName,authorName,donorName,bookImage,slug,categories,bookBrief,bookPDF,isbn`
    )
    .eq(`bookName`, bookName);

  if (dwnErr) {
    return;
  }
  return down;
};

export function waitFor10Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 10000); // 10000 milliseconds = 10 seconds
  });
}
