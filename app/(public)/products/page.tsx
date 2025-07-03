"use client";

import SidebarFilter from "./SidebarFilter";
import ProductGrid from "./ProductGrid";

export default function Products() {
  return (
    <main className="bg-white text-gray-800 font-sans pt-12 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-wrap md:flex-nowrap gap-4 md:gap-10">
        <SidebarFilter />
        <ProductGrid />
      </div>
    </main>
  );
}
