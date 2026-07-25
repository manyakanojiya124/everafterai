from TTS.api import TTS

tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2")

speaker_refs = [
    r"C:\Users\amphi\OneDrive\Desktop\Strivers\everafterai\backend\uploads\voice_references\1\Day 1.wav",
    r"C:\Users\amphi\OneDrive\Desktop\Strivers\everafterai\backend\uploads\voice_references\1\Day 2.wav",
    r"C:\Users\amphi\OneDrive\Desktop\Strivers\everafterai\backend\uploads\voice_references\1\Day 3.wav",
    r"C:\Users\amphi\OneDrive\Desktop\Strivers\everafterai\backend\uploads\voice_references\1\Day 4.wav",
    r"C:\Users\amphi\OneDrive\Desktop\Strivers\everafterai\backend\uploads\voice_references\1\Day 5.wav",
    r"C:\Users\amphi\OneDrive\Desktop\Strivers\everafterai\backend\uploads\voice_references\1\Day 6.wav",
]

tts.tts_to_file(
    text="""
नमस्ते, मेरा नाम एवरआफ्टर एआई है।
मैं आपकी यादों को संजोकर रखने और आपके प्रिय लोगों की आवाज़ को सुरक्षित रखने के लिए बनाया गया हूँ।

आज मैं आपकी आवाज़ की गुणवत्ता जाँचने के लिए यह लंबा संदेश बोल रहा हूँ।
यदि आप यह संदेश सुन रहे हैं, तो इसका मतलब है कि मॉडल सही तरीके से काम कर रहा है।

मुझे उम्मीद है कि मेरी आवाज़ आपके दिए गए संदर्भ ऑडियो से काफी मिलती-जुलती होगी।
यदि आवाज़ पूरी तरह समान नहीं लगती, तो चिंता की बात नहीं है।
बेहतर परिणामों के लिए लगभग तीस से साठ सेकंड की साफ़, बिना किसी शोर वाली रिकॉर्डिंग का उपयोग करें।

रिकॉर्डिंग के दौरान कोशिश करें कि केवल एक ही व्यक्ति बोल रहा हो, पीछे कोई संगीत न हो और माइक्रोफोन स्पष्ट आवाज़ रिकॉर्ड कर रहा हो।
जितनी अच्छी संदर्भ रिकॉर्डिंग होगी, उतनी ही बेहतर आवाज़ की क्लोनिंग होगी।

धन्यवाद।
मुझे उम्मीद है कि एवरआफ्टर एआई आपके लिए यादों को जीवित रखने का एक सुंदर माध्यम बनेगा।
""",
    speaker_wav=speaker_refs,
    language="hi",
    file_path="output.wav",
)

print("Done!")