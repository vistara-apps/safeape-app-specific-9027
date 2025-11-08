import React from 'react';
import { SocialTradeCard } from './SocialTradeCard';
import { Users, Trophy, TrendingUp } from 'lucide-react';

const mockTrades = [
  {
    id: '1',
    anonymizedUserId: '#4729',
    tokenSymbol: 'BONK',
    entryPrice: 0.000012,
    exitPrice: 0.000027,
    holdDuration: 4.2,
    pnlPercent: 125,
    strategy: 'scalp' as const,
    winRate: 71,
    totalTrades: 14,
  },
  {
    id: '2',
    anonymizedUserId: '#8392',
    tokenSymbol: 'WIF',
    entryPrice: 1.85,
    exitPrice: 2.34,
    holdDuration: 12.5,
    pnlPercent: 26.5,
    strategy: 'swing' as const,
    winRate: 68,
    totalTrades: 8,
  },
  {
    id: '3',
    anonymizedUserId: '#1205',
    tokenSymbol: 'PEPE',
    entryPrice: 0.00000089,
    exitPrice: 0.00000156,
    holdDuration: 2.1,
    pnlPercent: 75.3,
    strategy: 'scalp' as const,
    winRate: 82,
    totalTrades: 23,
  },
];

export function SocialFeed() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Social Trading Feed</h2>
        <p className="text-textSecondary">
          Learn from top performers and copy proven strategies
        </p>
      </div>

      {/* Leaderboard Header */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-4">
          <Trophy className="w-6 h-6 text-accent" />
          <h3 className="text-lg font-semibold">Top Performers This Week</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-surfaceElevated rounded-md">
            <div className="text-2xl mb-2">🥇</div>
            <p className="font-semibold">Trader #4729</p>
            <p className="text-primary text-xl font-bold">+127%</p>
            <p className="text-xs text-textSecondary">14 trades, 71% win rate</p>
          </div>
          <div className="text-center p-4 bg-surfaceElevated rounded-md">
            <div className="text-2xl mb-2">🥈</div>
            <p className="font-semibold">Trader #8392</p>
            <p className="text-primary text-xl font-bold">+89%</p>
            <p className="text-xs text-textSecondary">8 trades, 68% win rate</p>
          </div>
          <div className="text-center p-4 bg-surfaceElevated rounded-md">
            <div className="text-2xl mb-2">🥉</div>
            <p className="font-semibold">Trader #1205</p>
            <p className="text-primary text-xl font-bold">+76%</p>
            <p className="text-xs text-textSecondary">23 trades, 82% win rate</p>
          </div>
        </div>
      </div>

      {/* Recent Trades */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6 text-accent" />
          <h3 className="text-lg font-semibold">Recent Winning Trades</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockTrades.map((trade) => (
            <SocialTradeCard key={trade.id} {...trade} />
          ))}
        </div>
      </div>

      {/* Community Stats */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-4">
          <TrendingUp className="w-6 h-6 text-primary" />
          <h3 className="text-lg font-semibold">Community Impact</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">1,247</p>
            <p className="text-sm text-textSecondary">Active Traders</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">89.4 SOL</p>
            <p className="text-sm text-textSecondary">Protected This Week</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-danger">23</p>
            <p className="text-sm text-textSecondary">Rug Pulls Blocked</p>
          </div>
        </div>
      </div>
    </div>
  );
}