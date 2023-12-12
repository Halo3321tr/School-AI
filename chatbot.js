const annyang = require:("./annyang");

if (annyang) {
       var voices;
   var utter = new SpeechSynthesisUtterance
   utter.rate=1;
   utter.pitch=0,5;
   utter.lang='en-US'



   window.speechSynthesis.onvoiceschanged = function () {

        voices = window.speechSynthesis.getVoices();
        console.log(voices)
   };

   var commands = {
    'hello': function() { 
        alert('Hello world!'); 
    }
  };
   
        annyang.addCallback('result', function(phrases){
         console.log("I think the user said: ", phrases[0]);
         console.log("But then again it could be any of the following: ", phrases);
        });
     // Add our commands to annyang
        annyang.addCommands(commands);

     // Start listening.
        annyang.start({autoRastart: false, continuous: true});
  } 
