"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/app/context/userContext";

export default function ProtectRoute({ children }) {
  const { user } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined && !user) {
      router.push("/pages/logIn");
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
}
