import React, { useState } from 'react';
import { BacktestResult } from './BacktestResult';
import { Play, Settings } from 'lucide-react';

export function BacktestLab() {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState(null);

  const runBacktest = async () => {
    setIsRunning(true);
    // Simulate API call
    setTimeout(() => {
      setResults({
        pnl: 2.34,
        winRate: 68,
        maxDrawdown: 0.8,
        totalTrades: 24,
        strategy: 'Aggressive Scalp',
      });
      setIsRunning(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Backtest Lab</h2>
        <p className="text-textSecondary">
          Test your strategy against historical data before risking real money
        </p>
      </div>

      {/* Strategy Configuration */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <Settings className="w-6 h-6 text-accent" />
          <h3 className="text-lg font-semibold">Strategy Settings</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Strategy Type</label>
            <select className="w-full bg-surfaceElevated border border-border rounded-md px-3 py-2">
              <option>Aggressive Scalp</option>
              <option>Conservative Hold</option>
              <option>Momentum Swing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Time Range</label>
            <select className="w-full bg-surfaceElevated border border-border rounded-md px-3 py-2">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Position Size (SOL)</label>
            <input
              type="number"
              defaultValue="0.1"
              step="0.01"
              className="w-full bg-surfaceElevated border border-border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Stop Loss (%)</label>
            <input
              type="number"
              defaultValue="10"
              className="w-full bg-surfaceElevated border border-border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <button
          onClick={runBacktest}
          disabled={isRunning}
          className="frame-button frame-button-primary w-full mt-6 flex items-center justify-center space-x-2"
        >
          <Play className="w-4 h-4" />
          <span>{isRunning ? 'Running Simulation...' : 'Run Backtest'}</span>
        </button>
      </div>

      {/* Results */}
      {results && <BacktestResult {...results} />}
    </div>
  );
}