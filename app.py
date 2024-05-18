from flask import Flask, render_template
import json

app = Flask(__name__, static_folder='dist', template_folder='dist')

# Load the data dictionary from a JSON file
with open('data.json', 'r') as f:
    data_dictionary = json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/reactDataDictionaryKey/<key>')
def react_data(key):
    if key in data_dictionary:
        return render_template('index.html', data=data_dictionary[key])
    else:
        return 'Invalid key', 404

if __name__ == '__main__':
    app.run(debug=True)
