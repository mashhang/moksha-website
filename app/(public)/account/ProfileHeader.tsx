import React from "react";

const ProfileHeader = () => {
  return (
    <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow mb-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-xl font-semibold">
          AS
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Alex Sharma</h2>
          <p className="text-gray-500">alex.sharma@email.com</p>
        </div>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileHeader;
