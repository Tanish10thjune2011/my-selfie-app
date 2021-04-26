var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
document.getElementById("textbook").innerHTML="";

recognition.start();

}
recognition.onresult=function(event)
{

console.log(event);

var Content=event.results[0][0].transcript;

document.getElementById("textbook").innerHTML=Content;

console.log(Content);


}