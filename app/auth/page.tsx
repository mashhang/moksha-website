"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("token");

    if (token) {
      localStorage.setItem("token", token);

      // Fetch current user
      fetch("http://localhost:4000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          if (user?.id) {
            localStorage.setItem("user", JSON.stringify(user));
            console.log("✅ Logged in user:", user);
            router.replace("/");
          } else {
            console.log("❌ Failed to fetch user info");
            router.replace("/login");
          }
        });
    } else {
      router.replace("/");
    }
  }, []);

  return <div className="p-6 text-center">Logging you in...</div>;
}
