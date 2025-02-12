import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        const res = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            router.push('/dashboard');
        } else {
            alert('Login gagal');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Login</h1>
            <input type="text" placeholder="Username" className="border p-2" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" className="border p-2 mt-2" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} className="bg-blue-500 text-white p-2 mt-2">Login</button>
        </div>
    );
}
