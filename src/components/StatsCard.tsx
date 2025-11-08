import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
  variant?: 'default' | 'success' | 'danger' | 'warning';
}

export function StatsCard({ title, value, change, icon, variant = 'default' }: StatsCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'border-primary bg-primary/10';
      case 'danger':
        return 'border-danger bg-danger/10';
      case 'warning':
        return 'border-warning bg-warning/10';
      default:
        return 'border-border bg-surface';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`card ${getVariantStyles()}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl">{icon}</span>
        <div className="text-right">
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-textSecondary">{change}</p>
        </div>
      </div>
      <h3 className="text-sm font-medium text-textSecondary">{title}</h3>
    </motion.div>
  );
}