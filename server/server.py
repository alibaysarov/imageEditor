from flask import Flask
from flask_cors import CORS
from controllers import ImageController


app=Flask(__name__)
CORS(app)
@app.get('/')
def index():
  return ImageController.sum()

@app.post('/compress')
def compress():
  return ImageController.compressImage()
@app.post('/rotate/<degs>')
def rotate(degs):
  return ImageController.rotateImage(degs)

app.run(port=5000,debug=True)