from flask import Flask
from datetime import datetime
import time

app = Flask(__name__)

@app.route('/api/time')
def get_time():
    return {'time': time.time()}