const timeDisplay = document.querySelector('.clock-display');
const clockFace = document.querySelector('.clock-face');
const progressBar = document.querySelector('.clock-progress-bar');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var hextime;
var today;
let count = setInterval(timer, 1000);
console.dir(clockFace);
console.log(time); //this logs console time on page load


//timer() is the guts of the clock.
function timer() {
today = new Date();
h = today.getHours();
m = today.getMinutes();
s = today.getSeconds();
//if hours, mins and secs are single digits, the statements below add a 0
if (h <= 9) { h = "0"+h; }
if (m <= 9) { m = "0"+m; }
if (s <=9) { s = "0"+s; }
time = h + ":" + m + ":" + s;
hexSec = s.toString(16);
timeDisplay.textContent = time;
percent = (s / 100);
//console.log(`Time: ${time} Percent: ${percent} Color: ${hexColor}`);
barLength = (14 * percent);
hexColor = `#4${hexSec}0${hexSec}`;
clockFace.style.backgroundColor = `${hexColor}`;
progressBar.style.width = `${barLength}rem`
return time;
}

//INTERVAL BELOW IS THE DEFAULT ENGINE FOR THE CLOCK - REACTIVATE
//IF MOUSEOVERS DON'T WORK
//setInterval(timer, 1000);


function mouseFace(){
  clearInterval(count);
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  if (s <=9) {
    s = "0"+s;
  }
  time = h.toString(16) + ":" + m.toString(16) + ":" + s.toString(16);
  //timeDisplay.textContent = time;
  hexSec = s.toString(16);
  hexColor = `#${hexSec}${hexSec}${hexSec}`;
  timeDisplay.textContent = `${hexColor}`;

}
function mouseFaceLeave(){
  count = setInterval(timer, 1000);
}

timeDisplay.addEventListener('mouseover', mouseFace);
timeDisplay.addEventListener('mouseleave', mouseFaceLeave);
