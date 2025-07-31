import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LinkedInSender } from './components/LinkedInSender';
import { Analytics } from './components/Analytics';
import { Contacts } from './components/Contacts';
import { Settings } from './components/Settings';
import { Sidebar } from './components/Sidebar';

function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'linkedin-sender':
        return <LinkedInSender />;
      case 'analytics':
        return <Analytics />;
      case 'contacts':
        return <Contacts />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 overflow-auto">
        {renderActiveView()}
      </main>
    </div>
  );
}

export default App;