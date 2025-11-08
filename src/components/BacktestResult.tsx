import React from 'react';
import { TrendingUp, TrendingDown, BarChart3, Target } from 'lucide-react';
import { motion } from 'framer-motion';

interface BacktestResultProps {
  pnl: number;
  winRate: number;
  maxDrawdown: number;
  totalTrades: number;
  strategy: string;
  variant?: 'profitable' | 'loss';
}

export function BacktestResult({
  pnl,
  winRate,
  maxDrawdown,
  totalTrades,
  strategy,
  variant = 'profitable',
}: BacktestResultProps) {
  const isProfit = pnl > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`card ${isProfit ? 'border-primary bg-primary/10' : 'border-danger bg-danger/10'}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <BarChart3 className={`w-6 h-6 ${isProfit ? 'text-primary' : 'text-danger'}`} />
          <div>
            <h3 className="text-lg font-semibold">Backtest Results</h3>
            <p className="text-sm text-textSecondary">{strategy} Strategy</p>
          </div>
        </div>
        {isProfit ? (
          <TrendingUp className="w-6 h-6 text-primary" />
        ) : (
          <TrendingDown className="w-6 h-6 text-danger" />
        )}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <p className="text-xs text-textSecondary mb-1">Total P&L</p>
          <p className={`text-xl font-bold ${isProfit ? 'text-primary' : 'text-danger'}`}>
            {isProfit ? '+' : ''}{pnl.toFixed(2)} SOL
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-textSecondary mb-1">Win Rate</p>
          <p className="text-xl font-bold">{winRate}%</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-textSecondary mb-1">Max Drawdown</p>
          <p className="text-xl font-bold text-danger">-{maxDrawdown.toFixed(2)} SOL</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-textSecondary mb-1">Total Trades</p>
          <p className="text-xl font-bold">{totalTrades}</p>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="bg-surfaceElevated rounded-md p-4 mb-6">
        <div className="flex items-center justify-center h-32 text-textSecondary">
          <div className="text-center">
            <BarChart3 className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">Performance chart would appear here</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-3">
        <button className="frame-button frame-button-primary flex-1 flex items-center justify-center space-x-2">
          <Target className="w-4 h-4" />
          <span>Deploy Live Strategy</span>
        </button>
        <button className="frame-button frame-button-secondary">
          Export Results
        </button>
      </div>
    </motion.div>
  );
}