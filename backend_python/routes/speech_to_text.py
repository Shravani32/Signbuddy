from fastapi import APIRouter, UploadFile, File
import speech_recognition as sr

router = APIRouter()

@router.post("/speech-to-text/")
async def speech_to_text(audio: UploadFile = File(...)):
    recognizer = sr.Recognizer()
    audio_data = await audio.read()
    
    with open("temp_audio.wav", "wb") as f:
        f.write(audio_data)
    
    with sr.AudioFile("temp_audio.wav") as source:
        audio = recognizer.record(source)
    
    try:
        text = recognizer.recognize_google(audio, language="en-IN")
        return {"recognized_text": text}
    except sr.UnknownValueError:
        return {"error": "Could not understand the audio"}
