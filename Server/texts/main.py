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
        "Convert the following Sign Language sentence into correct English:\n"
        "Just type the corrected sentence. No need of extra instructions and information:\n"
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
        print("Speak something...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
    try:
        sentence = recognizer.recognize_google(audio)
        print(f"Recognized Sentence: {sentence}")
        return sentence
    except sr.UnknownValueError:
        print("Could not understand the audio.")
        return None
    except sr.RequestError:
        print("Could not request results, please check your internet connection.")
        return None

def break_into_words(sentence):
    words = sentence.split()
    print(f"Words: {words}")
    return words

# Run an infinite loop for user input
while True:
    mode = input("Choose mode - (1) Sign to Speech, (2) Speech to Words, (exit to stop): ")

    if mode.lower() == "exit":
        break
    elif mode == "1":
        user_input = input("Enter Sign Language Sequence: ")
        corrected_sentence = correct_sign_language(user_input)
        print(f"Corrected English: {corrected_sentence}\n")
        text_to_voice(corrected_sentence)
    elif mode == "2":
        sentence = voice_to_text()
        if sentence:
            words = break_into_words(sentence)


