import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { SentimentFeed } from './components/SentimentFeed';
import { BacktestLab } from './components/BacktestLab';
import { SocialFeed } from './components/SocialFeed';
import { GuardrailSettings } from './components/GuardrailSettings';

type Tab = 'dashboard' | 'sentiment' | 'backtest' | 'social' | 'settings';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'sentiment':
        return <SentimentFeed />;
      case 'backtest':
        return <BacktestLab />;
      case 'social':
        return <SocialFeed />;
      case 'settings':
        return <GuardrailSettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-bg text-textPrimary">
      <Header />
      
      {/* Navigation */}
      <nav className="border-b border-border bg-surface/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: '📊' },
              { id: 'sentiment', label: 'Sentiment', icon: '🔥' },
              { id: 'backtest', label: 'Backtest', icon: '🧪' },
              { id: 'social', label: 'Social', icon: '👥' },
              { id: 'settings', label: 'Settings', icon: '⚙️' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-glow'
                    : 'text-textSecondary hover:text-textPrimary hover:bg-surfaceElevated'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {renderContent()}
      </main>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'hsl(240, 5%, 14%)',
            color: 'hsl(0, 0%, 98%)',
            border: '1px solid hsl(240, 4%, 16%)',
          },
        }}
      />
    </div>
  );
}

export default App;