import sys
import google.generativeai as genai
from gtts import gTTS
import os
import speech_recognition as sr

genai.configure(api_key="AIzaSyDlXrudnYp2reey6iuRHYEwthJuuBiDqSg")  
model = genai.GenerativeModel("gemini-1.5-pro")

def correct_sign_language(sentence):
    prompt = f"Convert the following Sign Language sentence into correct English:\nSign Language: {sentence}\nEnglish Sentence:"
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
    except (sr.UnknownValueError, sr.RequestError):
        return None

def break_into_words(sentence):
    return " ".join(sentence.split())

if __name__ == "__main__":
    mode = sys.argv[1]

    if mode == "sign":
        input_text = sys.argv[2]
        corrected_text = correct_sign_language(input_text)
        text_to_voice(corrected_text)
        print(corrected_text)

    elif mode == "speech":
        sentence = voice_to_text()
        if sentence:
            words = break_into_words(sentence)
            print(words)
