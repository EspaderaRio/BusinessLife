import { Business } from '../store/types';
import { Card } from './ui/Card';

export default function BusinessList({ businesses }: { businesses: Business[] }) {
  if (!businesses.length)
    return <p className="text-gray-400 text-sm">You don’t own any businesses yet.</p>;

  return (
    <div className="grid gap-3">
      {businesses.map((b) => (
        <Card key={b.id}>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold">{b.name}</h4>
              <p className="text-sm opacity-70">{b.type}</p>
            </div>
            <div className="text-right">
              <p className="text-green-400 text-sm">Revenue: ${b.revenue.toLocaleString()}</p>
              <p className="text-red-400 text-sm">Cost: ${b.cost.toLocaleString()}</p>
              <p className="text-sm">Lvl {b.level}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
