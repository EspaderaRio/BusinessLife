interface BusinessLifeState {
player: Player | null;
year: number;
cash: number;
netWorth: number;
businesses: Business[];
holdings: Holding[];
events: Event[];
nextYear: () => void;
startGame: (player: Player) => void;
}
