import string
from flask import Flask, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

def save_file(file):
    caca = ''.join(random.choices(string.ascii_uppercase + string.digits, k = 10))
    a = open('./recorders/file' + caca + '.wav', 'wb')
    a.write(file)
    a.close()

@app.route('/prediction', methods=['POST'])
def prediction():
    if request.method == 'POST':
        save_file(request.data)
        return 'Success'

@app.route('/fetch', methods=['GET'])
def fetch():
    if request.method == 'GET':
        print(prediction)
        return '<h1>Prediction page</h1>'
    else:
        return '<h1>Wrong method</h1>'

if __name__ == '__main__':
    app.run()
