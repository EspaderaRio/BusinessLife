import { Business, Holding, GameEvent, Player } from './types';

export const samplePlayer: Player = {
  name: 'Alex Rivera',
  country: 'Philippines',
  traits: ['Ambitious', 'Strategic'],
  age: 21,
};

export const sampleBusinesses: Business[] = [
  { id: '1', name: 'Cafe Startup', type: 'Food & Beverage', revenue: 15000, cost: 8000, level: 1 },
  { id: '2', name: 'Online Store', type: 'E-commerce', revenue: 20000, cost: 12000, level: 2 },
];

export const sampleHoldings: Holding[] = [
  { id: '1', assetType: 'crypto', units: 2, avgPrice: 20000, currentPrice: 30000 },
  { id: '2', assetType: 'stock', units: 50, avgPrice: 150, currentPrice: 180 },
];

export const sampleEvents: GameEvent[] = [
  { id: '1', title: 'Business Expansion', description: 'Your cafe opened a new branch.', impact: +15 },
  { id: '2', title: 'Market Crash', description: 'Crypto market dropped significantly.', impact: -20 },
];
