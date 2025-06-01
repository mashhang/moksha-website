export default function SettingsTab() {
  return (
    <form className="space-y-2 md:space-y-4 max-w-md">
      <div>
        <label className="block text-xs md:text-sm text-gray-600 mb-1">
          Current Password
        </label>
        <input
          type="password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div>
        <label className="block text-xs md:text-sm text-gray-600 mb-1">
          New Password
        </label>
        <input
          type="password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div>
        <label className="block text-xs md:text-sm text-gray-600 mb-1">
          Confirm New Password
        </label>
        <input
          type="password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <button
        type="submit"
        className="mt-2 md:mt-4 text-xs md:text-base bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
      >
        Update Password
      </button>
    </form>
  );
}
