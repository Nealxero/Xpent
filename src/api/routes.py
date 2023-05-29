"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


api = Blueprint('api', __name__)
jwt = JWTManager()
jwt.init_app(api)


@api.route('/users', methods=['POST', 'GET'])
def users():
    if request.method == 'POST':
        try:
            username = request.json.get('username')
            email = request.json.get('email')
            password = request.json.get('password')

            # Validate input fields
            if not username or not email or not password:
                return jsonify(error='Missing required fields.'), 400

            # Check if the user already exists
            if User.query.filter_by(email=email).first():
                return jsonify(error='Email already registered.'), 400

            # Create the user using the signup method
            new_user = User.signup(username=username, email=email, password=password)

            # Return the newly created user information
            return jsonify({
                'id': new_user.id,
                'username': new_user.username,
                'email': new_user.email,
                'url': url_for('api.get_user', user_id=new_user.id, _external=True)
            }), 201

        except Exception as error:
            return jsonify(error='Something went wrong. Please try again.'), 500

    elif request.method == 'GET':
        try:
            users = User.query.all()
            all_users = []
            for user in users:
                all_users.append({
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                    'url': url_for('api.get_user', user_id=user.id, _external=True)
                })
            return jsonify(all_users), 200
        except Exception as error:
            return jsonify(error='Something went wrong. Please try again.'), 500


@api.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.filter_by(id=user_id).one_or_none()
    if user is None:
        return jsonify(error='User not found.'), 404
    try:
        user_info = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'account_password': url_for('api.get_user_account_password', user_id=user.id, _external=True),
            'account_email': url_for('api.get_user_account_email', user_id=user.id, _external=True)
        }
        return jsonify(user_info), 200
    except Exception as error:
        return jsonify(error='Something went wrong. Please try again.'), 500


@api.route('/login', methods=['POST'])
def login():
    try:
        email = request.json.get('email')
        password = request.json.get('password')

        # Validate input fields
        if not email or not password:
            return jsonify(error='Missing required fields.'), 400

        # Authenticate the user using the login method
        user = User.login(email=email, password=password)

        # Check if login is successful
        if user:
            # Create an access token for the user
            access_token = create_access_token(identity=user.id)

            return jsonify(access_token=access_token), 200
        else:
            return jsonify(error='Invalid email or password.'), 401

    except Exception as error: 
        return jsonify(error='Something went wrong. Please try again.'), 500
