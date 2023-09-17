#imports
from flask import Flask, render_template, jsonify, request, session, redirect
import pymongo
from passlib.hash import pbkdf2_sha256
from functools import wraps
import uuid

#global variable intialization
app = Flask(__name__)
app.secret_key  = b'\x1f\xbc\xbf\x1d)-}\xfa\xb2\xaa\xbb\x86\xdd\x11\x19\xbe'


# Database
client = pymongo.MongoClient('localhost', 27017)
db = client.user_login_system

#User class with signup, login, and signout methods
class User:
  
  #Prints user form info
  def signup(self):
    print(request.form)

    # Create the user object
    user = {
      "_id": uuid.uuid4().hex,
      "name": request.form.get('name'),
      "email": request.form.get('email'),
      "password": request.form.get('password')
    }

    # Encrypt the password
    user['password'] = pbkdf2_sha256.encrypt(user['password'])

    # Check for existing email address
    if db.users.find_one({ "email": user['email'] }):
      return jsonify({ "error": "Email address already in use" }), 400

    #If the user is successfully created, start the session
    if db.users.insert_one(user):
      return self.start_session(user)

    #else return error with status code 400
    return jsonify({ "error": "Signup failed" }), 400


  #Login method required to login

@app.route('/user/signup', methods=['POST'])
def signup():
  return User().signup()

@app.route('/user/signout')
def signout():
  return User().signout()

@app.route('/user/login', methods=['POST'])
def login():
  return User().login()

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/success/')
def success():
    return "<h1>Success</h1>"

@app.route('/register')
def register():
    return render_template('register.html')  # Corrected route and template name

@app.route('/login/')  # Consider using POST for login
def login():
    return render_template('login.html')

@app.route('/dummy/')
def dummy():
    return render_template('dummy.html')

@app.route('/needhelp/')
def needhelp():
    return render_template('needhelp.html')

@app.route('/volunteers/')
def volunteers():
    return render_template('volunteers.html')

@app.route('/about/')
def about():
    return render_template('about.html')

@app.route('/organizations/')
def organizations():
    return render_template('organizations.html')

if __name__ == "__main__":
    app.run(debug=True)
