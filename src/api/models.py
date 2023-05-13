from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

        
class User(db.Model):
   
    id = db.Column(db.Integer, unique=True, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    @classmethod
    def signup(cls, email, password, username):
        instance = cls(
            username=username,
            email=email,
            password=password
        )
       

    @classmethod
    def login(cls, email, password):
        user_data = cls.query.filter_by(
            email=email
        ).one_or_none()
        if (not isinstance(user_data, cls)):
            return user_data
        if user_data.password == password:
            return user_data
        else:
            return False
