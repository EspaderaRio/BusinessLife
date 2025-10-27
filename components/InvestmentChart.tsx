'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: 1, value: 1000 },
  { year: 2, value: 1200 },
  { year: 3, value: 950 },
  { year: 4, value: 1600 },
];

export default function InvestmentChart() {
  return (
    <div className="bg-slate-800 p-4 rounded-2xl shadow-md">
      <h3 className="text-white font-semibold mb-2">Investment Portfolio Value</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="year" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
