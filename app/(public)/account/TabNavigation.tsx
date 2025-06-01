import React from "react";

interface TabNavigationProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  currentTab,
  setTab,
}) => {
  const tabs = ["profile", "orders", "settings"];

  return (
    <nav className="flex gap-6 border-b px-6 pt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button py-4 ${
            currentTab === tab
              ? "text-black font-medium border-b-2 border-black"
              : "text-gray-500 hover:text-black"
          }`}
          onClick={() => setTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default TabNavigation;
