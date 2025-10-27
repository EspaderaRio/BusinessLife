import { cn } from '@/lib/utils';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
variant?: 'primary' | 'secondary';
}


export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
const styles =
variant === 'primary'
? 'bg-blue-600 hover:bg-blue-700 text-white'
: 'bg-slate-700 hover:bg-slate-600 text-white';


return (
<button
className={cn('px-4 py-2 rounded-xl font-medium transition', styles, className)}
{...props}
>
{children}
</button>
);
}
