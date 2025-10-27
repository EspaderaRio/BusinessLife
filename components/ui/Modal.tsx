'use client';
import { motion } from 'framer-motion';


export function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
if (!isOpen) return null;
return (
<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="bg-slate-900 p-6 rounded-2xl max-w-md w-full"
>
{children}
<button onClick={onClose} className="mt-4 w-full py-2 rounded-md bg-red-600 text-white">Close</button>
</motion.div>
</div>
);
}
