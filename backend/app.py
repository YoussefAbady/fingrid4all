from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask import request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///customers.db'
db = SQLAlchemy(app)
CORS(app)

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    customer = Customer.query.filter_by(username=data['username']).first()
    if customer and customer.password == data['password']:
        return jsonify({"message": "Login successful", "customer": {"username": customer.username, "email": customer.email}}),200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/profile', methods=['GET', 'POST'])
def profile():
    if request.method == 'POST':
        data = request.json
        customer = Customer.query.filter_by(username=data['username']).first()
        if customer:
            customer.email = data['email']
            db.session.commit()
            return jsonify({"message": "Profile updated"})
        return jsonify({"message": "Customer not found"}), 404
    else:
        username = request.args.get('username')
        customer = Customer.query.filter_by(username=username).first()
        if customer:
            return jsonify({"username": customer.username, "email": customer.email})
        return jsonify({"message": "Customer not found"}), 404

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)