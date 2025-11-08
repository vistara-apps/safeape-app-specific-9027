import React from 'react';
import { SentimentPulse } from './SentimentPulse';
import { usePaymentContext } from '../hooks/usePaymentContext';
import toast from 'react-hot-toast';

const mockSentimentData = [
  {
    token: 'BONK',
    symbol: '$BONK',
    score: 87,
    mentions24h: 12400,
    volumeSpike: 340,
    variant: 'bullish' as const,
  },
  {
    token: 'WIF',
    symbol: '$WIF',
    score: 23,
    mentions24h: 3200,
    volumeSpike: -15,
    variant: 'bearish' as const,
  },
  {
    token: 'PEPE',
    symbol: '$PEPE',
    score: 65,
    mentions24h: 8900,
    volumeSpike: 120,
    variant: 'neutral' as const,
  },
  {
    token: 'DOGE',
    symbol: '$DOGE',
    score: 78,
    mentions24h: 15600,
    volumeSpike: 89,
    variant: 'bullish' as const,
  },
];

export function SentimentFeed() {
  const { createSession } = usePaymentContext();

  const handleTrade = async (token: string) => {
    try {
      await createSession();
      toast.success(`Payment processed for ${token} signal!`);
    } catch (error) {
      toast.error('Please connect your wallet to access signals');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Sentiment Heatmap</h2>
        <p className="text-textSecondary">
          Real-time signals from Twitter, Farcaster, and on-chain activity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSentimentData.map((data) => (
          <SentimentPulse
            key={data.token}
            {...data}
            onTrade={() => handleTrade(data.token)}
          />
        ))}
      </div>

      <div className="card text-center">
        <h3 className="text-lg font-semibold mb-2">Premium Signals</h3>
        <p className="text-textSecondary mb-4">
          Get instant alerts for whale movements and insider activity
        </p>
        <button className="frame-button frame-button-primary">
          Upgrade to Premium - $10/month
        </button>
      </div>
    </div>
  );
}