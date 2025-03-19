# import sys
# import google.generativeai as genai
# from gtts import gTTS
# import os
# import speech_recognition as sr

# # API Configuration
# genai.configure(api_key="AIzaSy...")

# model = genai.GenerativeModel("gemini-1.5-pro")

# def correct_sign_language(sentence):
#     prompt = (
#         "Convert the following Sign Language sentence into correct English:\n"
#         f"Sign Language: {sentence}\n"
#         "English Sentence:"
#     )
#     response = model.generate_content(prompt)
#     return response.text.strip()

# def text_to_voice(sentence):
#     tts = gTTS(sentence, lang='en', slow=False)
#     tts.save("output.mp3")
#     os.system("mpg123 output.mp3")

# def voice_to_text():
#     recognizer = sr.Recognizer()
#     with sr.Microphone() as source:
#         recognizer.adjust_for_ambient_noise(source)
#         audio = recognizer.listen(source)
#     try:
#         return recognizer.recognize_google(audio)
#     except sr.UnknownValueError:
#         return "Error: Could not understand"
#     except sr.RequestError:
#         return "Error: Check your internet connection"

# # Process input
# input_type = sys.argv[1]  # "sign" or "voice"
# message = sys.argv[2]

# if input_type == "sign":
#     corrected_sentence = correct_sign_language(message)
#     print(corrected_sentence)
#     text_to_voice(corrected_sentence)

# elif input_type == "voice":
#     recognized_sentence = voice_to_text()
#     print(recognized_sentence)












import sys
import google.generativeai as genai
from gtts import gTTS
import os
import speech_recognition as sr

genai.configure(api_key="YOUR_GEMINI_API_KEY")
model = genai.GenerativeModel("gemini-1.5-pro")

def correct_sign_language(sentence):
    prompt = f"Convert the following Sign Language into correct English:\nSign Language: {sentence}\nEnglish Sentence:"
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
    except sr.UnknownValueError:
        return "Could not understand audio."
    except sr.RequestError:
        return "Check your internet connection."

input_type, message = sys.argv[1], sys.argv[2]

if input_type == "sign":
    output_text = correct_sign_language(message)
elif input_type == "speech":
    output_text = voice_to_text()
else:
    output_text = "Invalid input type"

print(output_text)
