"use client";

import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import ProfileHeader from "./ProfileHeader";
import TabNavigation from "./TabNavigation";
import ProfileTab from "./ProfileTab";
import OrdersTab from "./OrdersTab";
import SettingsTab from "./SettingsTab";

const AccountPage = () => {
  const [currentTab, setCurrentTab] = useState("profile");
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/");
    }
  }, []);

  const renderTabContent = () => {
    switch (currentTab) {
      case "profile":
        return <ProfileTab isEditing={isEditing} setIsEditing={setIsEditing} />;
      case "orders":
        return <OrdersTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto pt-24 py-10">
      <ProfileHeader setIsEditing={setIsEditing} />
      <div className="bg-white rounded-2xl shadow mx-4">
        <TabNavigation currentTab={currentTab} setTab={setCurrentTab} />
        <div className="p-4 md:p-6 md:space-y-4 space-y-2">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
