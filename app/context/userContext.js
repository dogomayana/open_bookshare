"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { createClient } from "@/app/utils/supabase/client";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/app/config/firebase";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const supabase = createClient();

  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState(null);

  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.
  const getUserDetails = async (fEmail) => {
    const { data, error } = await supabase
      .from(`bookshare_users`)
      .select(`email,fullName`)
      .eq("email", fEmail);

    if (error) {
      // console.log(error);
    }

    return data[0]?.fullName;
  };
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const { uid, displayName, email, photoURL } = user;
          setUser({ uid, displayName, email, photoURL });
          if (displayName == null) {
            let lop = await getUserDetails(email);
            setFullName(lop);
          }
          // console.log("min", user.displayName);
        } else setUser(null);
      } catch (error) {
      } finally {
        setLoadingUser(false);
      }
    });

    // Unsubscribe auth listener on unmount
    return () => unsubscriber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, fullName, setFullName, loadingUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);
