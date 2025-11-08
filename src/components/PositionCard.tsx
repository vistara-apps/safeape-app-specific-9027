import React from 'react';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface PositionCardProps {
  token: string;
  symbol: string;
  entryPrice: number;
  currentPrice: number;
  positionSize: number;
  pnl: number;
  riskScore: number;
}

export function PositionCard({
  token,
  symbol,
  entryPrice,
  currentPrice,
  positionSize,
  pnl,
  riskScore,
}: PositionCardProps) {
  const isProfit = pnl > 0;
  const pnlPercentage = ((currentPrice - entryPrice) / entryPrice) * 100;

  const getRiskColor = (score: number) => {
    if (score < 30) return 'text-primary';
    if (score < 70) return 'text-warning';
    return 'text-danger';
  };

  const getRiskLabel = (score: number) => {
    if (score < 30) return 'Low Risk';
    if (score < 70) return 'Medium Risk';
    return 'High Risk';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card hover:shadow-elevated transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-surfaceElevated rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">{token.slice(0, 2)}</span>
          </div>
          <div>
            <h4 className="font-semibold">{token}</h4>
            <p className="text-sm text-textSecondary">{symbol}</p>
          </div>
        </div>
        <div className={`flex items-center space-x-1 ${getRiskColor(riskScore)}`}>
          <AlertCircle className="w-4 h-4" />
          <span className="text-xs font-medium">{getRiskLabel(riskScore)}</span>
        </div>
      </div>

      {/* Price Info */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-textSecondary">Entry Price</p>
          <p className="font-mono text-sm">${entryPrice.toFixed(6)}</p>
        </div>
        <div>
          <p className="text-xs text-textSecondary">Current Price</p>
          <p className="font-mono text-sm">${currentPrice.toFixed(6)}</p>
        </div>
      </div>

      {/* Position Size */}
      <div className="mb-4">
        <p className="text-xs text-textSecondary">Position Size</p>
        <p className="font-semibold">{positionSize.toFixed(2)} SOL</p>
      </div>

      {/* PnL */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          {isProfit ? (
            <TrendingUp className="w-4 h-4 text-primary" />
          ) : (
            <TrendingDown className="w-4 h-4 text-danger" />
          )}
          <span className={`font-semibold ${isProfit ? 'text-primary' : 'text-danger'}`}>
            {isProfit ? '+' : ''}{pnl.toFixed(3)} SOL
          </span>
        </div>
        <span className={`text-sm ${isProfit ? 'text-primary' : 'text-danger'}`}>
          {isProfit ? '+' : ''}{pnlPercentage.toFixed(2)}%
        </span>
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <button className="frame-button frame-button-secondary flex-1">
          Close 50%
        </button>
        <button className="frame-button frame-button-danger flex-1">
          Close All
        </button>
      </div>
    </motion.div>
  );
}