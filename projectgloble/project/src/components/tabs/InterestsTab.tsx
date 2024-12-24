import React from 'react';
import { Music, Book, Plane, Camera } from 'lucide-react';

export function InterestsTab() {
  const interests = [
    { icon: Music, label: 'Music', details: 'Jazz & Classical' },
    { icon: Book, label: 'Reading', details: 'Science Fiction' },
    { icon: Plane, label: 'Travel', details: 'Adventure Seeker' },
    { icon: Camera, label: 'Photography', details: 'Street & Nature' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {interests.map(({ icon: Icon, label, details }) => (
        <div key={label} className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3 mb-2">
            <Icon className="w-5 h-5 text-blue-500" />
            <h3 className="font-medium text-gray-800">{label}</h3>
          </div>
          <p className="text-gray-600 text-sm">{details}</p>
        </div>
      ))}
    </div>
  );
}