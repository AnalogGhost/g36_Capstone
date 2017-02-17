'use strict';

function spokenOutput (str) {
  var u = new SpeechSynthesisUtterance();
  var synth = window.speechSynthesis;
  u.text = str;
  u.lang = 'en-US';
  u.rate = 0.7;
  //  u.voice = voices[0];
  u.onend = function(event) {
   setTimeout(function() {
     console.log(str);
   }, (Math.floor(Math.random()*11000)));
 };
  speechSynthesis.speak(u);
}

function selectVerbalString (arrOfStrings) {
  return (arrOfStrings[Math.floor(Math.random()*arrOfStrings.length)]);
}

function setArrOfIpsums () {
  var ipsumArray = [];
  var index = 0;

  ipsumArray[index] = "Runs third baseman fair hot dog gap warning track crooked number.";
  index++;
  ipsumArray[index] = "Take stance losses appeal baseball card outs mustard streak.";
  index++;
  ipsumArray[index] = "Rubber game practice umpire outfielder rope alley pickoff grass.";
  index++;
  ipsumArray[index] = "Count in the hole third baseman left field rotation, line drive tossed choke up starting pitcher.";
  index++;
  ipsumArray[index] = "Shortstop dribbler rhubarb save disabled list slider on deck alley national pastime.";
  index++;
  ipsumArray[index] = "Balk rubber game rookie foul perfect game swing cookie outfielder.";
  index++;
  ipsumArray[index] = "Cracker jack loss gapper butcher boy bandbox team bullpen loogy.";
  index++;
  ipsumArray[index] = "Basehit yankees hit by pitch inning knuckle good eye tapper.";
  index++;
  ipsumArray[index] = "First base bush league dodgers fair slider baseline knuckle.";
  index++;
  ipsumArray[index] = "Shutout full count nubber check swing unearned run starter rake southpaw slider.";
  index++;
  ipsumArray[index] = "Alley error bush league earned run ground ball second baseman rip rope.";
  index++;
  ipsumArray[index] = "Foul line on deck designated hitter center fielder slugging, breaking ball mustard.";

  return(ipsumArray);

}

var baseballSpeakArray = setArrOfIpsums();

document.getElementById('voiceButton').addEventListener("click", () => {
  spokenOutput(selectVerbalString(baseballSpeakArray));
});

document.getElementById('title').addEventListener("click", () => {
  spokenOutput('Eephus Chatterbox');
});

document.getElementById('subtitle').addEventListener("click", () => {
  spokenOutput('A conversational baseball application.');
});

document.getElementById('summary').addEventListener("click", () => {
  spokenOutput('Summary... Using voice as interface, Eephus Chatterbox engages in conversation with the user. Speech Synthesis Markup Language snippets are employed via the Angular framework so that output changes dynamically with user input... (verbal data-binding). This creates the illusion of memory and conversational back-and-forth as the user assembles a fantasy baseball team for a head-to-head matchup against the Eephus AI.... This stuff makes me sound smart!');
});

document.getElementById('tech').addEventListener("click", () => {
  spokenOutput('Tech used... Web Speech API, Amazon Skills Kit (ASK), Googe Voice API, MySportsFeeds API, Angular 1.6, PostgreSQL, ssml.js, knex, pure.css, html5, css3, node.js, heroku, and the Amazon Echo Dot.');
});
