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
    def signup(cls, username, email, password):
        # Generate a password hash for storing securely in the database
        password_hash = generate_password_hash(password)

        # Create a new user object
        user = cls(username=username, email=email, password=password_hash)

        # Save the new user to the database
        db.session.add(user)
        db.session.commit()

        return user

    @classmethod
    def login(cls, email, password):
        # Retrieve the user based on the provided email
        user = cls.query.filter_by(email=email).first()

        # Check if the user exists and the password is correct
        if user and check_password_hash(user.password, password):
            return user  # Return the authenticated user

        return None  # Return None if login is unsuccessful

    
