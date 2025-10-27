export default function DashboardCard({ title, value }: { title: string; value: string | number }) {
return (
<div className="p-4 bg-slate-800 text-white rounded-2xl shadow-md">
<h3 className="text-sm opacity-75">{title}</h3>
<p className="text-2xl font-semibold">{value}</p>
</div>
);
}
