import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Settings, 
  BarChart3,
  Linkedin,
  Send
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'linkedin-sender', label: 'LinkedIn Sender', icon: Send, badge: 'Active' },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'contacts', label: 'Contacts', icon: Users, badge: '12' },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-gray-800 shadow-lg border-r border-gray-700">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Linkedin className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">LinkedIn</h1>
            <p className="text-sm text-indigo-400">Sender</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center justify-between px-6 py-3 text-left transition-colors duration-200 ${
                activeView === item.id
                  ? 'bg-indigo-600 text-white border-r-2 border-indigo-400'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className={`px-2 py-1 text-xs rounded-full ${
                  item.badge === 'Active' 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-gray-600 text-gray-200'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}