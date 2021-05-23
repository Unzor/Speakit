# Speakit
Speakit is a JavaScript library to make speech recognition and text-to-speech easier.


# API Example

This example will repeat what you just said.

```javascript
var speech_recognition_obj=new Speakit();

speech_recognition_obj.onspeechend=function(text){
speech_recognition_obj.speak(text);
}

speech_recognition_obj.startRecognition();
```
