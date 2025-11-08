import React, { useState } from 'react';
import { Shield, Settings, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface GuardrailCardProps {
  variant?: 'active' | 'triggered' | 'disabled';
}

export function GuardrailCard({ variant = 'active' }: GuardrailCardProps) {
  const [dailyLimit, setDailyLimit] = useState(0.5);
  const [weeklyLimit, setWeeklyLimit] = useState(2.0);
  const currentDailyLoss = 0.12;
  const currentWeeklyLoss = 0.45;

  const dailyProgress = (currentDailyLoss / dailyLimit) * 100;
  const weeklyProgress = (currentWeeklyLoss / weeklyLimit) * 100;

  const getVariantStyles = () => {
    switch (variant) {
      case 'triggered':
        return {
          border: 'border-danger',
          bg: 'bg-danger/10',
          icon: AlertTriangle,
          iconColor: 'text-danger',
          status: 'TRIGGERED',
          statusColor: 'text-danger',
        };
      case 'disabled':
        return {
          border: 'border-textSecondary',
          bg: 'bg-surface',
          icon: Shield,
          iconColor: 'text-textSecondary',
          status: 'DISABLED',
          statusColor: 'text-textSecondary',
        };
      default:
        return {
          border: 'border-primary',
          bg: 'bg-primary/10',
          icon: Shield,
          iconColor: 'text-primary',
          status: 'ACTIVE',
          statusColor: 'text-primary',
        };
    }
  };

  const styles = getVariantStyles();
  const IconComponent = styles.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`card ${styles.border} ${styles.bg}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <IconComponent className={`w-6 h-6 ${styles.iconColor}`} />
          <div>
            <h3 className="text-lg font-semibold">Loss Guardrails</h3>
            <p className={`text-sm ${styles.statusColor} font-medium`}>
              {styles.status}
            </p>
          </div>
        </div>
        <button className="p-2 hover:bg-surfaceElevated rounded-md transition-colors">
          <Settings className="w-5 h-5 text-textSecondary" />
        </button>
      </div>

      {/* Daily Limit */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm text-textSecondary">Daily Limit</span>
          <span className="text-sm font-mono">
            {currentDailyLoss.toFixed(3)} / {dailyLimit.toFixed(1)} SOL
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <motion.div
            className={`h-2 rounded-full ${
              dailyProgress > 80 ? 'bg-danger' : dailyProgress > 60 ? 'bg-warning' : 'bg-primary'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${dailyProgress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Weekly Limit */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm text-textSecondary">Weekly Limit</span>
          <span className="text-sm font-mono">
            {currentWeeklyLoss.toFixed(3)} / {weeklyLimit.toFixed(1)} SOL
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <motion.div
            className={`h-2 rounded-full ${
              weeklyProgress > 80 ? 'bg-danger' : weeklyProgress > 60 ? 'bg-warning' : 'bg-primary'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${weeklyProgress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button className="frame-button frame-button-primary flex-1">
          Adjust Limits
        </button>
        {variant === 'triggered' && (
          <button className="frame-button frame-button-secondary">
            Override
          </button>
        )}
      </div>
    </motion.div>
  );
}