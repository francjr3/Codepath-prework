//Global constants
const clueHoldTime = 500;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
const reduceDelayTime = 35;
const guessTime = 15;

//Global variables
var pattern = [2, 2, 4, 3, 2, 1, 6, 5];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var triesCounter = 3;
var timer = 0;
var timeInterval;


function generatePattern() {
  let newPattern = [];
  for(let i=0; i<=8; i++) {
    newPattern[i] = Math.floor(Math.random() * 6) + 1; // selects random number [1,6]
  }
  pattern = newPattern;
}

function resetTryDisplay() {
  for(let i=1;i<=3;i++) {
    clearLoseTry(i);
  }
}

function setGuessTimer() {
  document.getElementById("timerCountdown").innerHTML = "Time Remaining &#8986: "+timer+" seconds...";
}

function createTimeInterval() {
  timeInterval = setInterval(decreaseTime, 1000);
}

function startGame(){
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  triesCounter = 3;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  timer = guessTime;
  setGuessTimer();
  generatePattern();
  resetTryDisplay();
  playClueSequence();
}

function stopGame(){
  //resets game variables
  gamePlaying = false;
  timer = guessTime;
  clearInterval(timeInterval);
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}

function loseTry(btn) {
  document.getElementById("try"+btn).classList.add("lostTry");
  document.getElementById("try"+btn).classList.remove("lit");
}

function clearLoseTry(btn) {
  document.getElementById("try"+btn).classList.remove("lostTry");
  document.getElementById("try"+btn).classList.add("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function decreaseTime() {
  if (timer > 0) {
    timer--;
    setGuessTimer();
  } else {
    document.getElementById("timerCountdown").innerHTML = "Time Remaining &#8986: time is up!";
    loseGame();
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; // set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime - (progress * reduceDelayTime); // reduces time by reduceDelayTime per progress made
    delay += cluePauseTime;
  }
  setTimeout(createTimeInterval,delay);
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn == pattern[guessCounter]){
    // correct guess
    if (guessCounter == progress){
      if (progress == pattern.length - 1){
        // sequence completed
        winGame();
      } else {
        // game's turn: plays sequence with extended sequence
        clearInterval(timeInterval);
        timer = guessTime;
        setGuessTimer();
        progress++;
        playClueSequence();
      }
    } else {
      // update # of correct moves
      guessCounter++;
    }
  
  } else {
    //incorrect guess
    loseTry(triesCounter); // updates # of tries display
    triesCounter--;
    if (triesCounter == 0) {
      loseGame();
    }
  }
}

//End game behavior
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You Won!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 529.1,
  6: 592
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
