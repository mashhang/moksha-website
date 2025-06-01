export default function ProfileTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
      <div>
        <p className="text-xs md:text-sm text-gray-500">Full Name</p>
        <p className="text-sm md:text-base text-gray-800">Alex Sharma</p>
      </div>
      <div>
        <p className="text-xs md:text-sm text-gray-500">Email</p>
        <p className="text-sm md:text-base text-gray-800">
          alex.sharma@email.com
        </p>
      </div>
      <div>
        <p className="text-xs md:text-sm text-gray-500">Phone</p>
        <p className="text-sm md:text-base text-gray-800">+63 912 345 6789</p>
      </div>
      <div>
        <p className="text-xs md:text-sm text-gray-500">Address</p>
        <p className="text-sm md:text-base text-gray-800">
          123 Moksha Lane, Pasig City
        </p>
      </div>
    </div>
  );
}
