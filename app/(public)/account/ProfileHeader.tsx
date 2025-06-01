import React from "react";

const ProfileHeader = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 md:p-6 rounded-2xl shadow mb-6 mx-4">
      <div className="flex items-center gap-2 md:gap-4">
        <div className="w-12 h-12 md:w-16 md:h-16 ml-[-5px] md:ml-0 rounded-full bg-black text-white flex items-center justify-center text-lg md:text-xl font-semibold">
          AS
        </div>
        <div>
          <h2 className="text-base md:text-2xl font-semibold text-gray-800">
            Alex Sharma
          </h2>
          <p className="text-sm md:text-2xl text-gray-500">
            alex.sharma@email.com
          </p>
        </div>
      </div>
      <button className="bg-black text-white px-4 py-2 text-xs md:text-base rounded-xl mx-2 md:mx-0 hover:bg-gray-800 transition">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileHeader;
