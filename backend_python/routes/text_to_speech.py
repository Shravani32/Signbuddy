from fastapi import APIRouter
from gtts import gTTS
import os

router = APIRouter()

@router.post("/text-to-speech/")
async def text_to_speech(text: str, lang: str = "en"):
    tts = gTTS(text, lang=lang, slow=False)
    tts.save("output.mp3")
    
    return {"audio_file": "output.mp3"}
