"use client";

import { useEffect, useState } from "react";
import { banner } from "@/public/assets";

export default function Banner() {
  const [bgOffset, setBgOffset] = useState("-40px");

  useEffect(() => {
    const updateOffset = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile
        setBgOffset("0px");
      } else if (width < 1024) {
        // Tablet
        setBgOffset("0px");
      } else {
        // Desktop
        setBgOffset("-100px");
      }
    };

    updateOffset(); // Initial call
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <div
      className="text-white text-center py-[340px] bg-gray-50 border-l-neutral-950 border-solid border-y-[1px] border-y-gray-200 bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner.src})`,
        backgroundPositionY: bgOffset,
      }}
    >
      <h1>COMING SOON!</h1>
    </div>
  );
}
