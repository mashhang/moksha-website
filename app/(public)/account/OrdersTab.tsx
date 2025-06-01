export default function OrdersTab() {
  return (
    <div className=" space-y-2 md:space-y-4">
      <div className="border p-2 md:p-4 rounded-lg">
        <p className="text-gray-700">Order #MKS12345</p>
        <p className="text-xs md:text-sm text-gray-500">Date: May 21, 2025</p>
        <p className="text-xs md:text-sm text-gray-500">
          Status:{" "}
          <span className="text-sm md:text-base text-green-600">Delivered</span>
        </p>
      </div>
      <div className="border p-2 md:p-4 rounded-lg">
        <p className="text-sm md:text-base text-gray-700">Order #MKS12210</p>
        <p className="text-xs md:text-sm text-gray-500">Date: May 10, 2025</p>
        <p className="text-xs md:text-sm text-gray-500">
          Status:{" "}
          <span className="text-sm md:text-base text-yellow-600">
            Processing
          </span>
        </p>
      </div>
    </div>
  );
}
