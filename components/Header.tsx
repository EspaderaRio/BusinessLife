'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export function Header() {
const pathname = usePathname();
const nav = [
{ href: '/', label: 'Dashboard' },
{ href: '/actions', label: 'Actions' },
{ href: '/business', label: 'Business' },
{ href: '/investments', label: 'Investments' },
{ href: '/events', label: 'Events' },
];


return (
<header className="bg-slate-900 border-b border-slate-800 p-4 flex justify-between items-center">
<h1 className="text-xl font-bold text-white">BusinessLife</h1>
<nav className="flex gap-4">
{nav.map(({ href, label }) => (
<Link
key={href}
href={href}
className={`text-sm hover:text-blue-400 transition ${pathname === href ? 'text-blue-500' : 'text-gray-300'}`}
>
{label}
</Link>
))}
</nav>
</header>
);
}
