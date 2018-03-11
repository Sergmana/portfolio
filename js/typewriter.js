window.onscroll = function() {typeWriter()};
var i = 0;
var txt = 'We are an Ukranian Studio, that believe in having a good time while doing what we love, and we do love what we do!'; /* The text */
var speed = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}