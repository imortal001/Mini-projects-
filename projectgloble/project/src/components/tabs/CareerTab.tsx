import React from 'react';
import { Building2, GraduationCap, Trophy } from 'lucide-react';

export function CareerTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-3">
        <Building2 className="w-5 h-5 text-blue-500 mt-1" />
        <div>
          <h3 className="font-medium text-gray-800">Current Position</h3>
          <p className="text-gray-600">Senior Developer</p>
          <p className="text-sm text-gray-500">2020 - Present</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <GraduationCap className="w-5 h-5 text-blue-500 mt-1" />
        <div>
          <h3 className="font-medium text-gray-800">Education</h3>
          <p className="text-gray-600">Computer Science</p>
          <p className="text-sm text-gray-500">2016 - 2020</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Trophy className="w-5 h-5 text-blue-500 mt-1" />
        <div>
          <h3 className="font-medium text-gray-800">Achievements</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Best Team Player 2022</li>
            <li>Innovation Award 2021</li>
          </ul>
        </div>
      </div>
    </div>
  );
}