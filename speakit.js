var SpeakitArray={};class Speakit{constructor(){return SpeakitArray}}SpeakitArray.startRecognition=function(e){var t=t||webkitSpeechRecognition,n=n||webkitSpeechGrammarList,r=r||webkitSpeechRecognitionEvent,i=new t;i.continuous=!1,i.lang="en-US",i.interimResults=!1,i.maxAlternatives=1,i.start(),i.onresult=function(e){SpeakitArray.onspeechend(e.results[0][0].transcript)},i.onspeechend=function(){i.stop()}};
