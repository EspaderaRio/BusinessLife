
import React from 'react';
import clsx from 'clsx'; // optional but recommended

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string; // ✅ allow extra styling
}

export function Card({ title, children, className }: CardProps) {
  return (
    <div className={clsx("bg-slate-800 rounded-2xl p-4 shadow-md", className)}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
}
