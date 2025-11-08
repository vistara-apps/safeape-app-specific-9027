import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Shield, TrendingUp } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-surface border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-xl">🦍</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-textPrimary">SafeApe</h1>
              <p className="text-xs text-textSecondary">AI-Powered Trading</p>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-surfaceElevated rounded-md">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-textSecondary">Protected</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-surfaceElevated rounded-md">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-sm font-mono">2.34 SOL</span>
            </div>
          </div>

          {/* Wallet Connection */}
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}