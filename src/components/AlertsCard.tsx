import React from 'react';
import { Bell, TrendingUp, Shield, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface Alert {
  id: string;
  type: 'sentiment' | 'risk' | 'limit';
  title: string;
  message: string;
  timestamp: string;
  severity: 'info' | 'warning' | 'danger';
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'sentiment',
    title: 'BONK Trending',
    message: 'Sentiment score hit 87/100. +340% mentions in 1hr',
    timestamp: '2 min ago',
    severity: 'info',
  },
  {
    id: '2',
    type: 'risk',
    title: 'Rug Pull Detected',
    message: 'SCAM token flagged as honeypot. DO NOT BUY.',
    timestamp: '15 min ago',
    severity: 'danger',
  },
  {
    id: '3',
    type: 'limit',
    title: 'Loss Limit Warning',
    message: '90% of daily limit reached. 0.05 SOL remaining.',
    timestamp: '1 hour ago',
    severity: 'warning',
  },
];

export function AlertsCard() {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'sentiment':
        return TrendingUp;
      case 'risk':
        return AlertTriangle;
      case 'limit':
        return Shield;
      default:
        return Bell;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'danger':
        return 'text-danger';
      case 'warning':
        return 'text-warning';
      default:
        return 'text-primary';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Bell className="w-6 h-6 text-accent" />
          <h3 className="text-lg font-semibold">Recent Alerts</h3>
        </div>
        <button className="text-sm text-textSecondary hover:text-textPrimary">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {mockAlerts.map((alert, index) => {
          const IconComponent = getAlertIcon(alert.type);
          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-3 p-3 bg-surfaceElevated rounded-md hover:bg-border/50 transition-colors cursor-pointer"
            >
              <IconComponent className={`w-5 h-5 mt-0.5 ${getSeverityColor(alert.severity)}`} />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm">{alert.title}</h4>
                <p className="text-xs text-textSecondary mt-1 line-clamp-2">
                  {alert.message}
                </p>
                <p className="text-xs text-textSecondary mt-2">{alert.timestamp}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <button className="frame-button frame-button-secondary w-full mt-4">
        Configure Alerts
      </button>
    </div>
  );
}