import React from 'react';
import { GuardrailCard } from './GuardrailCard';
import { PositionCard } from './PositionCard';
import { AlertsCard } from './AlertsCard';
import { StatsCard } from './StatsCard';

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="text-center py-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trade with <span className="text-primary">Confidence</span>
        </h2>
        <p className="text-textSecondary text-lg max-w-2xl mx-auto">
          AI guards your wallet while you sleep. Set loss limits, catch rug pulls, and ride sentiment waves.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard
          title="Total Protected"
          value="12.4 SOL"
          change="+2.1%"
          icon="🛡️"
        />
        <StatsCard
          title="Scams Blocked"
          value="7"
          change="This week"
          icon="🚨"
          variant="danger"
        />
        <StatsCard
          title="Win Rate"
          value="73%"
          change="+5% vs last week"
          icon="📈"
          variant="success"
        />
        <StatsCard
          title="Active Signals"
          value="3"
          change="2 bullish, 1 bearish"
          icon="🔥"
          variant="warning"
        />
      </div>

      {/* Main Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GuardrailCard />
        <AlertsCard />
      </div>

      {/* Positions */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Active Positions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PositionCard
            token="BONK"
            symbol="$BONK"
            entryPrice={0.000012}
            currentPrice={0.000015}
            positionSize={2.5}
            pnl={0.625}
            riskScore={25}
          />
          <PositionCard
            token="WIF"
            symbol="$WIF"
            entryPrice={1.85}
            currentPrice={1.72}
            positionSize={1.8}
            pnl={-0.234}
            riskScore={45}
          />
        </div>
      </div>
    </div>
  );
}