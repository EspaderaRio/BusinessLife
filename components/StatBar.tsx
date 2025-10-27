interface StatBarProps {
  label: string;
  value: number; // 0–100
  color?: string;
}

export default function StatBar({ label, value, color = 'bg-blue-500' }: StatBarProps) {
  return (
    <div className="mb-2">
      <div className="flex justify-between text-sm text-gray-300 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-300`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
