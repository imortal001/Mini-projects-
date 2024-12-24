import React, { useState } from 'react';
import type { UserProfile } from '../types';
import { TabNavigation } from './TabNavigation';
import { ProfileTab } from './tabs/ProfileTab';
import { CareerTab } from './tabs/CareerTab';
import { InterestsTab } from './tabs/InterestsTab';
import { SettingsTab } from './tabs/SettingsTab';

interface ProfileCardProps {
  user: UserProfile | null;
  isLoading: boolean;
}

export function ProfileCard({ user, isLoading }: ProfileCardProps) {
  const [activeTab, setActiveTab] = useState('profile');

  if (isLoading) {
    return (
      <div className="min-h-[400px] w-full max-w-md bg-white rounded-xl shadow-lg animate-pulse">
        <div className="flex flex-col items-center p-8">
          <div className="w-32 h-32 bg-gray-200 rounded-full mb-4" />
          <div className="w-48 h-6 bg-gray-200 rounded mb-2" />
          <div className="w-32 h-4 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  if (!user) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab user={user} />;
      case 'career':
        return <CareerTab />;
      case 'interests':
        return <InterestsTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="absolute -bottom-16 inset-x-0 flex justify-center">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
      
      <div className="pt-20 pb-8 px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {user.name.title}. {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600 mt-2">
            {user.location.city}, {user.location.country}
          </p>
        </div>

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="mt-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}