"use client";

import React, { useEffect, useState } from "react";

type Props = {
  setIsEditing: (value: boolean) => void;
};

export default function ProfileTab({
  isEditing,
  setIsEditing,
}: {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}) {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    phone?: string;
    address?: string;
  } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "US";

  const handleSave = async () => {
    if (!user) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:4000/api/user/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: user.name,
          phone: user.phone,
          address: user.address,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to update profile");
      }

      const updatedUser = await res.json();

      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error: any) {
      alert(error.message || "An error occurred");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
      <div>
        <p className="text-xs md:text-sm text-gray-500">Full Name</p>
        {isEditing ? (
          <input
            value={user?.name || ""}
            onChange={(e) =>
              setUser((prev) =>
                prev ? { ...prev, name: e.target.value } : null
              )
            }
            className="border rounded px-2 py-1 w-full"
          />
        ) : (
          <p className="text-sm md:text-base text-gray-800">
            {user?.name || "User Name"}
          </p>
        )}
      </div>
      <div>
        <p className="text-xs md:text-sm text-gray-500">Email</p>
        {isEditing ? (
          <input
            value={user?.email || ""}
            onChange={(e) =>
              setUser((prev) =>
                prev ? { ...prev, email: e.target.value } : null
              )
            }
            className="border rounded px-2 py-1 w-full"
          />
        ) : (
          <p className="text-sm md:text-base text-gray-800">
            {user?.email || "user@example.com"}
          </p>
        )}
      </div>
      <div>
        <p className="text-xs md:text-sm text-gray-500">Phone</p>
        {isEditing ? (
          <div className="flex gap-2">
            {/* Country Code Dropdown */}
            <select
              value={user?.phone?.split(" ")[0] || "+63"}
              onChange={(e) => {
                const numberOnly =
                  user?.phone?.replace(/[^0-9]/g, "").slice(-10) || "";
                const formatted = numberOnly
                  .replace(/(\d{3})(\d{3})(\d{0,4})/, "$1 $2 $3")
                  .trim();
                setUser((prev) =>
                  prev
                    ? { ...prev, phone: `${e.target.value} ${formatted}` }
                    : null
                );
              }}
              className="border rounded px-2 py-1"
            >
              <option value="+63">🇵🇭 +63</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+91">🇮🇳 +91</option>
            </select>

            {/* Phone Number Input with live formatting */}
            <input
              value={user?.phone?.split(" ").slice(1).join(" ") || ""}
              onChange={(e) => {
                // Remove non-digit characters
                const digits = e.target.value.replace(/\D/g, "").slice(0, 10);

                // Format as you type: 998 364 9840
                let formatted = digits;
                if (digits.length > 3 && digits.length <= 6) {
                  formatted = `${digits.slice(0, 3)} ${digits.slice(3)}`;
                } else if (digits.length > 6) {
                  formatted = `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
                }

                setUser((prev) =>
                  prev
                    ? {
                        ...prev,
                        phone: `${user?.phone?.split(" ")[0] || "+63"} ${formatted}`,
                      }
                    : null
                );
              }}
              placeholder="998 364 9840"
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        ) : (
          <p className="text-sm md:text-base text-gray-800">
            {user?.phone || "+63 912 345 6789"}
          </p>
        )}
      </div>

      <div>
        <p className="text-xs md:text-sm text-gray-500">Address</p>
        {isEditing ? (
          <input
            value={user?.address || ""}
            onChange={(e) =>
              setUser((prev) =>
                prev ? { ...prev, address: e.target.value } : null
              )
            }
            className="border rounded px-2 py-1 w-full"
          />
        ) : (
          <p className="text-sm md:text-base text-gray-800">
            {user?.address || "123 Moksha Lane, Pasig City"}
          </p>
        )}
      </div>
      {isEditing && (
        <div className="col-span-2 flex justify-end gap-4 mt-4">
          <button
            onClick={handleSave}
            className="bg-black text-white px-6 py-2 rounded-lg"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
