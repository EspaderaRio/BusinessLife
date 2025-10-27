export function Card({ title, children }: { title?: string; children: React.ReactNode }) {
return (
<div className="bg-slate-800 rounded-2xl p-4 shadow-md">
{title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
{children}
</div>
);
}
