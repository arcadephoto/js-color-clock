const timeDisplay = document.querySelector('.clock-display');
const clockFace = document.querySelector('.clock-face');
const progressBar = document.querySelector('.clock-progress-bar');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var hextime;
var today;
var yourNum = 192;
console.dir(clockFace);
console.log(time);


// function timer(){
//   d = new Date();
// 	h = d.getHours();
// 	m = d.getMinutes();
// 	s = d.getSeconds();
//   time = `${h} ${m} ${s}`;
//   timeDisplay.textContent = time;
//   return time;


function timer() {
today = new Date();
h = today.getHours();
m = today.getMinutes();
s = today.getSeconds();
if (h <= 9) {
  h = "0"+h;
}
if (m <= 9) {
  m = "0"+m;
}
if (s <=9) {
  s = "0"+s;
}
time = h + ":" + m + ":" + s;
hexSec = s.toString(16);
timeDisplay.textContent = time;
percent = (s / 100);
console.log(`Time: ${time} Percent: ${percent} Hex: ${hexSec}`);
barLength = (14 * percent);
progressBar.style.width = `${barLength}rem`
return time;
}

function secondTime(){
  today = new Date();
  seconds = today.getSeconds();
  percent = seconds / 100;
  console.log(percent);
}

setInterval(timer, 1000);


function mouseFace(){
  timeDisplay.textContent = yourNum.toString(16);
  clockFace.style.backgroundColor = "red";

}

timeDisplay.addEventListener('mouseover', mouseFace);
