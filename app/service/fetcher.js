const { supabase } = require("../config/supabase");

export const getUserDetails = async (email) => {
  const { data, error } = await supabase
    .from(`bookshare_users`)
    .select(`email,fullName`)
    .eq("email", email);

  if (error) {
    console.log(error);
  }
  console.log(data);
  return data;
};
