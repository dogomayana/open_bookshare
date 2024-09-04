import { getBookBySlug, getRelatedBooks } from "@/app/service/fetcher";
import BookDetails from "./BookDetails";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data: any = await getBookBySlug(slug);
  let category = data?.categories;
  const related: any = await getRelatedBooks(category);
  const [bookDetails, relatedBooks] = await Promise.all([data, related]);

  return (
    <>
      <BookDetails data={bookDetails} relatedBooks={relatedBooks} />
    </>
  );
}
