"use client";
import React from "react";
import UserContextComp from "./userContext";
import { usePathname } from "next/navigation";

import ProtectRoute from "@/app/components/ProtectRoutes";
const routes = [
  "/",
  "/pages/allBooks",
  "/pages/category",
  "pages/logIn",
  "pages/signUp",
];
export default function Provider({ children }) {
  const pathname = usePathname();
  return (
    <>
      {typeof document !== undefined && routes.includes(pathname) ? (
        <UserContextComp>{children}</UserContextComp>
      ) : (
        <UserContextComp>
          <ProtectRoute>{children} </ProtectRoute>
        </UserContextComp>
      )}
    </>
  );
}
