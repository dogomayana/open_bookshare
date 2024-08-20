"use client";
import { useState, useEffect, createContext, useContext } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/app/config/firebase";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const { uid, displayName, email, photoURL } = user;
          console.log(user);
          setUser({ uid, displayName, email, photoURL });
        } else setUser(null);
      } catch (error) {
      } finally {
        setLoadingUser(false);
      }
    });

    // Unsubscribe auth listener on unmount
    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);
