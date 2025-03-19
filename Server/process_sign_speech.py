import sys
import google.generativeai as genai
from gtts import gTTS
import os
import speech_recognition as sr
api_key = os.getenv("GEMINI_API_KEY")

# Configure API Key
genai.configure(api_key=api_key)  
model = genai.GenerativeModel("gemini-1.5-pro")

def correct_sign_language(sentence):
    prompt = f"Convert the following Sign Language sentence into correct English:\nJust give me response. No need of extra instructions and information:\nSign Language: {sentence}\nEnglish Sentence:"
    response = model.generate_content(prompt)
    return response.text.strip()

def text_to_voice(sentence):
    tts = gTTS(sentence, lang='en', slow=False)
    tts.save("output.mp3")
    os.system("mpg123 output.mp3")  
    os.remove("output.mp3")
    print("sentence",sentence)
    return sentence  

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
        # Ensure input_text is provided
        if len(sys.argv) < 3:
            print("ERROR: No input text provided", file=sys.stderr)
            sys.exit(1)
        
        input_text = sys.argv[2]
        corrected_text = correct_sign_language(input_text)
        # Print the corrected text for debugging
        print(corrected_text)
        # Convert text to speech
        text_to_voice(corrected_text)

        sys.stdout.flush() 
        sys.exit(0)  # Indicate successful execution
    
    elif mode == "speech":
        sentence = voice_to_text()
        if sentence:
            words = break_into_words(sentence)
            print(words)
            sys.stdout.flush()
            sys.exit(0)  # Indicate successful execution
        else:
            print("ERROR: Could not recognize speech", file=sys.stderr)
            sys.exit(1)
