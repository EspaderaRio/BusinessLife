import { Button } from './ui/Button';


export default function ActionMenu() {
const actions = ["Start Business", "Invest", "Study", "Take Loan", "Lifestyle"];


return (
<div className="grid gap-4">
{actions.map((a) => (
<Button key={a} className="w-full py-3">{a}</Button>
))}
</div>
);
}
