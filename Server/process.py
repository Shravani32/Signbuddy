import sys
import time
import google.generativeai as genai
from gtts import gTTS
import os
import speech_recognition as sr

# Set up API key
genai.configure(api_key="AIzaSyDlXrudnYp2reey6iuRHYEwthJuuBiDqSg")
model = genai.GenerativeModel("gemini-1.5-pro")

def correct_sign_language(sentence):
    prompt = (
        "You are a language correction assistant specialized in translating Sign Language sequences into grammatically correct English sentences.\n"
        f"Sign Language: {sentence}\n"
        "English Sentence:"
    )
    response = model.generate_content(prompt)
    return response.text.strip()

def text_to_voice(sentence):
    tts = gTTS(sentence, lang='en', slow=False)
    tts.save("output.mp3")
    os.system("mpg123 output.mp3")

def voice_to_text():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
    try:
        return recognizer.recognize_google(audio)
    except:
        return "Could not understand audio"

# Get command-line arguments
if len(sys.argv) > 1:
    input_text = sys.argv[1]
    corrected_sentence = correct_sign_language(input_text)
    print(corrected_sentence)
    text_to_voice(corrected_sentence)
else:
    recognized_text = voice_to_text()
    print(recognized_text)
