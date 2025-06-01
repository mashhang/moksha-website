"use client";

import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import TabNavigation from "./TabNavigation";
import ProfileTab from "./ProfileTab";
import OrdersTab from "./OrdersTab";
import SettingsTab from "./SettingsTab";

const AccountPage = () => {
  const [currentTab, setCurrentTab] = useState("profile");

  const renderTabContent = () => {
    switch (currentTab) {
      case "profile":
        return <ProfileTab />;
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
      <ProfileHeader />
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
