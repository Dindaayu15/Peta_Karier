from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from auth import auth_blueprint
from model import predict_career
from database import db, StudentData

app = Flask(__name__)
CORS(app)  # Izinkan akses dari frontend

# Konfigurasi Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///career.db'
app.config['JWT_SECRET_KEY'] = 'secret'  # Ubah sesuai kebutuhan

db.init_app(app)
jwt = JWTManager(app)

# Register blueprint autentikasi
app.register_blueprint(auth_blueprint, url_prefix='/auth')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    prediction = predict_career(data)
    return jsonify({'career_recommendation': prediction})

if __name__ == '__main__':
    app.run(debug=True)
