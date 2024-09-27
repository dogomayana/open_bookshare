import CatNav from "@/app/components/CatNav";

import CatPage from "./CatPage";
import { getBookByCategory } from "@/app/service/fetcher";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;
  const catData: any | undefined = await getBookByCategory(category);
  return <CatPage data={catData} />;
}
