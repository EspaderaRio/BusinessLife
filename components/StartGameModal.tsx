'use client';
import { useState } from 'react';
import { useGameStore } from '../store/useGameStore';
import { Player } from '../store/types';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';

export default function StartGameModal() {
  const { startGame, player } = useGameStore();
  const [isOpen, setIsOpen] = useState(!player);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('Philippines');
  const [traits, setTraits] = useState<string[]>([]);

  const allTraits = ['Ambitious', 'Strategic', 'Creative', 'Frugal', 'Risk-Taker'];

  const toggleTrait = (trait: string) => {
    setTraits((prev) =>
      prev.includes(trait) ? prev.filter((t) => t !== trait) : [...prev, trait]
    );
  };

  const handleStart = () => {
    if (!name.trim()) return alert('Please enter your name.');
    const newPlayer: Player = { name, country, traits, age: 21 };
    startGame(newPlayer);
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => {}}>
      <h2 className="text-xl font-bold mb-3 text-white">Start Your Journey</h2>
      <div className="space-y-3 text-white">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-white"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Country</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-white"
          >
            <option>Philippines</option>
            <option>United States</option>
            <option>Japan</option>
            <option>Germany</option>
            <option>United Kingdom</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Traits</label>
          <div className="flex flex-wrap gap-2">
            {allTraits.map((trait) => (
              <button
                key={trait}
                onClick={() => toggleTrait(trait)}
                className={`px-3 py-1 rounded-full border text-sm transition ${
                  traits.includes(trait)
                    ? 'bg-blue-600 border-blue-400 text-white'
                    : 'bg-slate-700 border-slate-600 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {trait}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Button onClick={handleStart} className="w-full py-2">
          Start Game
        </Button>
      </div>
    </Modal>
  );
}
