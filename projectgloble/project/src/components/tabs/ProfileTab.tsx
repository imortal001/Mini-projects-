import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import type { UserProfile } from '../../types';

interface ProfileTabProps {
  user: UserProfile;
}

export function ProfileTab({ user }: ProfileTabProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 text-gray-600">
        <Mail className="w-5 h-5 text-blue-500" />
        <span>{user.email}</span>
      </div>
      
      <div className="flex items-center space-x-3 text-gray-600">
        <Phone className="w-5 h-5 text-blue-500" />
        <span>{user.phone}</span>
      </div>
      
      <div className="flex items-center space-x-3 text-gray-600">
        <MapPin className="w-5 h-5 text-blue-500" />
        <span>{user.location.city}, {user.location.country}</span>
      </div>
      
      <div className="flex items-center space-x-3 text-gray-600">
        <Calendar className="w-5 h-5 text-blue-500" />
        <span>{user.dob.age} years old</span>
      </div>
    </div>
  );
}