"use client";

import { banner } from "@/public/assets";

export default function Banner() {
  return (
    <div
      className="text-white text-center py-[340px] bg-gray-50 border-l-neutral-950 border-solid border-y-[1px] border-y-gray-200 bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner.src})`,
        backgroundPosition: "center top -150px",
      }}
    >
      <h1>COMING SOON!</h1>
    </div>
  );
}
