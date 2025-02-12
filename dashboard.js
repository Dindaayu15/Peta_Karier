import { useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
    const [formData, setFormData] = useState({
        tahun_lahir: "",
        tahun_masuk_kuliah: "",
        status_magang: "Tidak",
        pekerjaan_orangtua: "",
        posisi_dituju: ""
    });

    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        localStorage.setItem("career_recommendation", data.career_recommendation);
        router.push("/result");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Input Data Mahasiswa</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mt-4">
                <input type="number" name="tahun_lahir" placeholder="Tahun Lahir" className="border p-2"
                    onChange={handleChange} required />
                <input type="number" name="tahun_masuk_kuliah" placeholder="Tahun Masuk Kuliah" className="border p-2"
                    onChange={handleChange} required />
                <select name="status_magang" className="border p-2" onChange={handleChange}>
                    <option value="Tidak">Belum Magang</option>
                    <option value="Ya">Sudah Magang</option>
                </select>
                <input type="text" name="pekerjaan_orangtua" placeholder="Pekerjaan Orangtua" className="border p-2"
                    onChange={handleChange} required />
                <input type="text" name="posisi_dituju" placeholder="Posisi Dituju" className="border p-2"
                    onChange={handleChange} required />
                <button type="submit" className="bg-green-500 text-white p-2">Submit</button>
            </form>
        </div>
    );
}
