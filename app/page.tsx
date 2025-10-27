'use client';
import { useGameStore } from '@/store/useGameStore';
import StatBar from '@/components/StatBar';
import BusinessList from '@/components/BusinessList';
import InvestmentChart from '@/components/InvestmentChart';
import EventLog from '@/components/EventLog';
import DashboardCard from '@/components/DashboardCard';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  const { player, businesses, holdings, events, nextYear } = useGameStore();

  if (!player) {
    return (
      <main className="p-6 text-center text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome to BusinessLife</h1>
        <p className="text-gray-400 mb-4">Start a new career and build your empire.</p>
        <Button onClick={() => nextYear()}>Start Game</Button>
      </main>
    );
  }

  const totalRevenue = businesses.reduce((sum, b) => sum + b.revenue, 0);
  const portfolioValue = holdings.reduce(
    (sum, h) => sum + h.units * h.currentPrice,
    0
  );

  return (
    <main className="p-6 grid gap-6 text-white">
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <DashboardCard title="Age" value={player.age} />
        <DashboardCard title="Businesses" value={businesses.length} />
        <DashboardCard title="Portfolio Value" value={`$${portfolioValue.toLocaleString()}`} />
        <DashboardCard title="Total Revenue" value={`$${totalRevenue.toLocaleString()}`} />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Player Stats</h2>
        <StatBar label="Reputation" value={75} color="bg-green-500" />
        <StatBar label="Knowledge" value={60} color="bg-yellow-500" />
        <StatBar label="Energy" value={85} color="bg-blue-500" />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Businesses</h2>
        <BusinessList businesses={businesses} />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Investments</h2>
        <InvestmentChart />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Event Log</h2>
        <EventLog events={events} />
      </section>

      <div className="flex justify-center mt-4">
        <Button onClick={nextYear} className="px-8 py-3 text-lg">Next Year</Button>
      </div>
    </main>
  );
}
