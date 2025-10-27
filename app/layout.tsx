import "../styles/globals.css";
import { Header } from "../components/Header";


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="bg-slate-950 text-white font-inter min-h-screen">
<Header />
<main className="p-6 max-w-5xl mx-auto">{children}</main>
</body>
</html>
);
}
