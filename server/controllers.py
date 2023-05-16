from flask import request
from PIL import Image
import os 
absolute_path = os.path.dirname(__file__)
relative_path = "images"
full_path = os.path.join(absolute_path, relative_path)

def clearFolder():
    dir=full_path
    for f in os.listdir(dir):
        os.remove(os.path.join(dir, f))


class ImageController:
    @staticmethod
    def sum():
        return 'Hello'
    @staticmethod
    def compressImage():
        clearFolder()
        file= request.files['file']
        file.save(f'{full_path}/{file.filename}')
        imageToCompress=Image.open(f'{full_path}/{file.filename}')
        size= tuple(int(d/2) for d in imageToCompress.size)
        ext=file.filename.split('.')[1]
        imageToCompress.resize(size,Image.ANTIALIAS)
        imageToCompress.save(f'{full_path}/compressed.{ext}')
        return file.filename
    


    @staticmethod 
    def rotateImage(degs=90):
        clearFolder()
        file= request.files['file']
        ext=file.filename.split('.')[1]
        file.save(f'{full_path}/{file.filename}')
        imageToRotate=Image.open(f'{full_path}/{file.filename}')
        imageToRotate=imageToRotate.rotate(int(degs),expand=True)
        imageToRotate.save(f'{full_path}/rotated.{ext}')
        return file.filename