import React from 'react';
import { 
  Search,
  Bell,
  Settings as SettingsIcon
} from 'lucide-react';

export function Settings() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none w-80"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative text-gray-400 hover:text-white">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">BZ</span>
              </div>
              <div>
                <p className="text-white font-medium">Bilal Zindani</p>
                <p className="text-gray-400 text-sm">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center">
          <SettingsIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">This section is coming soon...</p>
        </div>
      </div>
    </div>
  );
}