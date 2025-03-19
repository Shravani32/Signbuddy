from fastapi import APIRouter, UploadFile, File
import cv2
import numpy as np
import tensorflow as tf

router = APIRouter()

# Load Pretrained AI Model for Sign Recognition (Example)
model = tf.keras.models.load_model("models/sign_language_model.h5")

@router.post("/sign-to-text/")
async def sign_to_text(file: UploadFile = File(...)):
    contents = await file.read()
    nparr = np.frombuffer(contents, np.uint8)
    frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Process frame through AI Model
    prediction = model.predict(np.expand_dims(frame, axis=0))
    predicted_text = decode_prediction(prediction)

    return {"recognized_text": predicted_text}

def decode_prediction(prediction):
    classes = ["hello", "thank you", "yes", "no", "help"]  # Sample classes
    return classes[np.argmax(prediction)]
