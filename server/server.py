from flask import Flask
from flask_cors import CORS
from controllers import ImageController


app=Flask(__name__)
CORS(app)
@app.get('/api')
def index():
  return ImageController.sum()

@app.post('/api/compress')
def compress():
  return ImageController.compressImage()
@app.post('/api/rotate/<degs>')
def rotate(degs):
  return ImageController.rotateImage(degs)
@app.post('/api/crop')
def crop():
  return ImageController.cropImage()

app.run(port=5000,debug=True)