from flask import Flask
from home.home import home_bp

# create the flask app
app = Flask(__name__)

# register flask blueprint
app.register_blueprint(home_bp, url_prefix='/')


if __name__ == '__main__':
    app.run(debug=True)
