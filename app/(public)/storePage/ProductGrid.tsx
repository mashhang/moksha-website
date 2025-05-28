import { sampleshirt } from "@/public/assets";

export default function ProductGrid() {
  return (
    <section className="w-full md:w-3/4 min-w-0">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">All Products</h2>
        <select className="border rounded px-3 py-1 text-sm">
          <option>Sort by</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={sampleshirt.src}
              alt={`Product ${i + 1}`}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h4 className="font-medium text-lg">Product {i + 1}</h4>
              <p className="text-gray-500">${(19.99 + i * 10).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
