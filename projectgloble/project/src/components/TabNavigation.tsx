import React from 'react';
import { User, Briefcase, Heart, Settings } from 'lucide-react';

interface TabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabProps) {
  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'career', label: 'Career', icon: Briefcase },
    { id: 'interests', label: 'Interests', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex justify-center space-x-2 px-4 py-2">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onTabChange(id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
            ${activeTab === id 
              ? 'bg-blue-500 text-white shadow-md' 
              : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}