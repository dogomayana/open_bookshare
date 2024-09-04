import HomePage from "./components/HomePage";

import { createClient } from "@/app/utils/supabase/server";
import { getFeaturedBooks, waitFor10Seconds } from "@/app/service/fetcher";
export default async function Home() {
  const data = await getFeaturedBooks();
  const t = await waitFor10Seconds();
  const [bookDetails, timer] = await Promise.all([data, t]);

  return (
    <>
      {" "}
      <HomePage data={bookDetails} />
    </>
  );
}
