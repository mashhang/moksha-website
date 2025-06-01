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
      <div className="bg-white rounded-2xl shadow">
        <TabNavigation currentTab={currentTab} setTab={setCurrentTab} />
        <div className="p-6 space-y-4">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default AccountPage;
