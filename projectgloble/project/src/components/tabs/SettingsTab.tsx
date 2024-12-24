import React from 'react';
import { Bell, Shield, Eye, Moon } from 'lucide-react';

export function SettingsTab() {
  return (
    <div className="space-y-6">
      {[
        { icon: Bell, label: 'Notifications', description: 'Manage your notification preferences' },
        { icon: Shield, label: 'Privacy', description: 'Control your privacy settings' },
        { icon: Eye, label: 'Visibility', description: 'Manage profile visibility' },
        { icon: Moon, label: 'Theme', description: 'Choose your preferred theme' },
      ].map(({ icon: Icon, label, description }) => (
        <div key={label} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon className="w-5 h-5 text-blue-500" />
            <div>
              <h3 className="font-medium text-gray-800">{label}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
          <button className="px-3 py-1 text-sm text-blue-500 hover:bg-blue-50 rounded-md transition-colors">
            Configure
          </button>
        </div>
      ))}
    </div>
  );
}