import React, { useState } from 'react';
import { 
  Send, 
  Mail,
  Linkedin,
  Search,
  Bell,
  User
} from 'lucide-react';

export function LinkedInSender() {
  const [profileUrl, setProfileUrl] = useState('https://linkedin.com/in/username');
  const [responseText, setResponseText] = useState('Response will appear here...');

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

      <div className="p-8 space-y-8">
        {/* LinkedIn Profile URL Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-500/20 rounded-lg">
              <Linkedin className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">LinkedIn Profile URL</h2>
          </div>
          
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <input
              type="url"
              value={profileUrl}
              onChange={(e) => setProfileUrl(e.target.value)}
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
              placeholder="https://linkedin.com/in/username"
            />
          </div>
        </div>

        {/* Send Email Button */}
        <div className="flex justify-center">
          <button className="flex items-center space-x-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg">
            <Send className="w-5 h-5" />
            <span>Send Email</span>
          </button>
        </div>

        {/* Response Details Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-600/50 rounded-lg">
              <Mail className="w-6 h-6 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Response Details</h2>
          </div>
          
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="bg-gray-700 rounded-lg p-4 min-h-[200px]">
              <p className="text-gray-400 font-mono text-sm">{responseText}</p>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">System Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}