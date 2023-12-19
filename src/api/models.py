from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'
   

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            'password' : self.password,
        }
    

engine = create_engine(
    "postgresql://gitpod:postgres@localhost:5432/example"
)  # Ejemplo con una base de datos SQLite en memoria
db.Model.metadata.create_all(engine)  # Crea las tablas en la base de datos
Session = sessionmaker(bind=engine)
session = Session()