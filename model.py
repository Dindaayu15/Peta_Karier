import pickle
import numpy as np

# Load model yang sudah dilatih
model = pickle.load(open("career_model.pkl", "rb"))

def predict_career(data):
    input_data = np.array([
        data["tahun_lahir"],
        data["tahun_masuk_kuliah"],
        1 if data["status_magang"] == "Ya" else 0,
        hash(data["pekerjaan_orangtua"]) % 10,  # Konversi string ke angka
        hash(data["posisi_dituju"]) % 10
    ]).reshape(1, -1)
    
    prediction = model.predict(input_data)
    return prediction[0]
