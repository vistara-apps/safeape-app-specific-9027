import React from 'react';
import { Copy, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface SocialTradeCardProps {
  anonymizedUserId: string;
  tokenSymbol: string;
  entryPrice: number;
  exitPrice: number;
  holdDuration: number;
  pnlPercent: number;
  strategy: 'swing' | 'scalp' | 'hold';
  winRate: number;
  totalTrades: number;
  variant?: 'compact' | 'detailed';
}

export function SocialTradeCard({
  anonymizedUserId,
  tokenSymbol,
  entryPrice,
  exitPrice,
  holdDuration,
  pnlPercent,
  strategy,
  winRate,
  totalTrades,
  variant = 'compact',
}: SocialTradeCardProps) {
  const getStrategyColor = (strat: string) => {
    switch (strat) {
      case 'scalp':
        return 'text-accent';
      case 'swing':
        return 'text-primary';
      case 'hold':
        return 'text-warning';
      default:
        return 'text-textSecondary';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="card hover:shadow-elevated transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-semibold">Trader {anonymizedUserId}</h4>
          <p className="text-sm text-textSecondary">
            {totalTrades} trades • {winRate}% win rate
          </p>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-medium ${getStrategyColor(strategy)} bg-surfaceElevated`}>
          {strategy.toUpperCase()}
        </div>
      </div>

      {/* Trade Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-textSecondary">Token</span>
          <span className="font-semibold">{tokenSymbol}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-textSecondary">Entry → Exit</span>
          <span className="font-mono text-sm">
            ${entryPrice.toFixed(6)} → ${exitPrice.toFixed(6)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-textSecondary">Hold Time</span>
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span className="text-sm">{holdDuration}h</span>
          </div>
        </div>
      </div>

      {/* P&L */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-textSecondary">Profit</span>
        <div className="flex items-center space-x-1">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="font-bold text-primary">+{pnlPercent.toFixed(1)}%</span>
        </div>
      </div>

      {/* Copy Button */}
      <button className="frame-button frame-button-primary w-full flex items-center justify-center space-x-2">
        <Copy className="w-4 h-4" />
        <span>Copy Strategy</span>
      </button>
    </motion.div>
  );
}