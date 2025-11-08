import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

interface SentimentPulseProps {
  token: string;
  symbol: string;
  score: number;
  mentions24h: number;
  volumeSpike: number;
  variant?: 'bullish' | 'bearish' | 'neutral';
  onTrade?: () => void;
}

export function SentimentPulse({
  token,
  symbol,
  score,
  mentions24h,
  volumeSpike,
  variant = 'neutral',
  onTrade,
}: SentimentPulseProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'bullish':
        return {
          bg: 'bg-primary/20',
          border: 'border-primary',
          icon: TrendingUp,
          iconColor: 'text-primary',
          scoreColor: 'text-primary',
          glow: 'shadow-glow',
        };
      case 'bearish':
        return {
          bg: 'bg-danger/20',
          border: 'border-danger',
          icon: TrendingDown,
          iconColor: 'text-danger',
          scoreColor: 'text-danger',
          glow: '',
        };
      default:
        return {
          bg: 'bg-surface',
          border: 'border-border',
          icon: Minus,
          iconColor: 'text-textSecondary',
          scoreColor: 'text-textSecondary',
          glow: '',
        };
    }
  };

  const styles = getVariantStyles();
  const IconComponent = styles.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={`card ${styles.bg} ${styles.border} ${styles.glow} cursor-pointer transition-all duration-200`}
      onClick={onTrade}
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
        <IconComponent className={`w-5 h-5 ${styles.iconColor}`} />
      </div>

      {/* Sentiment Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-textSecondary">Sentiment Score</span>
          <span className={`text-2xl font-bold ${styles.scoreColor}`}>
            {score}/100
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <motion.div
            className={`h-2 rounded-full ${
              score > 75 ? 'bg-primary' : score > 50 ? 'bg-warning' : 'bg-danger'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${score}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-textSecondary">24h Mentions</p>
          <p className="font-semibold">{mentions24h.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs text-textSecondary">Volume Spike</p>
          <p className="font-semibold text-accent">+{volumeSpike}%</p>
        </div>
      </div>

      {/* Action Button */}
      <button className="frame-button frame-button-primary w-full">
        Quick Buy 0.1 SOL
      </button>
    </motion.div>
  );
}