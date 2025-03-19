from fastapi import FastAPI
from routes import sign_to_text, speech_to_text, text_to_speech, websocket

app = FastAPI(title="Sign Language Communication Backend")

# Include API Routes
app.include_router(sign_to_text.router)
app.include_router(speech_to_text.router)
app.include_router(text_to_speech.router)
app.include_router(websocket.router)

@app.get("/")
def home():
    return {"message": "Real-time Sign Language Communication API is running 🚀"}
