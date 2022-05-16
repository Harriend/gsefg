x = 0;
y = 0;
screenWidth = 0;
screenHeight = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
  console.log("recognition has started");
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 console.log('it has started actually')

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
 
    to_number = Number(content);

    if(Number.isInteger(to_number)){
      draw_apple = "set";
    }else{
      document.getElementById('status').innerHTML = "The speech has not been recognized as a number";
    }
}

function setup() {

  canvas = createCanvas(1000 , 500)
 
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i <= to_number; i++){
    
      x = Math.floor(Math.random()*950);
      y = Math.floor(Math.random()*450);

      image(apple , x , y , 50 , 50)

    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number;
    document.getElementById('status').innerHTML = to_number + "Apples drawn";
    speak;

  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){
  apple = loadImage('apple.png');
}