import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Result() {
    const [recommendation, setRecommendation] = useState("");
    const router = useRouter();

    useEffect(() => {
        const career = localStorage.getItem("career_recommendation");
        if (!career) router.push("/dashboard");
        else setRecommendation(career);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Rekomendasi Karier Anda</h1>
            <p className="text-xl mt-4">{recommendation}</p>
            <button onClick={() => router.push("/dashboard")} className="bg-blue-500 text-white p-2 mt-4">
                Coba Lagi
            </button>
        </div>
    );
}
