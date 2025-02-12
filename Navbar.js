import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-lg font-bold">Peta Karier</h1>
                <div>
                    <Link href="/dashboard" className="mr-4">Dashboard</Link>
                    <Link href="/result">Hasil</Link>
                </div>
            </div>
        </nav>
    );
}
