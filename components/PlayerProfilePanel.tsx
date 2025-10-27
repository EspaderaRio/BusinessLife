'use client';
import { useGameStore } from '../store/useGameStore';
import { Card } from '../components/ui/Card';

export default function PlayerProfilePanel() {
  const { player } = useGameStore();

  if (!player) return null;

  return (
    <Card className="p-4 bg-gray-800 text-white rounded-2xl shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{player.name}</h2>
          <p className="text-gray-400 text-sm">{player.country}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">Age</p>
          <p className="text-lg font-semibold">{player.age}</p>
        </div>
      </div>

      {player.traits && player.traits.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {player.traits.map((trait, idx) => (
            <span
              key={idx}
              className="bg-blue-600 text-xs px-3 py-1 rounded-full font-medium"
            >
              {trait}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
}
