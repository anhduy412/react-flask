from flask import Flask
import time

app = Flask(__name__)

@app.route('/')
def get_time():
    return {'time': time.time()}