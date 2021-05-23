# Speakit
Speakit is a JavaScript library to make speech recognition easier.


# API Example
```javascript
var speech_recognition_obj=new Speakit();

speech_recognition_obj.onspeechend=function(text){
alert(text);
}

speech_recognition_obj.startRecognition();
```
