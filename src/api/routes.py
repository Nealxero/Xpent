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


@api.route('/users', methods=['GET'])
def show_users():
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
