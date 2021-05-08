from flask import Blueprint, render_template
import requests
import json

# define the blueprint and set the parameters
home_bp = Blueprint('home', __name__, static_folder='static',
                    template_folder='templates', static_url_path='assets')

# make a request to the api to get the list of countries
data = requests.get('https://restcountries.eu/rest/v2/all')


# view to display the list of countries
@home_bp.route('/')
def get_countries():
    countries = json.loads(data.text)
    return render_template('home/index.html', countries=countries)
