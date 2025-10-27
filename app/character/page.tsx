'use client';
import { useRouter } from 'next/navigation';
import { useGameStore } from '../../store/useGameStore';
import { useState } from 'react';


export default function CharacterPage() {
const [name, setName] = useState('');
const [country, setCountry] = useState('');
const router = useRouter();
const startGame = useGameStore((s) => s.startGame);


const handleStart = () => {
if (name && country) {
startGame({ name, country, traits: [], age: 18 });
router.push('/');
}
};


return (
<div className="max-w-lg mx-auto space-y-6">
<h1 className="text-3xl font-bold">Create Your Entrepreneur</h1>
<input
className="w-full p-3 rounded-md bg-slate-800 text-white"
placeholder="Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<input
className="w-full p-3 rounded-md bg-slate-800 text-white"
placeholder="Country"
value={country}
onChange={(e) => setCountry(e.target.value)}
/>
<button onClick={handleStart} className="btn-primary w-full py-3">Start Game</button>
</div>
);
}
