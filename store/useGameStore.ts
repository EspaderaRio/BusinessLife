import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Player, Business, Holding, GameEvent } from './types';

interface GameState {
  player: Player | null;
  year: number;
  cash: number;
  netWorth: number;
  businesses: Business[];
  holdings: Holding[];
  events: GameEvent[];

  // Actions
  startGame: (player: Player) => void;
  nextYear: () => void;
  addBusiness: (b: Business) => void;
  addHolding: (h: Holding) => void;
  addEvent: (e: GameEvent) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      player: null,
      year: 2025,
      cash: 5000,
      netWorth: 5000,
      businesses: [],
      holdings: [],
      events: [],

      // 🏁 Start a new game
      startGame: (player) =>
        set({
          player,
          year: 2025,
          cash: 5000,
          netWorth: 5000,
          businesses: [],
          holdings: [],
          events: [],
        }),

      // ⏭️ Progress to the next year
      nextYear: () => {
        const state = get();
        const newYear = state.year + 1;

        // Example random business growth & investment fluctuation
        const updatedBusinesses = state.businesses.map((b) => ({
          ...b,
          revenue: Math.round(b.revenue * (1 + Math.random() * 0.2 - 0.05)),
          cost: Math.round(b.cost * (1 + Math.random() * 0.1)),
        }));

        const updatedHoldings = state.holdings.map((h) => ({
          ...h,
          currentPrice: Math.round(h.currentPrice * (1 + Math.random() * 0.3 - 0.15)),
        }));

        // Compute new cash & net worth
        const totalRevenue = updatedBusinesses.reduce((sum, b) => sum + b.revenue - b.cost, 0);
        const portfolioValue = updatedHoldings.reduce(
          (sum, h) => sum + h.units * h.currentPrice,
          0
        );
        const newCash = state.cash + totalRevenue;
        const newNetWorth = newCash + portfolioValue;

        // Random yearly event
        const yearlyImpact = Math.floor(Math.random() * 21) - 10;
        const event: GameEvent = {
          id: crypto.randomUUID(),
          title: yearlyImpact > 0 ? 'Good Year!' : 'Tough Year!',
          description:
            yearlyImpact > 0
              ? 'Your ventures performed above expectations.'
              : 'Market turbulence affected your profits.',
          impact: yearlyImpact,
        };

        set({
          year: newYear,
          cash: newCash,
          netWorth: newNetWorth,
          businesses: updatedBusinesses,
          holdings: updatedHoldings,
          events: [event, ...state.events],
          player: state.player ? { ...state.player, age: state.player.age + 1 } : state.player,
        });
      },

      // 🏢 Add a new business
      addBusiness: (b) =>
        set((state) => ({
          businesses: [...state.businesses, b],
          events: [
            { id: crypto.randomUUID(), title: 'New Business', description: `Started ${b.name}.`, impact: +10 },
            ...state.events,
          ],
        })),

      // 💰 Add a new investment
      addHolding: (h) =>
        set((state) => ({
          holdings: [...state.holdings, h],
          events: [
            { id: crypto.randomUUID(), title: 'New Investment', description: `Invested in ${h.assetType}.`, impact: +5 },
            ...state.events,
          ],
        })),

      // 🗞️ Add an event manually
      addEvent: (e) => set((state) => ({ events: [e, ...state.events] })),
    }),
    {
      name: 'businesslife-store',
    }
  )
);
