export interface Player {
  name: string;
  country: string;
  traits: string[];
  age: number;
}

export interface Business {
  id: string;
  name: string;
  type: string;
  revenue: number;
  cost: number;
  level: number;
}

export interface Holding {
  id: string;
  assetType: 'crypto' | 'stock' | 'realestate';
  units: number;
  avgPrice: number;
  currentPrice: number;
}

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  impact: number;
}
