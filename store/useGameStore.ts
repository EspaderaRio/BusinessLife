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


// actions
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


startGame: (player) => set({ player, year: 2025, cash: 5000, netWorth: 5000 }),


nextYear: () => {
const state = get();
);
