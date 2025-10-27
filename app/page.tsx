'use client';
import { useGameStore } from '@/store/useGameStore';
import DashboardCard from '@/components/DashboardCard';
import Link from 'next/link';


export default function Dashboard() {
const { player, cash, netWorth, year } = useGameStore();


return (
<div className="grid gap-6">
<h1 className="text-3xl font-bold">BusinessLife Dashboard</h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<DashboardCard title="Year" value={year} />
<DashboardCard title="Cash" value={`$${cash.toLocaleString()}`} />
<DashboardCard title="Net Worth" value={`$${netWorth.toLocaleString()}`} />
<DashboardCard title="Player" value={player?.name || '—'} />
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
<Link href="/actions" className="btn-primary">Actions</Link>
<Link href="/business" className="btn-primary">Businesses</Link>
<Link href="/investments" className="btn-primary">Investments</Link>
<Link href="/events" className="btn-primary">Events</Link>
</div>
</div>
);
}
