from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

class StudentData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    tahun_lahir = db.Column(db.Integer, nullable=False)
    tahun_masuk_kuliah = db.Column(db.Integer, nullable=False)
    status_magang = db.Column(db.String(10), nullable=False)
    pekerjaan_orangtua = db.Column(db.String(50), nullable=False)
    posisi_dituju = db.Column(db.String(50), nullable=False)
