const { supabase } = require("../config/supabase");
export async function getQuestions() {
  const { data, error } = await supabase
    .from(`trcn`)
    .select(`id,category,questions,correctOption,options`);
  //   .eq("category", `${filterCategory}`);
  if (error) {
    // console.log(error?.statusText);
  }
  //   console.log(data);
  return data;
}
const { data, error } = await supabase.storage
  .from("book_share")
  .download("folder/avatar1.png");
