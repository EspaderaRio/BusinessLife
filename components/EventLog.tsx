import { GameEvent } from '@/store/types';
import { Card } from './ui/Card';

export default function EventLog({ events }: { events: GameEvent[] }) {
  if (!events.length)
    return <p className="text-gray-400 text-sm">No events yet. Play to generate history!</p>;

  return (
    <div className="space-y-2">
      {events.map((e) => (
        <Card key={e.id}>
          <h4 className="text-white font-semibold">{e.title}</h4>
          <p className="text-sm text-gray-400">{e.description}</p>
          <p
            className={`text-xs mt-1 ${
              e.impact >= 0 ? 'text-green-400' : 'text-red-400'
            }`}
          >
            Impact: {e.impact > 0 ? '+' : ''}
            {e.impact}
          </p>
        </Card>
      ))}
    </div>
  );
}
