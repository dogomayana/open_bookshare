import HomePage from "./components/HomePage";

import { createClient } from "@/app/utils/supabase/server";

export default async function Home() {
  return <>{typeof document !== undefined ? <HomePage /> : <p>Loading</p>}</>;
}
